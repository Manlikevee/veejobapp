import React from 'react'
import './Style.css'
import Header from '../Header/Header'

const Messagelayout = ({children}) => {
  return (
   <>
           <Header/>
{children}

   </>
  )
}

export default Messagelayout