import React, { useEffect } from 'react'
import './Style.css'
import Header from '../Header/Header'

const Layout = ({ children }) => {
  return (
    <div>
        <Header/>

        <div className="job">
        {children}
        </div>

        
        </div>
  )
}

export default Layout

