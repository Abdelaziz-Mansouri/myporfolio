import React, { useState } from 'react'
import {LogoGradient} from '../assets/index'
import {FaBars , FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'
const Header = () => {
  const [nav , setNav] = useState(false)
  const links = [
    {
      id:1 ,
      link: 'home',
    },
    {
      id:2 ,
      link: 'about',
    },
    {
      id:3 ,
      link: 'portfolio',
    },
    
    {
      id:4 ,
      link: 'contact',
    }
  ]
  return (
    <div className='h-20 bg-dark flex justify-between items-center text-title px-2 sm:px-24 md:px-28 w-[100vw] fixed z-[1000]'>
        <LogoGradient width="50" height='50' 
          data-aos="zoom-in" 
          data-aos-duration="1000"
          data-aos-delay="200"/>
        <ul className='hidden md:flex gap-[10px]' 
          data-aos="zoom-in" 
          data-aos-delay="200"
          data-aos-duration="1000">
          {
            links.map(({id , link}) => (
              <li key={id} className='px-4 cursor-pointer capitalize font-medium hover:scale-150 duration-200 hover:text-primary'>
                <Link to={link} smooth duration={500}>{link}</Link>
              </li>
            ))
          }
        </ul>
        <div onClick={() => { setNav(!nav) }} className='md:hidden cursor-pointer pr-4 z-10'>
          {nav ? <FaTimes size={30} /> : <FaBars size={30}/> }
        </div>
        {nav && 
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-dark to-primary'
            data-aos="fade-down" 
            data-aos-duration="1000">
            {
              links.map(({id , link }) => (
                <li key={id} className='px-4  py-6 cursor-pointer capitalize text-4xl'>
                  <Link onClick={() => { setNav(!nav) }} to={link} smooth duration={500}>{link}</Link>
                </li>
              ))
            }
          </ul>
        }
    </div>
  )
}

export default Header