import React from 'react'
import P2P from '../assets/p2p.png'
import ABHM from '../assets/Dashboard.png'
import Movie from '../assets/Home1.png'
import {FaHtml5 , FaCss3 , FaReact , FaBootstrap} from 'react-icons/fa'
import {SiJavascript , SiTailwindcss} from 'react-icons/si'
const AllCreativeWorks = () => {
  const portfolios = [
    {
      id: 1,
      img : P2P ,
      title : 'Marrakech P2P',
      languages : [
        (<>HTML<FaHtml5 size={25} fill='#f06529'/></>),
        (<>CSS <FaCss3 size={25} fill='#264de4'/></>),
        (<>Javascript <SiJavascript size={25} fill='yellow'/></>)
      ]
    },
    {
      id: 2,
      img : ABHM ,
      title : 'Information System',
      languages : [
        (<>TailwindCss<SiTailwindcss size={25} fill='#38BDF8'/></>),
        (<>React js <FaReact size={25} fill='#61dafb'/></>)
      ]
    },
    {
      id: 3,
      img : Movie,
      title : 'Movie 4 You',
      languages : [
        (<>TailwindCss<SiTailwindcss size={25} fill='#38BDF8'/></>),
        (<>React js <FaReact size={25} fill='#61dafb'/></>)
      ]
    },
    {
      id: 4,
      img :P2P,
      title : 'E-Learning',
      languages : [
        (<>HTML<FaHtml5 size={25} fill='#f06529'/></>),
        (<>BOOTSTRAP <FaBootstrap size={25} fill='#712cf9'/></>),
        (<>Javascript <SiJavascript size={25} fill='yellow'/></>)
      ]
    },
  ]
  return (
    <div name="portfolio" className='min-h-screen bg-gradient-to-b from-primary via-dark to-primary flex flex-col justify-center py-6 px-24 md:px-28'>
      <div className='flex justify-start py-6 text-title '>
            <h2 className='font-signature text-4xl sm:text-7xl w-1/2 px-4'>PORTFOLIO</h2>
      </div>
      <div className='flex justify-around items-center text-title py-6 px-10 sm:px-0'>
            <h2 className='font-signature text-2xl sm:text-5xl w-1/2'>All Creative Works Selected Project</h2>
            <p className='text-xl py-4 max-w-md w-1/2'>Take a deep breath, then move towards <span className='bg-title text-primary'>success!</span><br/> NB; Don't care about anyone who tries to stop you</p>
      </div>
      <div className='flex flex-col flex-wrap w-full items-center justify-center h-full px-10 sm:px-4 sm:flex-row gap-[30px] text-title'>
        {portfolios.map(({id , img , title , languages}) => (
            <div key={id} className='flex flex-col w-full sm:w-[calc(50%-30px)] lg:w-[calc(33%-30px)]'>
              <img src={img} alt={title} className='rounded-3xl w-full duration-200 hover:scale-105'/>
              <h2 className='text-md sm:text-xl w-full py-4'>{title}</h2>
              <div className='flex justify-between '>
                {languages.map((language , index) => (
                  <div key={index} className='flex py-1 px-1 gap-1 bg-primary02 rounded-md text-sm'>{language}</div>
                ))}
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default AllCreativeWorks