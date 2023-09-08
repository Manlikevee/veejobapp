import React from 'react'
import '../Layout/Style.css'
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Loginlayout = ({children}) => {
  return (
    <div className="veelogincontainer">

<ToastContainer/>
  <div className="loginsideone">
    <div className="loginlogos"></div>
    <div className="loginform">
      <div className="loginlogo">
        <img
          src="https://nigerialogos.com/logos/seedbuilders/seedbuilders.png"
          alt=""
          className="myllogo "
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="lighttext">
        Welcome Please provide your Log In details.
      </div>


{children}

    </div>
    <div className="contactdetails">© 2021 Travling. All Rights Reserved</div>
  </div>
  <div className="loginsidetwo">
    <div className="loginblur" />
  </div>
</div>

  )
}

export default Loginlayout