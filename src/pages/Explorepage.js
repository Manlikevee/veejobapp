import React, { useEffect,  useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout/Layout'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import axiosInstance from "../service/axiosinterceptor";
const Explorepage = () => {
  const [loading, setLoading] = useState(true);
  const [isloading, setisloading] = useState(true);
  const [responsedata, setResponsedata] = useState([]);
  const [myresponseData, setmyResponseData] = useState('');
  const [inputText, setInputText] = useState("");
  const [textInput, setTextInput] = useState(''); // State to store the text input value
  const [imageFile, setImageFile] = useState(null);
  const [selectedimageurl, setselectedimageurl] = useState(null)

  const handleTextInputChange = (event) => {
    const inputText = event.target.value;

    // Limit the number of characters to 200 characters
    if (inputText.length <= 200) {
      setTextInput(inputText);
    }
  };

  // Function to handle file input change
  const handleImageFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Process the selected image file (e.g., create an object URL)
      const imageUrl = URL.createObjectURL(file);
      setselectedimageurl(imageUrl);
    } else {
      // Clear the image if no file is selected
      setselectedimageurl(null);
    }

    setImageFile(file);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (textInput.trim() === '') {
      // Check if the text input is empty
      toast.error('Text input cannot be empty');
      return;
    }

    // Process the text input (e.g., store it or send it to an API)
    console.log('Text Input:', textInput);

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

    // Show a toast message upon successful submission
    toast.success('Form submitted successfully!');
  };

  // Function to handle removing the selected image
  const handleRemoveImage = () => {
    setImageFile(null);
    setselectedimageurl(null);
  };


  useEffect(() => {
    axiosInstance
      .get('/Timeline')
      .then(response => {
        // Handle the response as needed
        toast.success('successfully fetched');
    
        setmyResponseData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(error => {
        // Handle errors
        console.error('GET request error', error);
        if (error.response && error.response.data && error.response.data.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error('An error occurred while Loading Your Data');
        }
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    if(myresponseData){
      const fetchData = async () => {
        try {
          const response = await axiosInstance.get('/Timeline');
          // Handle the response as needed
  
          setmyResponseData(response.data);
          console.log(response.data);
        } catch (error) {
          // Fail silently without showing errors
          console.error('Fetch error (silently ignored)', error);
        }
      };
      fetchData();
  
      // Fetch data every 10 seconds
      const intervalId = setInterval(fetchData, 30000);
    
      // Cleanup the interval when the component unmounts
      return () => clearInterval(intervalId);
    }

  else{
    console.log('hello world')
  }
    // Fetch data initially

  }, []);



  return (
    <Layout>
    <div className="wrapper detail-page">
  <div className="main-content">
    <div className="socialmediacontainer">
      <div className="socialmediasideone">
        <div className="socialmediaend">
          <div id="MyClockDisplay" className="clocks" onload="showTime()" />
        </div>
        <div className="tpadm">
          <div className="profiendedit">
            <div className="profilepho">
              <img
                src="https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80"
                alt=""
              />
            </div>
            <br />
            <div className="nams"> VICTOR ODAH</div>
            <div className="emai">Odahviktor@gmail.com</div>
            <div className="phon">0701373576</div>
          </div>
        </div>
        {/* <div class="socialmediaend">


          </div> */}
      </div>
      <div className="socialmediasidetwo">
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
   <div className="wids"> <input
                  type="text"
                  name=""
                  id=""
                  value={textInput}
                  onChange={handleTextInputChange}
                  placeholder="What are You feeling"
                />
                <button>Post</button></div>
               
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
          <div key={index} className="socialmediapostcard">
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
{myresponseData ? ( 
  myresponseData.allposts.map((data, index) => (
  <div className="socialmediapostcard">
  <div className="postcardheader">
    <div className="postcardprofilephoto">
    <LazyLoadImage
       effect="blur"
        src={data.sender_profile.avatar}
        alt=""
      />
    </div>
    <div className="postcarddetails">
      <div className="postcardname">@{data.user.username}</div>
      <div className="postcarddataname">
        {" "}
        Web Developer at ISSL - Internet Solutions Services Limited{" "}
      </div>
      <div className="postcardtimeago"> 20 de janeiro </div>
    </div>
  </div>
  <div className="postcardbody">
{data.message}
  </div>
  <div className="postcardimage">
<div className="pcphoto">
  {data.image? (
               <LazyLoadImage
               effect="blur"
                 src={data.image}
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
  </div>   ))) : ('') } 
</>

) }

        


      

        </div>
      </div>
      <div className="socilamediasidethree">
        <div className="socialmediaend">
          <div className="socaildata">
            <div className="socialmediahead">
              <div className="birthdaytext">Trends for you</div>
              <div className="bitthdaybody">
                <span className="material-symbols-outlined">celebration</span>
              </div>
            </div>
            <div className="socialmediatrendbody">
              <div className="trendblock">
                <div className="trendname">
                  <div className="trendtitle">#Revolution</div>
                </div>
                <div className="trenddot">
                  <div className="trendnumber">50.4K Tweets</div>
                </div>
              </div>
              <div className="trendblock">
                <div className="trendname">
                  <div className="trendtitle">#Revolution</div>
                </div>
                <div className="trenddot">
                  <div className="trendnumber">50.4K Tweets</div>
                </div>
              </div>
              <div className="trendblock">
                <div className="trendname">
                  <div className="trendtitle">#Revolution</div>
                </div>
                <div className="trenddot">
                  <div className="trendnumber">50.4K Tweets</div>
                </div>
              </div>
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
              <div className="trendblock suggest">
                <div className="trendname">
                  <div className="trendimage">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1670588892214-19d7d31e4293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="trendtitle">The New York Times</div>
                    <div className="trendnumber">@nytimes</div>
                  </div>
                </div>
                <div className="trenddot">
                  <button>Follow</button>
                </div>
              </div>
              <div className="trendblock suggest">
                <div className="trendname">
                  <div className="trendimage">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1670588892214-19d7d31e4293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="trendtitle">The New York Times</div>
                    <div className="trendnumber">@nytimes</div>
                  </div>
                </div>
                <div className="trenddot">
                  <button>Follow</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </Layout>
  )
}

export default Explorepage