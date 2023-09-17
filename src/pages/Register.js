import { Link } from 'gatsby';
import React, { useEffect, useState  } from 'react'
import Loginlayout from '../components/Loginlayout/Loginlayout'
import { navigate } from "gatsby";
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const Register = () => {
  const [putloading, setputloading] = useState(false);    
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({}); // Added errors state

  const handleUpdate = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {

      toast.error('Username is required');
    }
    if (!formData.email.trim()) {
   
      toast.error('Email is required');
    }
    if (!formData.password.trim()) {
      toast.error('Password is required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async event => {
    
    event.preventDefault();

    if (putloading) return;

      
    if (!validateForm()) {
      return; // Prevent submission if there are validation errors
    }

    try {
      setputloading(true);
  
      const response = await axios.post('https://veejobapi.vercel.app/jobapprregister/', formData);
  
      console.log('Registration successful', response.data);

      if (response.data.message && response.data.accountnumber){
        toast.success(response.data.message);
        const re = response.data.accountnumber;
      
        // Add a delay before navigating
        await new Promise((resolve) => setTimeout(resolve, 2000)); // 1000 milliseconds = 1 second
      
        navigate(`/Verification/?UserAccountid=${re}`);
      } else{
        toast.success('Registration successful you can now login');
      }
      
    
      
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Registration error', error);
      if (error.response.data.username) {
        toast.error(error.response.data.username[0]);
      }
      else if (error.response.data.email) {
        toast.error(error.response.data.email[0]);
      }
      else if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Registration failed. Please try again.');
      }
    } finally {
      // Add a 3-second delay before setting setLoading(false)
      setTimeout(() => {
        setputloading(false);
      }, 3000); // 3000 milliseconds = 3 seconds
    }
  };


  return (
    <div>
    <Loginlayout pagetype={'register'}>
  
  
    <form
    method="post"
    onSubmit={handleSubmit}
  >
    <div className="spc">
    <label className="label" htmlFor="Username">
      Username
    </label>
    <div className="forminput">
      <input
        type="text"
        placeholder="Enter A Unique Username"
        name="username"
        id="id_username"
        value={formData.username} 
        onChange={handleUpdate}
required
      />
    </div>
  </div>

  <div className="spc">
    <label className="label" htmlFor="Username">
   Email
    </label>
    <div className="forminput">
      <input
        type="text"
        placeholder="Enter A Valid Email"
        name="email"
        id="id_username"
        value={formData.email} 
        onChange={handleUpdate}
        required
      />
    </div>
  </div>

  <div className="spc">
    <label className="label" htmlFor="Username">
      Password
    </label>
    <div className="forminput">
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="id_username"
        value={formData.password}
        onChange={handleUpdate}
        required
      />
    </div>
  </div>
  <div className="spc">
    <div className="forminput">
      <button className='myboton' disabled={putloading}>
      { putloading ? (<> 
      
        <div className="simple-spinner">
<span />
</div>
       Processing..</>) : 'Register' }

      </button>
    </div>
    <div className="logintitle">
      Already have an account?{" "}
      <Link to='/Login' >Login</Link>
    </div>
  </div>
</form>
    </Loginlayout>
</div>
  )
}

export default Register