import React from 'react'
import Navbar from '../pages/Navbar'
import Home from '../pages/Home'
import Footer from '../pages/Footer'

function Homepage({ onLoginClick }) {
  return (
    <div className=''>
        <Navbar onLoginClick={onLoginClick} />
        <Home/>
        <Footer/>
    </div>
  )
}

export default Homepage