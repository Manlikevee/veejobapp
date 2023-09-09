import React from 'react'
import './Style.css'
import Header from '../Header/Header'
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Messagelayout = ({children}) => {
  return (
   <>

<Helmet>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  

    {/* Add more head tags here */}
  </Helmet>  
           <Header/>
           <ToastContainer/>
           <div className='myjob'>
{children}
</div>
   </>
  )
}

export default Messagelayout