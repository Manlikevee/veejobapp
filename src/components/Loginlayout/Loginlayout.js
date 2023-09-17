import React from 'react'
import '../Layout/Style.css'
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "gatsby"



const Loginlayout = ({children , pagetype}) => {
  return (
   
    <div className={`veelogincontainer ${pagetype ? pagetype : ''}`}>

<ToastContainer/>
  <div className="loginsideone">
    <div className="loginlogos"></div>
    <div className="loginform">
      <div className="loginlogo">
     <Link to='/Login'>   <img
          src="https://nigerialogos.com/logos/seedbuilders/seedbuilders.png"
          alt=""
          className="myllogo "
          style={{ objectFit: "contain" }}
        />  </Link>
      </div>
      <div className="lighttext">
     {pagetype == 'register' ? ( 'Register To Continue')  : pagetype == 'verification' ?  (`To complete your registration and access our services, please click the verification link we've sent to your email address or type below.`) : pagetype=='verificationdone' ? ('Email Verification') : ('Welcome Please provide your Log In details.')   }
      
      </div>


{children}

    </div>
    <div className="contactdetails"></div>
  </div>
  <div className="loginsidetwo">
    <div className="loginblur" />
  </div>
</div>

  )
}

export default Loginlayout