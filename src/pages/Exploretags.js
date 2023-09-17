import React, { useEffect,  useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout/Layout'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import axiosInstance from "../service/axiosinterceptor";
import { getUser } from "../service/auth";
import { Link } from 'gatsby'
import Clock from "../components/Utility/Clock"
import Modalbx from "../components/Utility/Modalbx";
import { navigate } from 'gatsby';
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

function TextWithHashtags({ text }) {
  // Use regular expression to find hashtags and replace them with anchor tags
  const processedText = text.split(/(#\w+)/g).map((segment, index) => {
    if (segment.startsWith('#')) {
      const hashtag = segment.substring(1); // Remove the '#'
      return (
        <Link key={index} to={`/Exploretags/?tag=${hashtag}`}>
          {segment}
        </Link>
      );
    }
    return segment;
  });

  return <div>{processedText}</div>;
}
const Exploretags = () => {
  const [initialFetchCompleted, setInitialFetchCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isloading, setisloading] = useState(true);
  const [responsedata, setResponsedata] = useState([]);
  const [myresponseData, setmyResponseData] = useState('');
  const [inputText, setInputText] = useState("");
  const [textInput, setTextInput] = useState(''); // State to store the text input value
  const [imageFile, setImageFile] = useState(null);
  const [selectedimageurl, setselectedimageurl] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [newcomment, setNewcomment] = useState(false)
  const [timelineData, setTimelineData] = useState('')
  const [tagData, setTagdata] = useState('')
  const[randomusers, setrandomusers] = useState('')
  const [currentUserId, setcurrentUserId] = useState('')
  const [startIndex, setStartIndex] = useState(0); // Index to start loading more items
  const itemsPerPage = 10; // Number of items to load initially and per scroll
  const loadMoreThreshold = 200; // Distance from the bottom to trigger loading more
  const [Mycommenttext,setMycommenttext] = useState('')
  const [modalshow, setModalshow] = useState(false)
  const [modalload, setModalload] = useState(true)
  const [modaldata, setmodaldata] = useState('')
  const [Verificationtoken, SetVerificationtoken] = useState('');
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
  
  
  const [activeNavItem, setActiveNavItem] = useState('feed');
  
    const handleNavItemClick = (navItem) => {
      setActiveNavItem(navItem);
    };
  
    const [boxes, setBoxes] = useState({
      feed: true,
      message: false,
      trend: false,
    });
  
    const toggleBoxVisibility = (boxId) => {
      const updatedBoxes = { ...boxes };
      Object.keys(updatedBoxes).forEach((key) => {
        updatedBoxes[key] = key === boxId;
      });
      setBoxes(updatedBoxes);
    };




  const openmdl = (postId) => {
   
    setModalshow(true)
    if (postId) {
      axiosInstance.get(`/postingsinglepage/${postId}`)
        .then(response => {
          console.log(response.data);
     
          setmodaldata(response.data);
          setModalload(false);
        })
        .catch(error => {
          toast.error('Error fetching profile data')
          console.error("Error fetching profile data:", error);
          setModalload(false);
        });
  
      }
      else{
        alert('no ref')
      }
  }

  const closeModal = (postId) => {
    setmodaldata('')
    setModalshow(false)
  }
 
 
  const LikeJob = (jobId) => {


    const data = {
      post_id: jobId,
      tagslug: Verificationtoken,
    };
    // Make the Axios POST request
    axiosInstance.post('/savedtimelinepost/', data)
      .then((response) => {
      
        // Handle the response here (e.g., update the UI)
        if (response?.data?.message){
          toast.info(response.data.message)
          setTimelineData(response.data.allposts)
          setTagdata(response.data.tagdata)
          if(modalshow){
            setmodaldata(response.data);
          }
        }
      })
      .catch((error) => {
        alert('error')
        // Handle any errors that occurred during the request
        console.error('Error:', error);
        toast.error('An Error Occured')
        
      });    
    // Make an API request to save the job with jobId for the current user
    // Update the UI to set activityData.isLiked to true if successful
  };


  const handleCommentTextInputChange = (event) => {
    const Mycommenttexts = event.target.value;

    if (Mycommenttexts.length <= 200) {
      setMycommenttext(Mycommenttexts);
    }
    else{
      toast.info('you cant type anymore')
    }
  };



  const CommentJob = (jobId ) => {
    const keyword = Mycommenttext
    setNewcomment(true)
    if(!keyword){
      alert('please type something')
      setNewcomment(false)
    }

    if(keyword){

      const data = {
        keyword: keyword,
        tagslug: Verificationtoken,
      };
      // Make the Axios POST request
      axiosInstance.post(`/newcomment/${jobId}/`, data)
        .then((response) => {
          setNewcomment(false)
          setMycommenttext('')
          // Handle the response here (e.g., update the UI)
          if (response?.data?.message){
            toast.info(response.data.message)
            setTimelineData(response.data.allposts)
            setmodaldata(response.data);
         
          }
        })
        .catch((error) => {
          alert('error')
          setNewcomment(false)
          // Handle any errors that occurred during the request
          console.error('Error:', error);
          toast.error('An Error Occured')
          
        });    
    }
   
    // Make an API request to save the job with jobId for the current user
    // Update the UI to set activityData.isLiked to true if successful
  };








  const handleTextInputChange = (event) => {
    const inputText = event.target.value;

    if (inputText.length <= 200) {
      setTextInput(inputText);
    }
  };

  const handleImageFileChange = (event) => {
    const file = event.target.files[0];
    const maxSizeInBytes = 1024 * 1024;

    if (file.size > maxSizeInBytes) {
      alert('File size exceeds the limit (1MB)');
      setImageFile(null); // Clear the image file in state
      setselectedimageurl(null); // Clear the selected image URL
    }
    else if (file) {
      const imageUrl = URL.createObjectURL(file);
      setselectedimageurl(imageUrl);
      setImageFile(file);
    } else {
      setselectedimageurl(null);
    }

   
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (textInput.trim() === '') {
      toast.error('Text input cannot be empty');
      return;
    }

   if (imageFile) {
      // Process the selected image file (e.g., upload it or display it)
      console.log('Selected Image File:', imageFile);
    }

    // Simulate receiving data from an API (you can replace this with your API call logic)
    const receivedData = {
      text: textInput,
      time: new Date().toLocaleTimeString(),
      imageURL: selectedimageurl,
    };

    // Update the responsedata state with the received data
    setResponsedata([...responsedata, receivedData]);

    // Clear the input fields
    setTextInput('');
    setImageFile(null);
    setselectedimageurl(null);

 

    setIsLoading(true);

    if(!newcomment){
      try {
        const formData = new FormData();
        formData.append('text', textInput);

  
        if (imageFile) {
          formData.append('myimg', imageFile);
        }
        setNewcomment(true)
        const response = await axiosInstance.post(`/newtimelinepost`, formData);
  
        console.log('Message sent:', response.data);
        setTagdata(response.data.trending)
        setTimelineData(response.data.allposts)
        setResponsedata([]);
        setNewcomment(false)
        toast.success('Form submitted successfully!');
      } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred while submitting the form.');
        setNewcomment(false)
      } finally {
        setIsLoading(false);
        setNewcomment(false)
  
        setTextInput('');
        setImageFile(null);
        setselectedimageurl(null);
      }
  
    }


  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setselectedimageurl(null);
  }


      
  useEffect(() => {
    let initialFetchCompleted = false;
        // Get the loanReference query parameter from the URL
        const queryParams = new URLSearchParams(window.location.search);
        const loanReferenceValue = queryParams.get('tag');
    
        SetVerificationtoken(loanReferenceValue);
    const fetchData = async () => {
        if(!loanReferenceValue){
alert('An Error Occured')
        }
      try {
   
        const response = await axiosInstance.get(`/tag/${loanReferenceValue}`);
        // Handle the response as needed
       

        if (!initialFetchCompleted) {
          toast.success('successfully fetched');
        } 
        
      
  
        setInitialFetchCompleted(true)
        setmyResponseData(response.data);
        setTimelineData(response.data.allposts)      
        setTagdata(response.data?.trending)  
        console.log(response.data);
        setLoading(false);
  
        // Set initialFetchCompleted to true once the initial fetch is successful
        if (!initialFetchCompleted) {
          setrandomusers(response.data.profileserializer)
          initialFetchCompleted = true;
          setcurrentUserId(getUser().id);
        }
      } catch (error) {
        // Handle errors
        if (!initialFetchCompleted){
          if (error.response && error.response.data && error.response.data.error) {
            toast.error(error.response.data.error);
          } else {
            toast.error('An error occurred while Loading Your Data');
          }
        }
        console.error('GET request error', error);

        setLoading(false);
      }
    };
  
    const intervalId = setInterval(() => {
      if (initialFetchCompleted) {
        fetchData();
      } else {
        console.log('Waiting');
      }
    }, 20000);
  
    // Fetch data initially
    fetchData();
  
    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);

  }, []);

  const Changetag = (tag) => {

    navigate(`/Exploretags/?tag=${tag}`);
  }

  const loadMoreItems = () => {
    setStartIndex((prevStartIndex) => prevStartIndex + itemsPerPage);
  };

  // Detect when the user scrolls to the bottom of the page
  const handleScroll = () => {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;

    const body = document.body;
    const html = document.documentElement;

    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    const windowBottom = windowHeight + window.pageYOffset;

    // Load more items when the user is close to the bottom
    if (windowBottom + loadMoreThreshold >= docHeight) {
      loadMoreItems();
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <Layout>

    <div className="wrapper detail-page">
  <div className="main-content">
    <div className="socialmediacontainer">
    
      <div className={`smediabox socialmediasideone ${boxes.message ? 'showing' : ''}`}>
        <div className="socialmediaend" >
  <Clock/>
        </div>
        <div className="tpadm">
          <div className="profiendedit">
            <div className="profilepho">
            <LazyLoadImage
            effect="blur"
              src={myresponseData?.myprofileserializer?.avatar}
              alt=""
            />
              
            </div>
            <br />
            <div className="nams"> VICTOR ODAH</div>
            <div className="emai">Odahviktor@gmail.com</div>
            <div className="phon">0701373576</div>
          </div>
        </div>
        <div className="newpostme">
        < form onSubmit={handleSubmit} className="socialmediaend">
          <div className="constructmessage">
            <div className="constructtop">
              <div className="constructimg">
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1687360441348-1bb4a85824e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  loading="lazy"
                />{" "}
              </div>
              <div className="constructtext fdc">
              <small className="ddsa">      Characters: {textInput.length} / 200</small>
   <div className="wids"> 
   {/* <input
                  type="text"
                  name=""
                  id=""

                  placeholder="What are You feeling"
                /> */}
                <textarea placeholder="Describe yourself here..."
                                  value={textInput}
                                  onChange={handleTextInputChange}
                ></textarea>
               
               {newcomment ? (
                <button>
                  <span className="send ">
              <div className="circle">
              <span class="material-symbols-outlined zmdi loading-icon zmdi-mail-send">
              cached
</span>
 
              </div>
            </span>
                </button>
               ) : (<button>Post</button>) }
                </div>
               
              </div>
         
            </div>
            <div className="constructbottom">
              <div className="constructimg">
                {" "}
                <img src="" alt="" loading="lazy" />{" "}
              </div>
              <div className="constructortext">
                <div className="hw">
              
                <label for="fileInput" class="camera-button">
                <div>
                <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageFileChange}
          />
                    <span className="material-symbols-outlined cam">
                      photo_camera
                    </span>{" "}
                    Photo/Video
                    </div>
                  </label>
               
                </div>
                <div className="hw">
                  {" "}
                  <div className="image">
                    <span className="material-symbols-outlined feels">
                      sentiment_satisfied
                    </span>{" "}
                    Feeling
                  </div>
                </div>
                <div className="hw">
                  {" "}
                  <div className="feeling">
                    <span className="material-symbols-outlined live">
                      live_tv
                    </span>{" "}
                    Live Video
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {imageFile && (
            <div className="wid">
              <img
                src={selectedimageurl}
                alt="Selected"
                className="myimgss"

              />
              <button type="button" onClick={handleRemoveImage}>
                Remove Image
              </button>
            </div>
          )}
        


        </form>
        </div>
        {/* <div class="socialmediaend">


          </div> */}
      </div>

      <div className={`smediabox socialmediasidetwo ${boxes.feed ? 'showing' : ''}`}>
        < form onSubmit={handleSubmit} className="socialmediaend">
          <div className="constructmessage">
            <div className="constructtop">
              <div className="constructimg">
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1687360441348-1bb4a85824e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  loading="lazy"
                />{" "}
              </div>
              <div className="constructtext fdc">
              <small className="ddsa">      Characters: {textInput.length} / 200</small>
   <div className="wids"> 
   {/* <input
                  type="text"
                  name=""
                  id=""

                  placeholder="What are You feeling"
                /> */}
                <textarea placeholder="Describe yourself here..."
                                  value={textInput}
                                  onChange={handleTextInputChange}
                ></textarea>
               
               {newcomment ? (
                <button>
                  <span className="send ">
              <div className="circle">
              <span class="material-symbols-outlined zmdi loading-icon zmdi-mail-send">
              cached
</span>
 
              </div>
            </span>
                </button>
               ) : (<button>Post</button>) }
                </div>
               
              </div>
         
            </div>
            <div className="constructbottom">
              <div className="constructimg">
                {" "}
                <img src="" alt="" loading="lazy" />{" "}
              </div>
              <div className="constructortext">
                <div className="hw">
              
                <label for="fileInput" class="camera-button">
                <div>
                <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageFileChange}
          />
                    <span className="material-symbols-outlined cam">
                      photo_camera
                    </span>{" "}
                    Photo/Video
                    </div>
                  </label>
               
                </div>
                <div className="hw">
                  {" "}
                  <div className="image">
                    <span className="material-symbols-outlined feels">
                      sentiment_satisfied
                    </span>{" "}
                    Feeling
                  </div>
                </div>
                <div className="hw">
                  {" "}
                  <div className="feeling">
                    <span className="material-symbols-outlined live">
                      live_tv
                    </span>{" "}
                    Live Video
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {imageFile && (
            <div className="wid">
              <img
                src={selectedimageurl}
                alt="Selected"
                className="myimgss"

              />
              <button type="button" onClick={handleRemoveImage}>
                Remove Image
              </button>
            </div>
          )}
        


        </form>
        <div className="socialmediascrollsection">




        {responsedata.slice().reverse().map((data, index) => (
         <> 
          <div key={index} className="socialmediapostcard opc">
            <div className="postcardheader">
              <div className="postcardprofilephoto">
                <img
                  src="https://plus.unsplash.com/premium_photo-1670588892214-19d7d31e4293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt=""
                />
              </div>

              <div className="postcarddetails">
                <div className="postcardname">@Codefive</div>
                <div className="postcarddataname">
                  {" "}
                  Web Developer at ISSL - Internet Solutions Services Limited{" "}
                </div>
                <div className="postcardtimeago"> {data.time} </div>
              </div>
            </div>
            <div className="postcardbody">
            {data.text}
            </div>
            <div className="postcardimage">

              {data.imageURL ? (
            <div className="pcphoto">
             <LazyLoadImage
            effect="blur"
              src={data.imageURL}
              alt=""
            />
          </div>

              ) : '' }
  
            </div>
            <div className="posthistory">
              <div className="postdata">
                <span>12</span>Comments
              </div>{" "}
              <div className="postdata">
                13<span>Shares</span>
              </div>
            </div>
            <div className="postcardbuttons">
              <div className="postcardline" />
              <div className="myactionbuttons">
                <div className="mypostbn">
                  <button>
                    <span className="material-symbols-outlined activated">
                      favorite
                    </span>{" "}
                    Like
                  </button>
                </div>
                <div className="mypostbn">
                  <button>
                    <span className="material-symbols-outlined">chat</span>
                    Comment
                  </button>
                </div>
                <div className="mypostbn">
                  <button>
                    <span className="material-symbols-outlined">share</span>
                    Share
                  </button>
                </div>
              </div>
              <div className="postcardline" />
            </div>
            <div className="comments">
              <div className="commentdata">
                <div className="commentinput">
                  <input type="text" placeholder="Leave A Commment" />{" "}
                  <button>
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>


          </>
        ))}



{loading ? ( <>Loading.......</> ) : (
<>

{modalshow ? (<Modalbx show={modalshow} closeModal={closeModal} modaldata={modaldata} LikeJob={LikeJob} newcomment={newcomment} CommentJob={CommentJob}
      handleCommentTextInputChange={handleCommentTextInputChange}      Mycommenttext= {Mycommenttext} currentUserId={currentUserId}
      />) : ('')}

{timelineData ? ( 
  timelineData.slice(0, startIndex + itemsPerPage).map((data, index) => (
  <div className="socialmediapostcard " >
  <div className="postcardheader">
    <div className="postcardprofilephoto">
    <LazyLoadImage
       effect="blur"
        src={data.sender_profile.avatar}
        alt=""
      />
    </div>
    <div className="postcarddetails">
      <div className="postcardname">@{data.user.username} </div>
      <div className="postcarddataname">
        {" "}
        Web Developer at ISSL - Internet Solutions Services Limited{" "}
      </div>
      <div className="postcardtimeago"> {getTimeAgo(data.messagetime)}  </div>
    </div>
  </div>
  <div className="postcardbody">
   <TextWithHashtags  text={data.message}  />
  </div>
  <div className="postcardimage">
<div className="pcphoto">
  {data.image? (
               <LazyLoadImage
               effect="blur"
                 src={data.image}
                 onClick={() => openmdl(data.messageid)}
                 alt=""
               />
  ) : '' }
  </div>
  </div>
  <div className="posthistory">
    <div className="postdata">
      <span>{data.likes.length}</span>Likes
    </div>{" "}
    <div className="postdata">
      {data?.testj?.length }<span>Comments</span>
    </div>
  </div>
  <div className="postcardbuttons">
    <div className="postcardline" />
    <div className="myactionbuttons">
      <div className="mypostbn">
     
      {data.likes.some((likedUser) => likedUser === currentUserId) ? (

<button onClick={() => LikeJob(data.messageid)} >
<span className="material-symbols-outlined activated">
  favorite
</span>{" "}
Like
</button>


        ) : (
          <button onClick={() => LikeJob(data.messageid)}>
<span className="material-symbols-outlined">
  favorite
</span>{" "}
Like
</button>
         
        )}



     
      </div>
      <div className="mypostbn">
        <button onClick={() => openmdl(data.messageid)}>
          <span className="material-symbols-outlined">chat</span>
          Comment
        </button>
      </div>
      <div className="mypostbn">
        <button >
          <span className="material-symbols-outlined">share</span>
          Share
        </button>
      </div>
    </div>
    <div className="postcardline" />
  </div>
  <div className="comments">
    <div className="commentdata">
      <div className="commentinput">
        <input type="text" placeholder="Leave A Commment" 
          value={Mycommenttext}
          onChange={handleCommentTextInputChange}
        />{" "}
     
     {newcomment ? (<button onClick={() => CommentJob(data.messageid)}>
          
     <span className="send ">
              <div className="circle">
              <span class="material-symbols-outlined zmdi loading-icon zmdi-mail-send">
              cached
</span>
</div>
</span>

        </button> )
     : (<button onClick={() => CommentJob(data.messageid)}>
          
          <span className="material-symbols-outlined">send</span>
        </button>) }
   
     
      </div>
    </div>
  </div>
  </div>   ))) : ('') } 
</>

) }

        


      

        </div>
      </div>

      <div className={`smediabox socilamediasidethree ${boxes.trend  ? 'showing' : ''}`}>
        <div className="socialmediaend">
          <div className="socaildata">
            <div className="socialmediahead">
              <div className="birthdaytext">Trends for you</div>
              <div className="bitthdaybody">
                <span className="material-symbols-outlined">celebration</span>
              </div>
            </div>
            <div className="socialmediatrendbody">
       
            {tagData ? ( 



  tagData?.map((data, index) => (
    <Link to={`/Exploretags/?tag=${data.name}`} onClick={() => Changetag(data.name)}   className="trendblock blks" key={data.name}>
    <div className="trendname">
      <div className="trendtitle">#{data.name}</div>
    </div>
    <div className="trenddot">
      <div className="trendnumber">{data.number} Tweets</div>
    </div>
  </Link>

))) : (
  
  <div className="trendblock">
  <div className="trendname">
    <div className="trendtitle">#TrendingPosts</div>
  </div>
  <div className="trenddot">
    <div className="trendnumber">50.4K Tweets</div>
  </div>
</div>
) } 

{/*            
              <div className="trendblock">
                <div className="trendname">
                  <div className="trendtitle">#Revolution</div>
                </div>
                <div className="trenddot">
                  <div className="trendnumber">50.4K Tweets</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="socialmediaend">
          <div className="socaildata">
            <div className="socialmediahead">
              <div className="birthdaytext">Who to follow</div>
              <div className="bitthdaybody">
                <span className="material-symbols-outlined">diversity_3</span>
              </div>
            </div>
            <div className="socialmediatrendbody">
             
            {randomusers ? ( 
  randomusers?.map((data, index) => (
    <div className="trendblock suggest" key={randomusers.id}>
    <div className="trendname">
      <div className="trendimage">
      <LazyLoadImage
            effect="blur"
              src={data.avatar}
              alt=""
            />
      </div>
      <div>
        <div className="trendtitle">{data.user.username}</div>
        <div className="trendnumber">@{data.user.username}</div>
      </div>
    </div>
    <div className="trenddot">
      <button>Follow</button>
    </div>
  </div>
 
))) : (  '' ) }
        
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</div>


<nav>
        <div className="nav-box">
          <div className="nav-container">
            <li className={`nav__item ${activeNavItem === 'feed' ? 'active' : ''}`}>
              <div  className="nav__item-link" onClick={() => { handleNavItemClick('feed'); toggleBoxVisibility('feed'); }}>
                <div className="nav__item-icon">
                  <span className="material-symbols-outlined">feed</span>
                </div>
                <span className="nav__item-text">Feed</span>
              </div>
            </li>

            <li className={`nav__item ${activeNavItem === 'message' ? 'active' : ''}`}>
              <div  className="nav__item-link" onClick={() => { handleNavItemClick('message'); toggleBoxVisibility('message'); }}>
                <div className="nav__item-icon">
                  <span className="material-symbols-outlined">add</span>
                </div>
                <span className="nav__item-text">Post</span>
              </div>
            </li>

            <li className={`nav__item ${activeNavItem === 'trend' ? 'active' : ''}`}>
              <div className="nav__item-link" onClick={() => { handleNavItemClick('trend'); toggleBoxVisibility('trend'); }}>
                <div className="nav__item-icon">
                  <span className="material-symbols-outlined">tag</span>
                </div>
                <span className="nav__item-text">Trend</span>
              </div>
            </li>
          </div>
        </div>
      </nav>


    </Layout>
  )
}

export default Exploretags