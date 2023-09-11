import React, { useState } from 'react';
import ScrollableFeed from 'react-scrollable-feed';
import Layout from '../components/Layout/Layout';
import Tick from '../components/Messagebody/Tick';
const Scroll = () => {


  return (
    <Layout>
<br/>
{/* <div className='messagingflexbox'>
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
    <img src="https://i.ibb.co/2Yg7tWv/Rumbiiha-Swaibu.jpg" alt="Avatar" />
  </div>
  <div className="name">
    <span>Rumbiiha s.</span>

  </div>
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
</div> */}
    
    





    
     

      </Layout>
  );
};

export default Scroll;
