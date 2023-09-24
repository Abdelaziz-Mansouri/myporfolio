import React, { useState } from 'react'
import {LogoGradient} from '../assets/index'
import {FaBars , FaTimes} from 'react-icons/fa'
const Header = () => {
  const [nav , setNav] = useState(false)
  const links = [
    {
      id:1 ,
      link: 'Home'
    },
    {
      id:2 ,
      link: 'Portfolio'
    },
    ,
    {
      id:3 ,
      link: 'About us'
    },
    {
      id:4 ,
      link: 'Testimonials'
    },
    {
      id:5 ,
      link: 'contact'
    }
  ]
  return (
    <div className='h-20 bg-black flex justify-between items-center text-white px-[50px] w-full fixed z-[1000]'>
        <LogoGradient width="40" height='40'/>
        <ul className='hidden md:flex gap-[10px]'>
          {
            links.map((li) => (
              <li key={li.id} className='px-4 cursor-pointer capitalize font-medium hover:scale-150 duration-200 hover:text-primary'>{li.link}</li>
            ))
          }
        </ul>
        <div onClick={() => { setNav(!nav) }} className='md:hidden cursor-pointer pr-4 z-10'>
          {nav ? <FaTimes size={30} /> : <FaBars size={30}/> }
        </div>
        {nav && 
          <ul className=' flex flex-col  justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-primary'>
            {
              links.map((li) => (
                <li key={li.id} className='px-4  py-6 cursor-pointer capitalize text-4xl'>{li.link}</li>
              ))
            }
          </ul>
        }
    </div>
  )
}

export default Header