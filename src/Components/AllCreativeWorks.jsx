import React from 'react'
import P2P from '../assets/p2p.png'
import ABHM from '../assets/Dashboard.png'
import Movie from '../assets/Home1.png'
import {FaHtml5 , FaCss3 , FaReact , FaBootstrap} from 'react-icons/fa'
import {SiJavascript , SiTailwindcss} from 'react-icons/si'
const AllCreativeWorks = () => {
  const portfolios = [
    {
      img : (<><img src={P2P} alt='P2P' className='rounded-3xl w-full'/></>) ,
      title : 'E-Learning',
      languages : [
        (<>HTML<FaHtml5 size={25} fill='#f06529'/></>),
        (<>CSS <FaCss3 size={25} fill='#264de4'/></>),
        (<>Javascript <SiJavascript size={25} fill='yellow'/></>)
      ]
    },
    {
      img : (<><img src={ABHM} alt='Information system' className='rounded-3xl w-full'/></>) ,
      title : 'Information System',
      languages : [
        (<>TailwindCss<SiTailwindcss size={25} fill='#38BDF8'/></>),
        (<>React js <FaReact size={25} fill='#61dafb'/></>)
      ]
    },
    {
      img : (<><img src={Movie} alt='Movies' className='rounded-3xl w-full'/></>) ,
      title : 'Movie 4 You',
      languages : [
        (<>TailwindCss<SiTailwindcss size={25} fill='#38BDF8'/></>),
        (<>React js <FaReact size={25} fill='#61dafb'/></>)
      ]
    },
    {
      img : (<><img src={P2P} alt='Mansouri' className='rounded-3xl w-full'/></>) ,
      title : 'E-Learning',
      languages : [
        (<>HTML<FaHtml5 size={25} fill='#f06529'/></>),
        (<>CSS <FaCss3 size={25} fill='#264de4'/></>),
        (<>Javascript <SiJavascript size={25} fill='yellow'/></>)
      ]
    },
  ]
  return (
    <div name="works" className='bg-gradient-to-b from-primary via-black to-black flex flex-col py-6 sm:px-24 md:px-28'>
      <div className='flex justify-start py-6 text-white '>
            <h2 className='font-signature text-4xl sm:text-7xl w-1/2 px-4'>PORTFOLIO</h2>
      </div>
      <div className='flex justify-around items-center text-white py-6 px-10 sm:px-0'>
            <h2 className='font-signature text-2xl sm:text-5xl w-1/2'>All Creative Works Selected Project</h2>
            <p className='text-xl py-4 max-w-md w-1/2'>Take a deep breath, then move towards <span className='bg-white text-primary'>success!</span> NB; Don't care about anyone who tries to stop you</p>
      </div>
      <div className='flex flex-col flex-wrap w-full items-center justify-center h-full px-10 sm:px-4 sm:flex-row gap-[30px] text-white'>
        {portfolios.map((port) => (
            <div className='flex flex-col w-full sm:w-[calc(50%-30px)] lg:w-[calc(33%-30px)]'>
              {port.img}
              <h2 className='text-md sm:text-xl w-full py-4'>{port.title}</h2>
              <div className='flex justify-between '>
                {port.languages.map((language) => (
                  <div className='flex py-2 px-1 gap-2 bg-primary02 rounded-md'>{language}</div>
                ))}
              </div>
            </div>
        ))}
      </div>
        {/* <div className='hidden md:absolute top-0 z-[0] w-[60%] h-[60%] green__gradient'>

        </div> */}
        
    </div>
  )
}

export default AllCreativeWorks