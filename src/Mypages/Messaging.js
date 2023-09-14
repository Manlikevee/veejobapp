import React, { useEffect,  useState } from "react";
import Layout from '../components/Layout/Layout'
import Messagelayout from '../components/Layout/Messagelayout'
import Messagebodycontainer from "../components/Messagebody/Messagebodycontainer";
import Messageprofiledata from "../components/Messagebody/Messageprofiledata";
import Tick from "../components/Messagebody/Tick";
import { toast } from 'react-toastify';
import axiosInstance from '../service/axiosinterceptor'
import ScrollableFeed from 'react-scrollable-feed';
import { getUser } from "../service/auth";
import {Link} from "gatsby"
import dayjs from 'dayjs';
import MySpinner from "../components/Messagebody/MySpinner"
import Linkify from 'react-linkify';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';

function getTimeAgo(dateString) {
  const currentDate = new Date();
  const date = new Date(dateString);

  const minutesDiff = differenceInMinutes(currentDate, date);
  const hoursDiff = differenceInHours(currentDate, date);
  const daysDiff = differenceInDays(currentDate, date);
  const monthsDiff = differenceInMonths(currentDate, date);
  const yearsDiff = differenceInYears(currentDate, date);

  if (minutesDiff < 1) {
    return 'just now';
  } else if (minutesDiff < 60) {
    return `${minutesDiff} minute${minutesDiff !== 1 ? 's' : ''} ago`;
  } else if (hoursDiff < 24) {
    return `${hoursDiff} hour${hoursDiff !== 1 ? 's' : ''} ago`;
  } else if (daysDiff < 30) {
    return `${daysDiff} day${daysDiff !== 1 ? 's' : ''} ago`;
  } else if (monthsDiff < 12) {
    return `${monthsDiff} month${monthsDiff !== 1 ? 's' : ''} ago`;
  } else {
    return `${yearsDiff} year${yearsDiff !== 1 ? 's' : ''} ago`;
  }
}

function whatsappActive(dateString) {
  const currentDate = new Date();
  const date = new Date(dateString);

  const minutesDiff = differenceInMinutes(currentDate, date);

  if (minutesDiff < 1) {
    // User is active (less than 1 minute ago)
    return (
      <span>
        <span className="green-dot"></span> Active
      </span>
    );
  } else if (minutesDiff < 60) {
    return `Last Seen ${minutesDiff} minute${minutesDiff !== 1 ? 's' : ''} ago`;
  } else {
    const hoursDiff = differenceInHours(currentDate, date);

    if (hoursDiff < 24) {
      return `Last Seen ${hoursDiff} hour${hoursDiff !== 1 ? 's' : ''} ago`;
    } else {
      const daysDiff = differenceInDays(currentDate, date);

      if (daysDiff < 7) {
        return `Last Seen ${daysDiff} day${daysDiff !== 1 ? 's' : ''} ago`;
      } else if (daysDiff < 30) {
        const weeksDiff = Math.floor(daysDiff / 7);
        return `Last Seen ${weeksDiff} week${weeksDiff !== 1 ? 's' : ''} ago`;
      } else {
        const monthsDiff = differenceInMonths(currentDate, date);

        if (monthsDiff < 12) {
          return `Last Seen ${monthsDiff} month${monthsDiff !== 1 ? 's' : ''} ago`;
        } else {
          const yearsDiff = differenceInYears(currentDate, date);
          return `Last Seen ${yearsDiff} year${yearsDiff !== 1 ? 's' : ''} ago`;
        }
      }
    }
  }
}



const Messaging = () => {
  const [isloading, setisloading] = useState(true);
  const [myresponsed, setmuresponsed] = useState('');
  const [responsedata, setresponsedata] = useState('');
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [Usersname, setUsersname] = useState();
  const [sendingmessage, setSendingmessage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedimageurl, setselectedimageurl] = useState(null)
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const [newmessagedata, setnewmessagedata] = useState([]);


  useEffect(() => {
    // Get the loanReference query parameter from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const mmmm = queryParams.get('messageid');
    setmuresponsed(mmmm);
    const myres = mmmm
    if (myres) {
    axiosInstance.get(`/messageportal/${myres}/`)
      .then(response => {
        // console.log(response.data);
        toast.success('fetched data')
        setresponsedata(response.data);
        setnewmessagedata(response.data.allmessages);
        setUsersname(getUser().username);
        setisloading(false);
      })
      .catch(error => {
        toast.error('Error fetching profile data')
        console.error("Error fetching profile data:", error);
        setisloading(false);
      });

    }
    else{
      alert('no ref')
    }
  }, []);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/messageportal/${myresponsed}/`);
        // Handle the response as needed

        setresponsedata(response.data);
        setnewmessagedata(response.data.allmessages);
        // console.log(response.data);
      } catch (error) {
        // Fail silently without showing errors
        console.error('Fetch error (silently ignored)', error);
      }
    };
  
    // Check if myres exists before fetching data
    if (myresponsed) {
      // Fetch data initially
      fetchData();
  
      // Fetch data every 10 seconds
      const intervalId = setInterval(fetchData, 5000);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [myresponsed]);
  

  // useEffect(() => {

  // }, []);








  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setSelectedImage(selectedImage);
    if (selectedImage) {
      // Create a URL for the selected image and set it in state
      const imageUrl = URL.createObjectURL(selectedImage);
      setselectedimageurl(imageUrl);
    }
  };
  

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  
  const handleSendMessage = async () => {
    if (inputText.trim() === "" && !selectedImage) {
      toast.error('Message cannot be blank');
      return; // Don't send empty messages
    }

    try {
      setSendingmessage(true);

      // Create a new message object with the current time
      const newMessage = {
        text: inputText,
        time: new Date().toLocaleTimeString(),
        status: "sending",
        imageURL: selectedimageurl, // Set the imageURL with the selected image
      };

      setMessages([...messages, newMessage]);
      // Check if an image is selected
      if (selectedImage) {
        // Create a FormData object to send text and image
        const formData = new FormData();
        formData.append('myimg', selectedImage);
        formData.append('keyword', inputText);

        // Make an API request to send both text and image
        const response = await axiosInstance.post(`/messageportal/${myresponsed}/`, formData);

        // Handle the successful response, if needed
        // console.log("Message sent:", response.data);
        toast.success('Sent successfully');
        setresponsedata(response.data);
        setnewmessagedata(response.data.allmessages);
      } else {
        // No image selected, send only the text
        const response = await axiosInstance.post(`/messageportal/${myresponsed}/`, {
          keyword: inputText,
        });

        // Handle the successful response, if needed
        // console.log("Message sent:", response.data);
        toast.success('Sent successfully');
        setresponsedata(response.data);
        setnewmessagedata(response.data.allmessages);
      }

      // Add the new message to the list of messages
        const updatedMessages = messages.filter(
        (message) => message.text !== inputText
      );
      setMessages(updatedMessages);

      // Clear the input field and image
      setInputText("");
      setSelectedImage(null);
      setSendingmessage(false);
    } catch (error) {
      // Handle the error (e.g., show an error message)
      setSendingmessage(false);
      console.error("Message sending failed:", error);
    }
  };

  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupImage(null);
    setShowPopup(false);
  };


  return (
    
    <Messagelayout>
        <br/>
        {isloading ? ( <>Loading.......</> ) : ( 

<>

{showPopup && (
        <div className="imagepopup-overlay">
          <div className="popup-content">
            <span className="close-buttons" onClick={closePopup}>
              &times;
            </span>
            <LazyLoadImage
   alt="Popup Image"
    effect="blur"
    src={popupImage} />
      
          </div>
        </div>
      )}

<div className='messagingflexbox'>
<div className="messagingbox">

          <div className="msgtitle">
            <div className="job-card-title dbd">Messages</div>
            <div className="jmini">Discover Opportunities..</div>
          </div>
          <div className="forminput wwq">
              <input
                type="email"
                placeholder="Search for User"
                name="username"
                id="id_username"
              />
            </div>
          <div className="messagingflow">
        

          <>
{newmessagedata?.length > 0 ? (
                  newmessagedata.map((md, index) => (
         
          <Link to={`/app/Messaging/?messageid=${md.messageid.messageid}`} className="dbmessagingbox">
              <div className="messagingboxicon">
              {md.messageid.sender.username == Usersname ? (
                <>                <img
                src={md.messageid.receiver_profile.avatar}
                alt=""
              />
             
                </>
                ) : ( <img
                  src={md.messageid.sender_profile.avatar}
                  alt=""
                />) }
              </div>
              <div className="dbmessagingtext">
                <div className="job-card-title">
                  {md.messageid.sender.username == Usersname ? (md.messageid.reciever.username) : (md.messageid.sender.username) }
                  </div>
                <div className="jmini">
                  {md.testj.length > 0 ? md.testj[md.testj.length - 1].message : ('Send a message now') }
               
                </div>
              </div>
            </Link>   ))
           ) : '' }
</>


            <div className="dbmessagingbox">
              <div className="messagingboxicon">
                <img
                  src="https://i.pinimg.com/564x/37/ef/13/37ef13b5f1d38d72b01ff07675b4d8bd.jpg"
                  alt=""
                />
              </div>
              <div className="dbmessagingtext">
                <div className="job-card-title">Victor Odah</div>
                <div className="jmini">
                  victor odah ebube dbd d Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
            <div className="dbmessagingbox">
              <div className="messagingboxicon">
                <img
                  src="https://i.pinimg.com/564x/00/29/93/002993ca60ccc2ad63e90d60c019163f.jpg"
                  alt=""
                />
              </div>
              <div className="dbmessagingtext">
                <div className="job-card-title">Victoria justice</div>
                <div className="jmini">
                  victor odah ebube dbd d Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
          </div>
        </div>

    <div className="chatcontain">

    <div className="user-bar">
  <div className="back">
    <i className="zmdi zmdi-arrow-left" />
  </div>
  <div className="avatar">
    {/* <img src="https://i.ibb.co/2Yg7tWv/Rumbiiha-Swaibu.jpg" alt="Avatar" /> */}
    
    {responsedata?.usersdataserialized?.sender?.username == Usersname ? (
                <>                <img
                src={responsedata?.usersdataserialized?.receiver_profile.avatar}
                alt=""
              />
             
                </>
                ) : ( <img
                  src={responsedata?.usersdataserialized?.sender_profile.avatar}
                  alt=""
                />) }
  </div>
  {responsedata?.usersdataserialized?.sender?.username == Usersname ?

   (  
    <div className="name">
    <span> {responsedata?.usersdataserialized?.reciever.username} </span>
    <span className="status">    {whatsappActive(responsedata?.usersdataserialized?.receiver_profile.last_seen)}   </span>
    </div>
    ) : ( 
      <div className="name">
      <span> {responsedata?.usersdataserialized?.sender.username} </span>
      <span className="status">    {whatsappActive(responsedata?.usersdataserialized?.sender_profile.last_seen)}   </span>
      </div>
    
    )  }



  <div className="actions more">
    <i className="zmdi zmdi-more-vert" />
  </div>
  <div className="actions attachment">
    <i className="zmdi zmdi-phone" />
  </div>
  <div className="actions ">
    <img src="https://i.ibb.co/LdnbHSG/ic-action-videocall.png" className='nnnd' />
  </div>
</div>

    <ScrollableFeed>
        <div className='dflex'>
   
        {responsedata ? (
                  <>
                   {responsedata.messageserialized.testj.length > 0 ? (
                  responsedata.messageserialized.testj.map((activityData, index) => (
   
                    <div className={`outboxs ${activityData.sender === Usersname ? 'sendings' : activityData.reciever === Usersname ? 'receives' : 'receives'}`}>
                  
                  {activityData.image ? (
                                    <LazyLoadImage
                                    alt="Popup Image"
                                    onClick={() => openPopup(activityData.imageurl.image)}
                                     effect="blur"
                                   src={activityData.imageurl.image} />) : ''}
                     <Linkify> {activityData.message} </Linkify>
                       <span className="metadata">
                   
                         <span className="time">
                         {getTimeAgo(activityData.messagetime)} 
                         
                         </span>
                         <Tick/>
                       </span>
                     </div>
   
                    ))
           ) : '' }
                  </>
                ): ''}
             
             
                {messages.map((message, index) => (
                <>
      
        <div className="outboxs sendings opc" key={index}>
          {message.imageURL ? (<img src={message.imageURL} alt='dbdbd' onClick={() => openPopup(message.imageURL)} />): ''}
        

        <Linkify>{message.text}</Linkify>
        <span className="metadata">
    
          <span className="time">{message.time} pm</span>
          <Tick/>
        </span>
      </div>
      </>
      ))}
             





</div>

    
      </ScrollableFeed>
      <div
            id="form"
            className="conversation-compose"
            onsubmit="event.preventDefault();"
          >
            <div className="emoji"></div>
            <input
              id="val"
              className="input-msg"
              name="input"
              placeholder="Type a message"
              autoComplete="off"
              autofocus=""
              value={inputText}
              onChange={handleInputChange}
            />
            <div className="photo">
            <label for="fileInput" class="camera-button">
                    <input type="file" id="fileInput" accept="image/*" onChange={handleImageChange}/>
            <span class="material-symbols-outlined zmdi zmdi-camera">
           photo_camera
            </span>
</label>
            </div>
            <span id="speak" />
{!sendingmessage ? (      <span className="send" onClick={handleSendMessage}>
              <div className="circle">
              <span class="material-symbols-outlined zmdi zmdi-mail-send">
send
</span>

              </div>
            </span>) : (      <span className="send ">
              <div className="circle">
              <span class="material-symbols-outlined zmdi loading-icon zmdi-mail-send">
              cached
</span>
 
              </div>
            </span>) }

      
          </div>


</div>
</div>
</>
        ) }



        </Messagelayout>
  )
}

export default Messaging