import React from 'react'
import Profile from '../assets/profile.png'
import style from '../style'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='bg-gradient-to-b min-h-screen from-dark via-dark to-primary mt-20 py-10 px-24 md:px-28 flex items-center' >
        <div className='max-w-screen-lg mx-auto flex flex-col gap-5 items-center justify-center h-full px-4 md:flex-row md:justify'>
            <div className='text-title flex flex-col justify-center h-full  text-center'>
                <h1 className='font-signature text-4xl sm:text-7xl'>
                    Hello! I'M <span className='text-primary'>MANSOURI ABDELAZIZ</span>
                </h1>
                <p className='text-2xl py-4 max-w-md'>
                    Front-end developer
                </p>
                <div className='flex gap-[10px] justify-center'>
                    <Link className={`group ${style.primaryBotton} text-title`} to='portfolio' smooth duration={500}>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25}/></span>
                    </Link>
                </div>
            </div>
            <div className='lg:w-1/2 sm:w-full flex justify-center'>
                <div className=''>
                    <img src={Profile} alt='Abdelaziz Mansouri' className='bg-dark rounded-full w-full '/>
                    <div className='relative'>
                        <div className='absolute bottom-[70px] left-[230px] md:bottom-[150px] md:left-[-120px] flex justify-between items-center bg-gradient-to-l from-dark via-dark to-primary text-title w-[170px] h-16 px-4 rounded-2xl drop-shadow-2xl'>
                            <h2 className='text-4xl'>02</h2>
                            <div className='flex flex-col '>
                                <p>Year of </p>
                                <p>Experience</p>
                            </div>
                        </div>
                        <div className='absolute bottom-[150px] left-[230px]  md:top-[-500px] md:left-[300px] flex justify-between items-center bg-gradient-to-r  md:bg-gradient-to-b from-dark to-primary md:to-primary02 text-title w-[170px] h-16 px-4 rounded-2xl drop-shadow-2xl'>
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