import React, { useEffect, useState } from 'react';
import Home from '../components/Home/Home'
import Layout from '../components/Layout/Layout'
import axiosInstance from '../service/axiosinterceptor'
import { toast } from 'react-toastify';
import { getUser } from "../service/auth";

    const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [responseData, setResponseData] = useState('');
    const [Usersname, setUsersname] = useState();

    let timeOfDay;
    const date = new Date();
    const hours = date.getHours();
    const styles = {
      fontSize: 35,
    }
  
    if (hours < 12) {
      timeOfDay = 'Morning';
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = 'Afternoon';
    } else {
      timeOfDay = 'Evening';
    }

    useEffect(() => {
        axiosInstance
          .get('/userdashboarddata')
          .then(response => {
            // Handle the response as needed
            toast.success('successfully fetched');
            setUsersname(getUser().username)
            setResponseData(response.data);
            console.log(response.data);
            setLoading(false);
          })
          .catch(error => {
            // Handle errors
            console.error('GET request error', error);
            if (error.response && error.response.data && error.response.data.error) {
              toast.error(error.response.data.error);
            } else {
              toast.error('An error occurred while Loading Your Data');
            }
            setLoading(false);
          });
      }, []);


      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosInstance.get('/userdashboarddata');
            // Handle the response as needed
      
            setResponseData(response.data);
            console.log(response.data);
      
            // Your additional logic that should only run when there is responseData
            // ...
      
          } catch (error) {
            // Fail silently without showing errors
            console.error('Fetch error (silently ignored)', error);
          }
        };
      
        if (responseData) {
          // Fetch data initially
          fetchData();
      
          // Fetch data every 10 seconds
          const intervalId = setInterval(fetchData, 30000);
      
          // Cleanup the interval when the component unmounts
          return () => clearInterval(intervalId);
        }
      }, [responseData]);

  return (
    <>
    <Layout>
  
    {loading ? ( <>Loading.......</> ) : ( <Home responseData={responseData} timeOfDay={timeOfDay} Usersname={Usersname} />) }
   
    </Layout>
    </>
  )
}

export default Dashboard