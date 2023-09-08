import React from 'react'
import Loginlayout from '../components/Loginlayout/Loginlayout'


const Login = () => {
  return (
    <div>
        <Loginlayout>

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

        </Loginlayout>
    </div>
  )
}

export default Login