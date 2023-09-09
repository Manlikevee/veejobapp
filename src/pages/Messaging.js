import React, { useEffect, useRef, useState } from "react";
import Layout from '../components/Layout/Layout'
import Messagelayout from '../components/Layout/Messagelayout'
import Messagebodycontainer from "../components/Messagebody/Messagebodycontainer";
import Messageprofiledata from "../components/Messagebody/Messageprofiledata";
import Tick from "../components/Messagebody/tick";

const Messaging = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);


  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") {
      return; // Don't send empty messages
    }

    // Create a new message object with the current time
    const newMessage = {
      text: inputText,
      time: new Date().toLocaleTimeString(),
    };

    // Add the new message to the list of messages
    setMessages([...messages, newMessage]);

    // Clear the input field
    setInputText("");
  };

  return (
    
    <Messagelayout>
        <br/>
       <div className="shareintotwo">
  <div className="share1">
   <Messageprofiledata/>
  </div>
 
         <Messagebodycontainer>
          <div className="conversation">
            <div className="conversation-container" id="stb" >
              <div className="msms" style={{ width: "100%" }}>
                <div id="ap">


                  <div className="messages sent">
                 <a href="#vee">victor</a>   
                    <span className="metadata">
                
                      <span className="time">11:38 pm</span>
                      <Tick/>
                    </span>
                  </div>
                
                  <div className="messages received">
sorry but i dont understand a word u are saying
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                      <Tick/>
                    </span>
                  </div>
               
               
                  {messages.map((message, index) => (
                  <>
        
          <div className="messages sent" key={index}>
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
              <span className="send" onClick={handleSendMessage}>
                <div className="circle">
                <span class="material-symbols-outlined zmdi zmdi-mail-send">
send
</span>
              
                </div>
              </span>
            </div>
          </div>
       
       </Messagebodycontainer>
      


</div>

        </Messagelayout>
  )
}

export default Messaging