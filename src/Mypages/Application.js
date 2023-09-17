import React, { useEffect,  useState } from "react";
import Layout from '../components/Layout/Layout'
import {  handleLogin, isLoggedIn, getUser , logout}  from '../service/auth'
import { Link } from 'gatsby'
import { toast } from 'react-toastify';
import axiosInstance from '../service/axiosinterceptor'
import dayjs from 'dayjs';
import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';
import Applicationdata from "../components/Applicationdata/Applicationdata";
import Errorpopup from "../components/Utility/Errorpopup";

const Application = () => {
 
  const [isloading, setisloading] = useState(true);
  const [myresponsed, setmuresponsed] = useState('');
  const [responsedata, setresponsedata] = useState('');

 
  useEffect(() => {
    // Get the loanReference query parameter from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const mmmm = queryParams.get('jobreference');
    setmuresponsed(mmmm);
    const myres = mmmm
    if (myres) {
    axiosInstance.get(`/userjobapplicationpage/${myres}`)
      .then(response => {
        console.log(response.data);
        toast.success('fetched data')
        setresponsedata(response.data);
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
 
 
  const ApplyJob = (jobId) => {
    


    // Make the Axios POST request
    axiosInstance.get(`/applications/${jobId}`)
      .then((response) => {
      
        // Handle the response here (e.g., update the UI)
        if (response?.data?.message){
          toast.info(response.data.message)

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
    <Layout>

      {isloading ? ('Loading') : (   
      <>
      {responsedata?.job_detail?  (<Applicationdata responsedata={responsedata} ApplyJob={ApplyJob}/>) : (<Errorpopup/>)}
      </>  )}


    </Layout>
  )
}

export default Application