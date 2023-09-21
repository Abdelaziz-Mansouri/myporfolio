import React from 'react'
import {LogoGradient} from '../assets/index'
const Header = () => {
  return (
    <div className='h-[80px] bg-black flex justify-between items-center text-white px-[50px] w-full'>
        <LogoGradient width="50" height='50'/>
        <ul className='flex gap-[10px]'>
          <li>HOME</li>
          <li>PORTFOLIO</li>
          <li>ABOUT US</li>
          <li>TESTIMONIALS</li>
          <li>CONTACT</li>
        </ul>
    </div>
  )
}

export default Header