import React from 'react'
import P2P from '../assets/p2p.png'
import ABHM from '../assets/Dashboard.png'
import Movie from '../assets/Home1.png'
import Elearning from '../assets/elearning.png'
import Cyprog from '../assets/cyprog.png'
import HooBank from '../assets/HooBank1.png'
import Nft from "../assets/nft.jpg"
import {FaHtml5 , FaCss3 , FaReact , FaBootstrap} from 'react-icons/fa'
import {SiJavascript , SiTailwindcss} from 'react-icons/si'
import Card from './Card'
const AllCreativeWorks = () => {
  const portfolios = [
    {
      id: 1,
      link : 'https://p2p.marrakechinvest.ma/' ,
      img : P2P ,
      title : 'Marrakech P2P',
      languages : [
        (<div className='flex items-center gap-1 py-1 px-1'><span>HTML</span><FaHtml5 size={24} fill='#f06529'/></div>),
        (<div className='flex items-center gap-1 py-1 px-1'><span>CSS</span><FaCss3 size={24} fill='#264de4'/></div>),
        (<div className='flex items-center gap-1 py-1 px-1'><span>Javascript</span><SiJavascript size={24} fill='yellow'/></div>)
      ]
    },
    {
      id: 2,
      link : '#' ,
      img : ABHM ,
      title : 'Information System',
      languages : [
        (<div className='flex items-center gap-1 py-1 px-1'><span>TailwindCss</span><SiTailwindcss size={24} fill='#38BDF8'/></div>),
        (<div className='flex items-center gap-1 py-1 px-1'><span>React js</span><FaReact size={24} fill='#61dafb'/></div>)
      ]
    },
    {
      id: 3,
      link : '#' ,
      img : Movie,
      title : 'Movie 4 You',
      languages : [
        (<div className='flex items-center gap-1 py-1 px-1'><span>TailwindCss</span><SiTailwindcss size={24} fill='#38BDF8'/></div>),
        (<div className='flex items-center gap-1 py-1 px-1'><span>React js</span><FaReact size={24} fill='#61dafb'/></div>)
      ]
    },
    {
      id: 4,
      link : '#' ,
      img : Elearning,
      title : 'E-Learning',
      languages : [
        (<div className='flex items-center gap-1 py-1 px-1'><span>HTML</span><FaHtml5 size={24} fill='#f06529'/></div>),
        (<div className='flex items-center gap-1 py-1 px-1'><span>BOOTSTRAP</span><FaBootstrap size={24} fill='#712cf9'/></div>),
        (<div className='flex items-center gap-1 py-1 px-1'><span>Javascript</span><SiJavascript size={24} fill='yellow'/></div>)
      ]
    },
    {
      id: 5,
      link : 'https://abdelaziz-mansouri.github.io/cyprog' ,
      img : Cyprog,
      title : 'Cyprog gaming',
      languages : [
        (<div className='flex items-center gap-1 py-1 px-1'><span>React js</span><FaReact size={24} fill='#61dafb'/></div>),
        (<div className='flex items-center gap-1 py-1 px-1'><span>BOOTSTRAP</span><FaBootstrap size={24} fill='#712cf9'/></div>)
      ]
    },
    {
      id: 6,
      link : '#' ,
      img : HooBank,
      title : 'HooBank',
      languages : [
        (<div className='flex items-center gap-1 py-1 px-1'><span>React js</span><FaReact size={24} fill='#61dafb'/></div>),
        (<div className='flex items-center gap-1 py-1 px-1'><span>TailwindCss</span><SiTailwindcss size={24} fill='#38BDF8'/></div>)
      ]
    },
    {
      id: 7,
      link : 'https://github.com/Abdelaziz-Mansouri/Nft-MarketPlace.git' ,
      img : Nft,
      title : 'NFT-Marketplace',
      languages : [
        (<div className='flex items-center gap-1 py-1 px-1'><span>React Native</span><FaReact size={24} fill='#61dafb'/></div>),
        (<div className='flex items-center gap-1 py-1 px-1'><span>CSS</span><FaCss3 size={24} fill='#264de4'/></div>)
      ]
    },
  ]
  return (
    <div name="portfolio" className='xl:min-h-screen bg-gradient-to-b from-primary via-dark to-primary flex flex-col justify-center py-6 px-2 sm:px-24 md:px-28'>
      <div className='flex justify-start py-6 text-title '>
            <h2 className='font-signature text-4xl sm:text-7xl w-1/2 px-4'>PORTFOLIO</h2>
      </div>
      <div className='flex flex-col md:flex-row justify-around items-center text-title py-6 px-10 sm:px-0'>
            <h2 className='font-signature text-center text-2xl sm:text-5xl w-full md:w-1/2'>All Creative Works Selected Project</h2>
            <p className='text-lg py-4 text-center w-full md:w-1/2'>Take a deep breath, then move towards <span className='bg-title text-primary'>success!</span><br/> NB; Don't care about anyone who tries to stop you</p>
      </div>
      <div className='flex flex-col flex-wrap w-full items-center justify-center h-full px-10 sm:px-4 sm:flex-row gap-[30px] text-title group'>
        {portfolios.map(({id , link , img , title , languages}) => (
            <Card 
            key={id} 
            link={link}
            img={img} 
            title={title}
            languages ={languages}/>
            // <div key={id} className='flex flex-col w-full sm:w-[calc(50%-30px)] lg:w-[calc(33%-30px)] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.90] hover:!scale-105 duration-500 hover:shadow-md'>
            //   <a href={link} target='_blank' rel="noreferrer"><img src={img} alt={title} className='rounded-3xl w-full '/></a>
            //   <h2 className='text-md sm:text-xl w-full py-4'>{title}</h2>
            //   <div className='flex justify-between '>
            //     {languages.map((language , index) => (
            //       <div key={index} className='bg-primary02 rounded-md text-[12px] md:text-sm'>{language}</div>
            //     ))}
            //   </div>
            // </div>
        ))}
      </div>
    </div>
  )
}

export default AllCreativeWorks