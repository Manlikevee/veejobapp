import React from 'react'
import './Style.css'
import Header from '../Header/Header'

const Messagelayout = ({children}) => {
  return (
   <>
           <Header/>
           <div className='myjob'>
{children}
</div>
   </>
  )
}

export default Messagelayout