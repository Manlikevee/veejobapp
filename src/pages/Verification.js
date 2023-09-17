import { Link, navigate } from 'gatsby';
import React, { useEffect, useState  } from 'react'
import Loginlayout from '../components/Loginlayout/Loginlayout'
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';


const Verification = () => {
  const [putloading, setputloading] = useState(false);    
  const [verificationToken, setVerificationToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [userReference, setUserReference] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const loanReferenceValue = queryParams.get('UserAccountid');

    setVerificationToken(loanReferenceValue);
  }, []);

  const handleVerification = () => {
    if (!verificationToken || !userReference) {
      toast.error('Please fill in all fields');
      return;
    }
  
    setLoading(true);
  
    axios
      .get(`https://veejobapi.vercel.app/newemailverification/verify/${verificationToken}/${userReference}`)
      .then(response => {
        // Handle the response as needed
        console.log('Verification successful', response.data);
        setResponseData(response.data);
        setLoading(false);
  
        // Check if response contains a message
        if (response.data.message) {
          toast.success(response.data.message); // Display success message
        } else {
          toast.success('Verification successful'); // Default success message
        }
  
        // Delay the redirect by a few milliseconds (e.g., 1000 milliseconds = 1 second)
        setTimeout(() => {
          navigate('/app/login/');
        }, 4000); // Adjust the delay as needed
      })
      .catch(error => {
        // Handle errors
        console.error('Verification error', error);
        setLoading(false);
  
 
          toast.error('Verification failed.Incorrect Token Provided.');
    
  
   
      });
  };
  
  return (
    <div>
    <Loginlayout pagetype={'verification'}>
    <form
    method="post"

  >
    <div className="spc">
    <label className="label" htmlFor="Username">
    Enter OTP
    </label>
    <div className="forminput">
      <input
        type="text"
        placeholder="Enter A Unique Username"
        name="username"
        id="id_username"
        onChange={e => setUserReference(e.target.value)}
      />
    </div>
  </div>

  <div className="spc">
    <div className="forminput">
      <button className='myboton' onClick={handleVerification} disabled={loading}>
      { putloading ? (<> 
      
        <div className="simple-spinner">
<span />
</div>
       Processing..</>) : 'Verify Email' }

      </button>
    </div>
    <div className="logintitle">
      Already Verified?{" "}
      <Link to='/Login' >Login</Link>
    </div>
  </div>
</form>
    </Loginlayout>
</div>
  )
}

export default Verification