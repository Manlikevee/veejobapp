import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'
import {  isLoggedIn , getUser, logout } from '../../service/auth';
import {navigate} from "gatsby";

const Header = () => {
    const [navclicked, setnavclicked] = useState(false)
    const[darkMode, setDarkMode]= useState('')
     useEffect(() => {
      // Check if a "darkMode" key exists in local storage and use its value,
      // otherwise, use the default value (false for light mode).
      const storedDarkMode = localStorage.getItem('darkMode');
      setDarkMode(storedDarkMode ? JSON.parse(storedDarkMode) : false);
    }, []);
  
    
    const toggleDarkMode = () => {
      // Toggle the darkMode state value.
      setDarkMode((prevDarkMode) => !prevDarkMode);
    };
  
    // Update local storage whenever darkMode changes.
    useEffect(() => {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);
  
    useEffect(() => {
      // Update the body class based on the darkMode state.
      document.body.className = darkMode ? 'dark-mode' : '';
    }, [darkMode]);
     

     const handleClick = () => {

      setnavclicked(!navclicked);
    };
  return (
    <>
    <div id="navlinkovalay" className={` ${navclicked ? 'navlinkactiveovalay' : ''}`}  />
    <div className="header">
    <div className="logo">
      <Link to='/' style={{ color: "inherit", textDecoration: "none" }}>
      <img src="https://nigerialogos.com/logos/seedbuilders/seedbuilders.png" alt="" className='myllogo' />
      </Link>
    </div>
    
    <div className={`header-menu ${navclicked ? 'navactive' : 'header-menu'}`}>
      <Link to='/' activeClassName="active"  >
         
      <span class="material-symbols-outlined">
    space_dashboard
    </span>
     Dashboard
      </Link>
      <Link to='/Jobs' activeClassName="active">
        <span class="material-symbols-outlined">
    work_update
    </span>All Jobs </Link>
      <Link to='/Jobdetail/' activeClassName="active"><span class="material-symbols-outlined">
    work_history
    </span> Applications</Link>
    <Link to='/app/profile' activeClassName="active"><span class="material-symbols-outlined">
    account_box
    </span> Profile</Link>
    </div>
    <div className="user-settings">
      <div className="dark-light" onClick={toggleDarkMode}>
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>
      <div className="user-menu" onClick={handleClick} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-square"
        >
          <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
        </svg>
      </div>
     <Link to='/Userprofile' className='usb'> <img
        className="user-profile"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
        alt=""
      />
      <div className="user-name">

      {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            Logout
          </a>
        ) : 'Login'}

      </div>
      </Link>
    </div>
  </div>
    </>
   
  
  )
}

export default Header