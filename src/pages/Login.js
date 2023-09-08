import React, { useEffect, useState  } from 'react'
import Loginlayout from '../components/Loginlayout/Loginlayout'
import { Link } from "gatsby"
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../service/auth";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
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

    const loginSuccessful = await handleLogin({
      username,
      password,
    });

    if (loginSuccessful) {
        navigate(`/app/profile`);
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
            type="email"
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
            type="email"
            placeholder="Search for Job"
            name="username"
            id="id_username"
            value={password}
            onChange={handleUpdate}
          />
        </div>
      </div>
      <div className="spc">
        <div className="forminput">
          <input type="submit" defaultValue="Login" />
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