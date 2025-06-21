import React from 'react';
import Navbar from '../pages/Navbar'
import Shop from '../pages/Shop'
import Footer from '../pages/Footer'
import { useLocation } from 'react-router-dom';

function Shoppage() {

  return (
    <div className='max-w-full'>
        <Navbar/>
        <Shop/>
        <Footer/>
    </div>
  )
}

export default Shoppage