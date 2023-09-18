import React, { useEffect, useState } from "react";
import { Link } from 'gatsby'
import { toast } from 'react-toastify';
import axiosInstance from '../../service/axiosinterceptor'
import { getUser } from "../../service/auth"


const Userlistpopup = ({hidepop, allusers}) => {

  const [responseData, setResponseData] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentUserId, setcurrentUserId] = useState('')
  const [initialFetchCompleted, setInitialFetchCompleted] = useState(false);
  
  
  const saveJob = (jobId) => {
    alert(jobId)
    // Make the Axios POST request
    axiosInstance.get(`/usermessagecreate/${jobId}`)
      .then((response) => {
      
        // Handle the response here (e.g., update the UI)
        if (response?.data?.message){
          toast.info(response.data.message)
          alert(response.data.id)
          setResponseData(response.data);
          console.log(response.data)
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
  
  
  
  return (
    <>


        <div id="modal" className="modal" style={{ display: "block" }}>
  <div className="modal-content">
    <span className="closes" onClick={hidepop}>×</span>
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
    {allusers?.map((data, index) => (      
      <div
        
        style={{ color: "var(--body-color)", border: "none" }}
        className="lp"

        onClick={() => saveJob(data.id)}
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
            <div className="usersname">{data.username} {data.id}</div>
            <div className="usersstack">{data.email}</div>
          </div>
        </div>
      </div>
))}
    </div>
  </div>
</div>

    </>
  )
}

export default Userlistpopup