import React from 'react'
import { Link } from 'gatsby'
const Userlistpopup = ({hidepop}) => {
  return (
    <>
        <div id="modal" className="modal" style={{ display: "block" }}>
  <div className="modal-content">
    <span className="close" onClick={hidepop()}>×</span>
    <h2>Users List</h2>
    <div className="forminput search" style={{ padding: 10 }}>
      <input
        className="search-input"
        type="text"
        placeholder="search for a user"
        maxLength={600}
        id="search-input"
      />
    </div>
    <div className="scrollboxing">
      
      <Link
        to="/usermessagecreate/13"
        style={{ color: "var(--body-color)", border: "none" }}
        className="lp"
      >
        <div
          className="message"
          style={{ border: "1px solid #ccc", borderRadius: 5 }}
        >
          <div className="userprofile">
            <img
              src="https://images.unsplash.com/photo-1665686304129-a6e2d16923e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="prpot"
            />
          </div>
          <div className="userstat">
            <div className="usersname">asta</div>
            <div className="usersstack">Web Developer</div>
          </div>
        </div>
      </Link>

    </div>
  </div>
</div>

    </>
  )
}

export default Userlistpopup