import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'
const Header = () => {
     const [navclicked, setnavclicked] = useState(false)
     const [bodyClassName, setBodyClassName] = useState('');

     const addClassNameToBody = () => {
       setBodyClassName('dark-mode');
     };
   
     useEffect(() => {
       // Add the class to the body element when bodyClassName changes
       document.body.className = bodyClassName;
     }, [bodyClassName]);

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
      <Link to='/Jobs' activeClassName="activated"  >
         
      <span class="material-symbols-outlined">
    space_dashboard
    </span>
     Dashboard
      </Link>
      <Link to='/Jobdetail' activeClassName="activated">
        <span class="material-symbols-outlined">
    work_update
    </span>All Jobs </Link>
      <Link to='/Messaging' activeClassName="activated"><span class="material-symbols-outlined">
    work_history
    </span> Applications</Link>
    <Link to='/Messaging' activeClassName="activated"><span class="material-symbols-outlined">
    account_box
    </span> Profile</Link>
    </div>
    <div className="user-settings">
      <div className="dark-light" onClick={addClassNameToBody}>
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
      <div className="user-name">Suhayel Nasim</div>
      </Link>
    </div>
  </div>
    </>
   
  
  )
}

export default Header