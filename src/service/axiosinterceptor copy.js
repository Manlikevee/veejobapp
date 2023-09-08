import axios from 'axios';
import jwtDecode from 'jwt-decode';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { setUser, logout } from './auth'; // Assuming authUtils has setUser and logout functions
import { getUser } from './auth'; // Assuming utils has getUser function
import { navigate } from 'gatsby';

const baseURL = 'https://veejobapi.vercel.app'; // Your baseURL

const axiosInstance = axios.create({
  baseURL: baseURL,
});
axiosInstance.interceptors.request.use(async (req) => {
  const user = getUser(); // Get user information

  if (user && user.accesstoken) {
    console.log(user.accesstoken);
    console.log(user.refreshtoken);
    const decodedAccessToken = jwtDecode(user.accesstoken);
    const isExpired = dayjs.unix(decodedAccessToken.exp).diff(dayjs()) < 1;

    if (!isExpired) {
      req.headers.Authorization = `Bearer ${user.accesstoken}`;
      console.log('not expired');
      console.log(user.refreshtoken);
    } else {
      try {
        const response = await axios.post(`${baseURL}/api/token/refresh/`, {
          refresh: user.refreshtoken,
        });
        console.log('expired');
        const { access, refresh } = response.data;
        const decodedAccessToken = jwtDecode(access);        
        user.id = decodedAccessToken.user_id;
        user.username = decodedAccessToken.username;
        user.email = decodedAccessToken.email;
        user.accesstoken = access;
        user.refreshtoken = refresh;
        user.profileupdate =  decodedAccessToken.is_updated
        window.localStorage.setItem("gatsbyUser", JSON.stringify(user));
        req.headers.Authorization = `Bearer ${access}`;
      } 
      
      catch (error) {
        console.error('Failed to refresh access token:', error);
        toast.success('Session Expired', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        logout();
        navigate('/Login/');
        // Call the logout function if token refresh fails
        throw error;
      }
    }
  }

  return req;
});

export default axiosInstance;
