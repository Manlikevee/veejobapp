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




const Messaging = () => {
  const [isloading, setisloading] = useState(true);
  const [myresponsed, setmuresponsed] = useState('');
  const [responsedata, setresponsedata] = useState('');
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [Usersname, setUsersname] = useState();
  const [sendingmessage, setSendingmessage] = useState(false);


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







  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === "") {
      toast.error('message cannot be blank')
      return; // Don't send empty messages
    }
    // Create a new message object with the current time
    setSendingmessage(true)
    const newMessage = {
    
      text: inputText,
      time: new Date().toLocaleTimeString(),
      status: "sending", // You can set a sending status
    };
  
    // Add the new message to the list of messages
    setMessages([...messages, newMessage]);
    try {
   
      // Make an API request to send the message
      const response = await axiosInstance.post(`/messageportal/${myresponsed}/`, {
        keyword: inputText,
      });
  
      const updatedMessages = messages.filter(
        (message) => message.text !== inputText
      );
      setMessages(updatedMessages);
  
      // Clear the input field
      setInputText("");

      // Handle the successful response, if needed
      console.log("Message sent:", response.data);
      toast.success('send successfully')
      setresponsedata(response.data);
      setSendingmessage(false)
      // Clear the input field

  
      // Update the state or take any other action
      // For example, you can set a status to "Sending" or update the UI
    } catch (error) {
      // Handle the error (e.g., show an error message)
      setSendingmessage(false)
      console.error("Message sending failed:", error);
    }
  };
  

  

  return (
    
    <Messagelayout>
        <br/>
        {isloading ? ( <>Loading.......</> ) : ( 


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
                   {activityData.message}
                       <span className="metadata">
                   
                         <span className="time">11:38 pm</span>
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
        {message.text}
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

        ) }



        </Messagelayout>
  )
}

export default Messaging