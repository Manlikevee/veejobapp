import React, { useEffect, useState } from 'react';

import { Link } from "gatsby"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { navigate } from 'gatsby';
import Loginlayout from '../components/Loginlayout/Loginlayout';

const Emailverificationdone = () => {

  

  const [Verificationtoken, SetVerificationtoken] = useState('');
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState(null);


  useEffect(() => {
    // Get the loanReference query parameter from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const loanReferenceValue = queryParams.get('Verification-token');

    SetVerificationtoken(loanReferenceValue);
  }, []);

  useEffect(() => {
    // Send a POST request when Verificationtoken changes
    if (Verificationtoken) {
      axios
        .get(`https://veejobapi.vercel.app/emailverification/verify/${Verificationtoken}`)
        .then(response => {
          // Handle the response as needed
          console.log('Verification successful', response.data);
          setResponseData(response.data);

          setTimeout(() => {
            setLoading(false);
          }, 4000);

          
        })
        .catch(error => {
          // Handle errors
          console.error('Verification error', error);
          setResponseData({ error: 'Verification failed. Please try again.' });
          setLoading(false);
        });
    }
  }, [Verificationtoken]);

  // Conditional rendering based on responseData
  let content;
  if (loading) {
    content = <div>
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
    <div className="logintitle">
    Verification in progress. Please wait while we complete the verification process. This may take a moment. Thank you for your patience.
        </div>

    </div>;
  } else if (responseData.message) {
    content = <div> <div className='mytitle'> {responseData.error} </div>

<div className="logintitle">
Congratulations! Your email address has been successfully verified, and your registration is now complete. You can now access our services and enjoy all the benefits of our platform.
    <div>Thank you for choosing us! </div>
    
        </div>

</div>;
  } else if (responseData && responseData.error) {
    content = <div>
      {responseData.error === 'Your account is already verified.' ? (
  // Display something when the error message is 'Your account is already verified'
  <div>
 <div className='mytitle'> {responseData.error} </div>
  <div className="logintitle">
  We're sorry, but it seems that your account is already verified. You can log in now.
</div>
<div className="loginflex">
             <Link to='/Userlogin'> <button>Log In</button> </Link>
 </div>
</div>
) : (

  <div>
  <div className='mytitle'> {responseData.error} </div>
   <div className="logintitle">
   An error occurred during verification. Please try again or contact support.
 </div>
 <div className="loginflex">
              <Link > <button>Contact Support</button> </Link>
  </div>
 </div>

  // Display something else when the error message is different
)}
      
      

  
    </div>;
  } else {
    content = <p>Verification status unknown.</p>;
  }

  return (
    <div>
    <Loginlayout pagetype={'verificationdone'}>
    <div className="logintitle">
   <br/>
{content}

      </div>
    </Loginlayout>
    </div>
  );
};

export default Emailverificationdone;
