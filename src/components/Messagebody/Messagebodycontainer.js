import React from 'react'

const Messagebodycontainer = ({children}) => {
  return (
   <>
     <div className="share2">
    <div className="tpsds">
      <div className="chat">
        <div className="chat-container">
      
{children}

        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Messagebodycontainer