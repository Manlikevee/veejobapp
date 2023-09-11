import React from 'react'

const Oldpage = () => {
  return (
    <div>Oldpage
   {/* <Messagelayout>
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



        </Messagelayout> */}



    </div>
  )
}

export default Oldpage