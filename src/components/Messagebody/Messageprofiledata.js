import React from 'react'

const Messageprofiledata = ({responsedata, Usersname}) => {
  return (
   <>
    <div className="tpadm">
      <div className="profiendedit">
        <div className="profilepho">
          <img
            src="https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80"
            alt=""
          />
        </div> 
        <br />
        <div className="nam">  {responsedata?.usersdataserialized?.sender?.username == Usersname ? (responsedata?.usersdataserialized?.reciever.username) : (responsedata?.usersdataserialized?.sender.username)  }</div>
        <div className="rolee"> Frontend Developer </div>
        <div className="state">Lagos, Nigeria</div>
        <div className="emai">Odahviktor@gmail.com</div>
        <div className="phon">0701373576</div>
      </div>
    </div>
    <div className="btadm">
      CV
      <div className="btnrl">
        <button
          className="btn accept"
          style={{ width: "100%", padding: 13, border: "none", borderRadius: 4 }}
        >
          Download
        </button>
      </div>
    </div>
   </>
  )
}

export default Messageprofiledata