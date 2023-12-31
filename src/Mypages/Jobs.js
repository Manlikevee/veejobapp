import React, { useEffect, useRef, useState } from "react";
import Layout from '../components/Layout/Layout'
import { toast } from 'react-toastify';
import axiosInstance from '../service/axiosinterceptor'
import { Link } from "gatsby";
import { getUser } from "../service/auth";
import TawkToChat from "../components/Utility/TawkToChat";
const Jobs = () => {
  const [isloading, setisloading] = useState(true);
  const [responseData, setResponseData] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentUserId, setcurrentUserId] = useState('')
  const [initialFetchCompleted, setInitialFetchCompleted] = useState(false);

  
  const saveJob = (jobId) => {
    

    const data = {
      post_id: jobId,
    };
    // Make the Axios POST request
    axiosInstance.post('/like_post/', data)
      .then((response) => {
      
        // Handle the response here (e.g., update the UI)
        if (response?.data?.message){
          toast.info(response.data.message)
          setResponseData(response.data);
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
  
  const unsaveJob = (jobId) => {
    
    

    const data = {
      post_id: jobId,
    };

    // Make the Axios POST request
    axiosInstance.post('/like_post/', data)
      .then((response) => {
      
        // Handle the response here (e.g., update the UI)
        if (response?.data?.message){
          toast.info(response.data.message)
          setResponseData(response.data);
        }
      })
      .catch((error) => {
        alert('error')
        // Handle any errors that occurred during the request
        console.error('Error:', error);
        toast.error('An Error Occured')
        
      });    
    // Make an API request to save the job with jobId for the current user
    // Update th

    // Make an API request to unsave the job with jobId for the current user
    // Update the UI to set activityData.isLiked to false if successful
  };


//   useEffect(() => {
//     axiosInstance
//       .get('/userjobs')
//       .then(response => {
//         // Handle the response as needed
//         setResponseData(response.data);
//         setcurrentUserId(getUser().id);
//         console.log(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         // Handle errors
//         console.error('GET request error', error);
//         if (error.response && error.response.data && error.response.data.error) {
//           toast.error(error.response.data.error);
//         } else {
//           toast.error('An error occurred while Loading Your Data');
//         }
//         setLoading(false);
//       });
//   }, []);


// useEffect(() => {

//   if(responseData){
// const fetchData = async () => {
//   try {
//     const response = await axiosInstance.get('/userjobs');
//     // Handle the response as needed

//     setResponseData(response.data);
//     // console.log(response.data);
//   } catch (error) {
//     // Fail silently without showing errors
//     console.error('Fetch error (silently ignored)', error);
//   }
// };

// // Fetch data initially
// fetchData();

// // Fetch data every 10 seconds
// const intervalId = setInterval(fetchData, 30000);

// // Cleanup the interval when the component unmounts
// return () => clearInterval(intervalId);
//   }
//   else{
//     console.log('yello')
//   }

// }, []);



      
useEffect(() => {
  let initialFetchCompleted = false;

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/userjobs');
      // Handle the response as needed
     

      if (!initialFetchCompleted) {
        toast.success('successfully fetched');
      } 
      
    

      setInitialFetchCompleted(true)
      setResponseData(response.data);
      console.log(response.data);
      setLoading(false);
      setcurrentUserId(getUser().id);

      // Set initialFetchCompleted to true once the initial fetch is successful
      if (!initialFetchCompleted) {
        initialFetchCompleted = true;
      }
    } catch (error) {
      // Handle errors
      console.error('GET request error', error);
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error('An error occurred while Loading Your Data');
      }
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



  return (




    <Layout>
    <div>
<TawkToChat/>
  
    <div className="wrapper">
  <div className="search-menu">
    <div className="search-bar">
      <input type="text" className="search-box" autofocus="" />
    </div>
    <div className="search-location">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-map-pin"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx={12} cy={10} r={3} />
      </svg>
      Londontowne, MD
    </div>
    <div className="search-job">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-briefcase"
      >
        <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
      <input type="text" placeholder="Job Type" />
    </div>
    <div className="search-salary">
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth=".4"
      >
        <path
          d="M12.6 18H9.8a.8.8 0 010-1.5h2.8a.9.9 0 000-1.8h-1.2a2.4 2.4 0 010-4.7h2.8a.8.8 0 010 1.5h-2.8a.9.9 0 000 1.8h1.2a2.4 2.4 0 010 4.7z"
          stroke="currentColor"
        />
        <path
          d="M12 20a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8zM12 11.5a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8z"
          stroke="currentColor"
        />
        <path
          d="M21.3 23H2.6A2.8 2.8 0 010 20.2V3.9C0 2.1 1.2 1 2.8 1h18.4C22.9 1 24 2.2 24 3.8v16.4c0 1.6-1.2 2.8-2.8 2.8zM2.6 2.5c-.6 0-1.2.6-1.2 1.3v16.4c0 .7.6 1.3 1.3 1.3h18.4c.7 0 1.3-.6 1.3-1.3V3.9c0-.7-.6-1.3-1.3-1.3z"
          stroke="currentColor"
        />
        <path
          d="M23.3 6H.6a.8.8 0 010-1.5h22.6a.8.8 0 010 1.5z"
          stroke="currentColor"
        />
      </svg>
      <input type="text" placeholder="Salary Range" />
    </div>
    <button className="search-button">Find Job</button>
  </div>
  <div className="main-container jobcontainer">
    <div className="search-type">
      <div className="alert">
        <div className="alert-title">Create Job Alert</div>
        <div className="alert-subtitle">
          Create a job alert now and never miss a job
        </div>
        <input type="text" placeholder="Enter job keyword" />
        <button className="search-buttons">Create Job Alerts</button>
      </div>
      <div className="job-time">
        <div className="job-time-title">Type of Employment</div>
        <div className="job-wrapper">
          <div className="type-container">
            <input
              type="checkbox"
              id="job1"
              className="job-style"
              defaultChecked=""
            />
            <label htmlFor="job1">Full Time Jobs</label>
            <span className="job-number">56</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job2" className="job-style" />
            <label htmlFor="job2">Part Time Jobs</label>
            <span className="job-number">43</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job3" className="job-style" />
            <label htmlFor="job3">Remote Jobs</label>
            <span className="job-number">24</span>
          </div>
        </div>
      </div>
      <div className="job-time">
        <div className="job-time-title">Seniority Level</div>
        <div className="job-wrapper">
          <div className="type-container">
            <input type="checkbox" id="job8" className="job-style" />
            <label htmlFor="job8">Entry Level</label>
            <span className="job-number">44</span>
          </div>
          <div className="type-container">
            <input
              type="checkbox"
              id="job10"
              className="job-style"
              defaultChecked=""
            />
            <label htmlFor="job10">Senior Level</label>
            <span className="job-number">29</span>
          </div>
        </div>
      </div>
      <div className="job-time">
        <div className="job-time-title">Salary Range</div>
        <div className="job-wrapper">
          <div className="type-container">
            <input type="checkbox" id="job1" className="job-style" />
            <label htmlFor="job1">$700 - $1000</label>
            <span className="job-number">49</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job2" className="job-style" />
            <label htmlFor="job2">$1000 - $1200</label>
            <span className="job-number">67</span>
          </div>
        </div>
      </div>
    </div>

    <div className="searched-jobs">
      <div className="searched-bar">
        <div className="searched-show">Showing 46 Jobs</div>
        <div className="searched-sort">
          Sort by: <span className="post-time">Newest Post </span>
          <span className="menu-icon">▼</span>
        </div>
      </div>
     
      {!loading ? (
      <div className="job-cards">

  
{responseData?.jobcards?.length > 0 ? (
                  responseData.jobcards.map((activityData, index) => (
                    
        <div className="job-card">
          <div className="job-card-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#fff"
              style={{ backgroundColor: "#55acee" }}
            >
              <path d="M512 97.2c-19 8.4-39.3 14-60.5 16.6 21.8-13 38.4-33.4 46.2-58a209.8 209.8 0 01-66.6 25.4A105 105 0 00249.5 153c0 8.3.8 16.3 2.5 24A297.1 297.1 0 0135.6 67 105.1 105.1 0 0068 207.4c-16.9-.3-33.4-5.2-47.4-12.9v1.1c0 51 36.4 93.4 84 103.2-8.5 2.3-17.8 3.4-27.4 3.4-6.8 0-13.5-.3-20-1.8a106 106 0 0098.2 73.2A211 211 0 010 416.9 295.5 295.5 0 00161 464c193.2 0 298.8-160 298.8-298.7 0-4.6-.2-9.1-.4-13.6A209.4 209.4 0 00512 97.2z" />
            </svg>
            <div className="menu-dot" />
          </div>
          <div className="job-card-title">{activityData.jobtitle}</div>
          <div className="job-card-subtitle">
          {activityData.jobdescription}
          </div>
          <div className="job-detail-buttons jobsaved" >
            <button className="search-buttons detail-button">{activityData.jobemploymenttype}</button>
            <button className="search-buttons detail-button">
              Min. {activityData.jobminimumexperience} Year
            </button>
            <button className="search-buttons detail-button">
            {activityData.workinglevel}
            </button>
          </div> 
          <div className="job-card-buttons">
            <Link to={`/app/Jobdetail/?jobid=${activityData.id}`} className="search-buttons card-buttons">Apply Now</Link>
          
            {activityData.likes.some((likedUser) => likedUser === currentUserId) ? (
          <div to="" className="search-buttons card-buttons-msg myjobsaved" onClick={() => unsaveJob(activityData.id)}>
            Unsave
          </div>
        ) : (
          <div to=""  className="search-buttons card-buttons-msg" onClick={() => saveJob(activityData.id)}>
            Save
          </div>
        )}
          </div>
        </div>                 ))
           ) : '' }
              
      </div> ) : (
         <> 


      <div  className="job-cards">
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="job-card cars">
          <div className="postcard">
            <div className="postcardheader details">
              <div className="creatrprofile skelent">
                <span />
              </div>
              <div className="postcardname skelent">
                <div className="pcardname" />
                <div className="pcardesignation" />
              </div>
            </div>
            <div className="pcardbody">
              <div className="description">
                <div className="linez line-1" />
                <div className="linez line-2" />
                <div className="linez line-3" />
              </div>
            </div>
          </div>
        </div>

      </div>
      </>) }
  
   


    </div>
  </div>
</div>

    </div>
    </Layout>
  )
}

export default Jobs