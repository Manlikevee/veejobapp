import React, { useEffect, useRef, useState } from "react";
import Layout from '../components/Layout/Layout'
import Messagelayout from '../components/Layout/Messagelayout'
import Messagebodycontainer from "../components/Messagebody/Messagebodycontainer";
import Messageprofiledata from "../components/Messagebody/Messageprofiledata";
import Tick from "../components/Messagebody/Tick";
import { toast } from 'react-toastify';
import axiosInstance from '../service/axiosinterceptor'
import { getUser } from "../service/auth";
import dayjs from 'dayjs';
import MySpinner from "../components/Messagebody/MySpinner"
import Linkify from 'react-linkify';
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

  useEffect(() => {
    // Get the loanReference query parameter from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const mmmm = queryParams.get('messageid');
    setmuresponsed(mmmm);
    const myres = mmmm
    if (myres) {
    axiosInstance.get(`/messageportal/${myres}/`)
      .then(response => {
        console.log(response.data);
        toast.success('fetched data')
        setresponsedata(response.data);
        setUsersname(getUser().username)
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
        console.log(response.data);
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



  // const handleSendMessage = async () => {
  //   if (inputText.trim() === "") {
  //     toast.error('message cannot be blank')
  //     return; // Don't send empty messages
  //   }
  //   // Create a new message object with the current time
  //   setSendingmessage(true)
  //   const newMessage = {
    
  //     text: inputText,
  //     time: new Date().toLocaleTimeString(),
  //     status: "sending", // You can set a sending status
  //   };
  
  //   // Add the new message to the list of messages
  //   setMessages([...messages, newMessage]);
  //   try {
   
  //     // Make an API request to send the message
  //     const response = await axiosInstance.post(`/messageportal/${myresponsed}/`, {
  //       keyword: inputText,
  //     });
  
  //     const updatedMessages = messages.filter(
  //       (message) => message.text !== inputText
  //     );
  //     setMessages(updatedMessages);
  
  //     // Clear the input field
  //     setInputText("");

  //     // Handle the successful response, if needed
  //     console.log("Message sent:", response.data);
  //     toast.success('send successfully')
  //     setresponsedata(response.data);
  //     setSendingmessage(false)
  //     // Clear the input field

  
  //     // Update the state or take any other action
  //     // For example, you can set a status to "Sending" or update the UI
  //   } catch (error) {
  //     // Handle the error (e.g., show an error message)
  //     setSendingmessage(false)
  //     console.error("Message sending failed:", error);
  //   }
  // };
  

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
        console.log("Message sent:", response.data);
        toast.success('Sent successfully');
        setresponsedata(response.data);
      } else {
        // No image selected, send only the text
        const response = await axiosInstance.post(`/messageportal/${myresponsed}/`, {
          keyword: inputText,
        });

        // Handle the successful response, if needed
        console.log("Message sent:", response.data);
        toast.success('Sent successfully');
        setresponsedata(response.data);
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
            <img src={popupImage} alt="Popup Image" />
          </div>
        </div>
      )}

<div className="shareintotwo">
<div className="share1">
 <Messageprofiledata responsedata={responsedata} Usersname={Usersname} />
</div>

       <Messagebodycontainer>
        <div className="conversation">
          <div className="conversation-container" id="stb" >
            <div className="msms" style={{ width: "100%" }}>
              <div id="ap">


           

                {responsedata ? (
                  <>
                   {responsedata.messageserialized.testj.length > 0 ? (
                  responsedata.messageserialized.testj.map((activityData, index) => (
   
                    <div className={`messages ${activityData.sender === Usersname ? 'sent' : activityData.reciever === Usersname ? 'received' : 'received'}`}>
                  
                  {activityData.image ? (<img src={activityData.imageurl.image} alt="image" onClick={() => openPopup(activityData.imageurl.image)} />) : ''}
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
      
        <div className="messages sent opc" key={index}>
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
           
            </div>

      

          </div>
   
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
     
     </Messagebodycontainer>
    


</div>
</>
        ) }



        </Messagelayout>
  )
}

export default Messaging