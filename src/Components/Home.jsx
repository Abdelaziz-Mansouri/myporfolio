import React from 'react'
import Profile from '../assets/profile4.png'
import style from '../style'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className=' bg-gradient-to-b xl:min-h-screen from-dark via-dark to-primary mt-20 py-10 px-2 sm:px-24 md:px-28 flex items-center' >
        <div className='w-full lg:w-9/10 mx-auto flex flex-col gap-5 items-center justify-center h-full px-4 lg:flex-row md:justify'>
            <div className='text-title flex flex-col justify-center h-full  text-center'>
                <h1 className='font-signature text-4xl sm:text-7xl' 
                    data-aos="fade-left" 
                    data-aos-delay="200"
                    data-aos-duration="800">
                    Hello! I'M <span className='text-primary'>MANSOURI ABDELAZIZ</span>
                </h1>
                <p className='text-2xl py-4 max-w-md' 
                    data-aos="fade-right" 
                    data-aos-duration="800"
                    data-aos-delay="200">
                    Front-end developer
                </p>
                <div className='flex gap-[10px] justify-center' 
                    data-aos="fade-up" 
                    data-aos-delay="200"
                    data-aos-duration="800">
                    <Link className={`group ${style.primaryBotton} text-title cursor-pointer`} to='portfolio' smooth duration={500}>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25}/></span>
                    </Link>
                </div>
            </div>
            <div className='lg:w-1/2 sm:w-full flex justify-center'>
                <div className='' 
                    
                    >
                    <img src={Profile} alt='Abdelaziz Mansouri' className='bg-dark rounded-full w-full ' 
                        data-aos="fade-up" 
                        data-aos-duration="800"
                        data-aos-delay="200"/>
                    <div className='relative'>
                        <div className='hidden md:absolute md:bottom-[150px] md:left-[-120px] md:flex justify-between items-center bg-gradient-to-l from-dark via-dark to-primary text-title w-[170px] h-16 px-4 rounded-2xl drop-shadow-2xl'
                            data-aos="fade-right" 
                            data-aos-duration="800"
                            data-aos-delay="200">
                            <h2 className='text-4xl'>02</h2>
                            <div className='flex flex-col '>
                                <p>Years of </p>
                                <p>Experience</p>
                            </div>
                        </div>
                        <div className='hidden md:absolute md:top-[-450px] md:right-[-50px] md:flex justify-between items-center bg-gradient-to-r  md:bg-gradient-to-b from-dark to-primary md:to-primary02 text-title w-[170px] h-16 px-4 rounded-2xl drop-shadow-2xl'
                            data-aos="fade-left" 
                            data-aos-duration="800"
                            data-aos-delay="200">
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