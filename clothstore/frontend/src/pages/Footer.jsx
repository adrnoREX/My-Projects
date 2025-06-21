import React from 'react'

import original_logo from '../assets/original logo.png'
import fourteen_logo from '../assets/14 logo.png'
import facebook_logo from '../assets/facebook logo.png'
import whatsapp_logo from '../assets/whatsapp logo.png'
import youtube_logo from '../assets/youtube logo.png'
import twitter_logo from '../assets/twitter logo.png'
import instagram_logo from '../assets/instagram logo.png'
import pinterest_logo from '../assets/pinterest logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className='footer shadow-2xl mt-15 bg-base-100 w-full font-semibold border-t-1 border-t-gray-300 text-gray-700 flex pb-30 justify-center h-90 relative pt-23 '>
            <div className='mx-30  '>ONLINE SHOPPING
                <div className='flex flex-column'>Men <br />Women <br />Kids </div>
            </div>
            <div className=''>CUSTOMER POLICIES
                <div className='flex flex-column'>Contact <br /> T&C <br />Shipping <br />Cancellation</div>
                <div ></div>
            </div>
            <div className='mx-20 '>
                <div className='mt-2'>
                    <div className='flex '>
                        <img src={original_logo} className='w-15 h-12 -mx-1' alt="" srcSet="" />
                        <div className='flex mx-2 '><div className=' font-extrabold mx-2'>100% ORIGINAL</div> guarantee for <div className='-mx-51 mt-6'>all products at clothstore.com</div> </div>
                    </div>
                    <div className='flex mt-2'>
                        <img src={fourteen_logo} className='w-15 h-13 -mx-1 mt-2' alt="" srcSet="" />
                        <div className='mx-3 mt-3 flex'><div className='mx-1 font-extrabold'>Return within 14 days </div> of <div className='-mx-42 mt-6'>recieving your order</div>  </div>
                    </div>
                </div>
            </div>
            <div className='mx-55'>
                <div className='text-start mx-1'>KEEP IN TOUCH</div>
                <div className='flex'>
                    <Link><img src={facebook_logo} className='w-9 mt-2' alt="" /></Link>
                    <Link><img src={whatsapp_logo} className='w-9 mt-2' alt="" /></Link>
                    <Link><img src={youtube_logo} className='w-10 mt-2' alt="" /></Link>
                    <Link><img src={twitter_logo} className='w-9 mt-2' alt="" /></Link>
                    <Link><img src={instagram_logo} className='w-10 mt-2' alt="" /></Link>
                    <Link><img src={pinterest_logo} className='w-8 mt-2' alt="" /></Link>
                </div>   
            </div>
            
            
        </div>
    </div>
    
    
  )
}

export default Footer