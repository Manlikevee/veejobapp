import React, { useEffect, useRef, useState } from "react";
import Layout from '../components/Layout/Layout'
import { toast } from 'react-toastify';
import axiosInstance from '../service/axiosinterceptor'
import { Link } from "gatsby";
import { getUser } from "../service/auth";
const Saves = () => {
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
    axiosInstance.post('/savedlike_post/', data)
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
    axiosInstance.post('/savedlike_post/', data)
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
//       .get('/usersaves')
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
//     const response = await axiosInstance.get('/usersaves');
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
//     console.log('loading......')
//   }
// }, []);


      
useEffect(() => {
  let initialFetchCompleted = false;

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/usersaves');
      // Handle the response as needed
     

      if (!initialFetchCompleted) {
        toast.success('successfully fetched');
      } 
      
    

      setInitialFetchCompleted(true)
      setResponseData(response.data);
      setcurrentUserId(getUser().id);
      console.log(response.data);
      setLoading(false);

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
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n      .skelent span{\n        height: 57px;\n    width: 57px;\n      background: #d9d9d9;\n      border-radius: 50%;\n      position: relative;\n      overflow: hidden;\n      }\n    \n      .skelent .pcardname{\n        height: 15px;\n        width: 100px;\n        margin: 4px;\n        background: #d9d9d9;\n      }\n      .skelent .pcardesignation{\n        height: 15px;\n        width: 100px;\n        margin: 4px;\n        background: #d9d9d9;\n      }\n    \n      .skelent .pcardtime{\n        height: 15px;\n        width: 150px;\n        margin: 4px;\n        background: #d9d9d9;\n      }\n      .description{\n      margin: 25px 0;\n    }\n    .description .linez{\n      background: #d9d9d9;\n      border-radius: 10px;\n      height: 16px;\n      margin: 10px 0;\n      overflow: hidden;\n      position: relative;\n    }\n    .description .line-1{\n      width: calc(100% - 15%);\n    }\n    .description .line-3{\n      width: calc(100% - 40%);\n    }\n    .cars .btns .btn {\n        height: 35px;\n        width: 100%;\n        background: #d9d9d9;\n        border-radius: 25px;\n        position: relative;\n        overflow: hidden;\n    }\n    .btns .btn-1 {\n        margin-right: 8px;\n    }\n    \n    .btns{\n      display: flex;\n        gap: 30px;\n        padding: 12px;\n    }\n    .skelent .pcardtime::before,\n    .skelent .pcardtime::before,\n    .skelent span::before,\n    .description .linez::before,\n    .btns .btn::before{\n      position: absolute;\n      content: "";\n      height: 100%;\n      width: 100%;\n      background-image: linear-gradient(to right, #f4f4f4 0%, rgba(0,0,0,0.07) 20%, #d9d9d9 40%, #d9d9d9 100%);\n      background-repeat: no-repeat;\n      background-size: 450px 400px;\n      animation: shimmer 1s linear infinite;\n    }\n    \n    .details div::before{\n      animation-delay: 0.25s;\n    }\n    \n    @keyframes shimmer {\n      0%{\n        background-position: -450px 0;\n      }\n      100%{\n        background-position: 450px 0;\n      }\n    }\n    \n    .cars{\n      width: 100%;\n      padding: 30px;\n      border-radius: 10px;\n    \n    }\n    .cars .header{\n      display: flex;\n      align-items: center;\n    }\n    .header .img{\n      height: 75px;\n      width: 75px;\n      background: #d9d9d9;\n      border-radius: 50%;\n      position: relative;\n      overflow: hidden;\n    }\n    .header .details{\n      margin-left: 20px;\n    }\n    .details span{\n      display: block;\n      background: #d9d9d9;\n      border-radius: 10px;\n      overflow: hidden;\n      position: relative;\n    }\n    .details .name{\n      height: 15px;\n      width: 100px;\n    }\n    .details .about{\n      height: 13px;\n      width: 150px;\n      margin-top: 10px;\n    }\n    .cars .description{\n      margin: 25px 0;\n    }\n    .description .line{\n      background: #d9d9d9;\n      border-radius: 10px;\n      height: 13px;\n      margin: 10px 0;\n      overflow: hidden;\n      position: relative;\n    }\n    .description .line-1{\n      width: calc(100% - 15%);\n    }\n    .description .line-3{\n      width: calc(100% - 40%);\n    }\n    .cars .btns{\n      display: flex;\n    }\n    .cars .btns .btn{\n      height: 45px;\n      width: 100%;\n      background: #d9d9d9;\n      border-radius: 25px;\n      position: relative;\n      overflow: hidden;\n    }\n    .btns .btn-1{\n      margin-right: 8px;\n    }\n    .btns .btn-2{\n      margin-left: 8px;\n    }\n    .header .img::before,\n    .details span::before,\n    .description .line::before,\n    .btns .btn::before{\n      position: absolute;\n      content: "";\n      height: 100%;\n      width: 100%;\n      background-image: linear-gradient(to right, #d9d9d9 0%, rgba(0,0,0,0.07) 20%, #d9d9d9 40%, #d9d9d9 100%);\n      background-repeat: no-repeat;\n      background-size: 450px 400px;\n      animation: shimmer 1s linear infinite;\n    }\n    .header .img::before{\n      background-size: 650px 600px;\n    }\n    .details span::before{\n      animation-delay: 0.2s;\n    }\n    .btns .btn-2::before{\n      animation-delay: 0.22s;\n    }\n    @keyframes shimmer {\n      0%{\n        background-position: -450px 0;\n      }\n      100%{\n        background-position: 450px 0;\n      }\n    }\n     \n    '
        }}
      />
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

export default Saves