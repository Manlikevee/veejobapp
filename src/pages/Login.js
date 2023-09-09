import React, { useEffect, useState  } from 'react'
import Loginlayout from '../components/Loginlayout/Loginlayout'
import { Link } from "gatsby"
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../service/auth";
import Spinner from '../components/Utility/spinner';
import { useLocation } from "@reach/router";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [putloading, setputloading] = useState(false);    
    const location = useLocation();
  const handleUpdate = event => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setputloading(true)
    const loginSuccessful = await handleLogin({
      username,
      password,
    });

    if (loginSuccessful) {
        setputloading(false)
        if (location.state?.from) {
          navigate(location.state.from);
        } else {
          navigate(`/app/profile`);
        }
    }
    else{
        setputloading(false)
    }
  };

  return (
    <div>
        <Loginlayout>
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
            placeholder="Search for Job"
            name="username"
            id="id_username"
            value={username} onChange={handleUpdate}
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
            placeholder="Search for Job"
            name="password"
            id="id_username"
            value={password}
            onChange={handleUpdate}
          />
        </div>
      </div>
      <div className="spc">
        <div className="forminput">
          <button className='myboton' disabled={putloading}>
          { putloading ? (<> <Spinner/> Processing..</>) : 'Login' }

          </button>
        </div>
        <div className="logintitle">
          Don’t have an account?{" "}
          <a href="/Userregistration/">Create An Account</a>{" "}
        </div>
      </div>
</form>
        </Loginlayout>
    </div>
  )
}

export default Login