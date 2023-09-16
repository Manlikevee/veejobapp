import React, { useEffect } from 'react'
import './Style.css'
import Header from '../Header/Header'
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = ({ children }) => {
  return (
    <div>
              <Helmet>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  
  

    {/* Add more head tags here */}
  </Helmet>  
        <Header/>
    

        <div className="job">
        {children}
        </div>
        <ToastContainer/>
        
        </div>
  )
}

export default Layout

