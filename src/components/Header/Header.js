import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'
import {  isLoggedIn , getUser, logout } from '../../service/auth';
import {navigate} from "gatsby";

const Header = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [navclicked, setnavclicked] = useState(false)
    const[darkMode, setDarkMode]= useState('')
    const [isFullScreen, setIsFullScreen] = useState(false);

    const showOverlay = () => {
      setIsOverlayVisible(true);
    };
  
    const hideOverlay = () => {
      setIsOverlayVisible(false);
    };

  
    const toggleFullScreen = () => {
      if (!isFullScreen) {
        // Enter full-screen mode
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      } else {
        // Exit full-screen mode
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
  
      // Toggle the full-screen state
      setIsFullScreen(!isFullScreen);
    };
    
    
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
    {isOverlayVisible && (
   <div id="navlinkoverlay"  className='shw'/>
    )} 

    <div className="header">
    <div className="logo">
      <Link to='/' style={{ color: "inherit", textDecoration: "none" }}>
      <img src="https://nigerialogos.com/logos/seedbuilders/seedbuilders.png" alt="" className='myllogo' />
      </Link>
    </div>
    
    <div className={`header-menu ${navclicked ? 'navactive' : 'header-menu'}`}>
      <Link to='/app/Dashboard' activeClassName="active"  >
         
      <span class="material-symbols-outlined">
    space_dashboard
    </span>
     Dashboard

      </Link>

      <div className='hml' activeClassName="active" onMouseOver={showOverlay} onMouseOut={hideOverlay}>
        <span class="material-symbols-outlined">
    work_update
    </span>All Jobs 
    <div className="myjobmenu">
  <div className="navgrid">
    <Link to='/app/Alljobs' className="navgriditem" activeClassName="active">
      <div className="navgridlogo">
        <span className="material-symbols-outlined all-roles">work</span>
      </div>
      <div className="navgridtext">
        <div
          className="textgridtitle aos-init aos-animate"
          data-aos="fade-up-right"
        >
          All Jobs
        </div>
      </div>
    </Link>
    <Link to='/app/Saves' className="navgriditem" activeClassName="active">
      <div className="navgridlogo">
        <span className="material-symbols-outlined new-updates">
          work_update
        </span>
      </div>
      <div className="navgridtext">
        <div className="textgridtitle">Saved Jobs</div>
      </div>
    </Link>
    <Link to='' className="navgriditem">
      <div className="navgridlogo">
        <span className="material-symbols-outlined app-tracker">
          work_update
        </span>
      </div>
      <div className="navgridtext">
        <div className="textgridtitle">Application tracker</div>
      </div>
    </Link>
    <Link to='' className="navgriditem">
      <div className="navgridlogo">
        <span className="material-symbols-outlined job-match">work_alert</span>
      </div>
      <div className="navgridtext">
        <div className="textgridtitle">Job Match</div>
      </div>
    </Link>


  
  </div>


</div>

    
    </div>
      {/* <Link to='/Jobdetail/' activeClassName="active">
      <span class="material-symbols-outlined">
forum
</span> Messaging</Link> */}

<Link to='/Explorepage' activeClassName="active">
<span class="material-symbols-outlined">
stream_apps
</span> Timeline</Link>
    <Link to='/app/profile' activeClassName="active"><span class="material-symbols-outlined">
    account_box
    </span> Profile</Link>

    {isLoggedIn() ? (
          <a
            href="/"
            className='logout'
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
        <span class="material-symbols-outlined">
logout
</span>    Logout
          </a>
        ) : (    <Link to='/Login' 
        className='logout'
        activeClassName="active"><span class="material-symbols-outlined">
        account_box
        </span> Profile</Link>)}

    </div>
    <div className="user-settings">
    <Link  >
    <span class="material-symbols-outlined" onClick={toggleFullScreen}>
expand_content
</span>
    </Link>
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