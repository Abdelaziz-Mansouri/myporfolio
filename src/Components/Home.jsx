import React from 'react'
import Profile from '../assets/profile.png'
import style from '../style'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'

const Home = () => {
  return (
    <div name="home" className='bg-gradient-to-b from-dark via-dark to-primary mt-20 py-10 px-24 md:px-28' >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='text-title flex flex-col justify-center h-full  text-center'>
                <h1 className='font-signature text-4xl sm:text-7xl'>
                    Hello! I'M <span className='text-primary'>MANSOURI ABDELAZIZ</span>
                </h1>
                <p className='text-2xl py-4 max-w-md'>
                    Front-end developer
                </p>
                <div className='flex gap-[10px] justify-center'>
                    <button className={`group ${style.primaryBotton} text-title`}>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25}/></span>
                    </button>
                </div>
            </div>
            <div className='lg:w-1/2 sm:w-full flex justify-center'>
                <div className=''>
                    <img src={Profile} alt='Abdelaziz Mansouri' className='bg-dark rounded-full mx-auto w-2/3 md:w-full '/>
                    <div className='relative'>
                        <div className='xs:hidden md:absolute bottom-[150px] left-[-120px] md:flex justify-between items-center bg-gradient-to-l from-dark via-dark to-primary text-title w-[170px] h-16 px-4 rounded-2xl drop-shadow-2xl'>
                            <h2 className='text-4xl'>01</h2>
                            <div className='flex flex-col '>
                                <p>Year of </p>
                                <p>Experience</p>
                            </div>
                        </div>
                        <div className='xs:hidden md:absolute top-[-500px] right-[-10px] md:flex justify-between items-center bg-gradient-to-b from-dark   to-primary02 text-title w-[170px] h-16 px-4 rounded-2xl drop-shadow-2xl'>
                            <FaLaptopCode size={30}/>
                            <p>Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home