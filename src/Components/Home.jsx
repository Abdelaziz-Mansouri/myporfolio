import React from 'react'
import { Ronde } from '../assets'
import Rondegrad from '../assets/last.png'
import Profile from '../assets/profile.png'
import style from '../style'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className='bg-gradient-to-b from-black via-black to-primary h-screen mt-20'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='text-white flex flex-col justify-center h-full  text-center'>
                <h1 className='font-signature text-4xl sm:text-7xl'>
                    Hello! I'M <span className='text-primary'>MANSOURI ABDELAZIZ</span>
                </h1>
                <p className='text-2xl py-4 max-w-md'>
                    Front-end developer
                </p>
                <div className='flex gap-[10px] justify-center'>
                    <button className={`group ${style.primaryBotton} text-white`}>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25}/></span>
                    </button>
                </div>
            </div>
            <div className='lg:w-1/2 sm:w-full flex justify-center'>
                <div className=''>
                    <img src={Profile} alt='Abdelaziz Mansouri' className='bg-black rounded-full mx-auto w-2/3 md:w-full '/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home