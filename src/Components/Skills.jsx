import React from 'react'
import P2P from '../assets/p2p.png'
import ABHM from '../assets/Dashboard.png'
import Movie from '../assets/Home1.png'
import {FaHtml5 , FaCss3 , FaReact , FaBootstrap} from 'react-icons/fa'
import {SiJavascript , SiTailwindcss} from 'react-icons/si'
const Skills = () => {

    const skills = [
        {
            img : (<><FaHtml5 fill='#f06529' size={40}/></>) ,
            title : 'HTML',
            rate : 100
        },
        {
            img : (<><FaCss3 fill='#264de4' size={40}/></>) ,
            title : 'CSS',
            rate : 100
        },
        {
            img : (<><SiJavascript fill='yellow' size={40}/></>) ,
            title : 'Javascript',
            rate : 90
        },
        {
            img : (<><FaBootstrap fill='#712cf9' size={40}/></>) ,
            title : 'Bootstrap',
            rate : 95
        },
        {
            img : (<><SiTailwindcss fill='#38BDF8' size={40}/></>) ,
            title : 'Tailwind',
            rate : 85
        },
        {
            img : (<><FaReact fill='#61dafb' size={40}/></>) ,
            title : 'React Js',
            rate : 90
        },
      ]
  return (
    <div name="works" className='bg-primary flex flex-col py-6 sm:px-24 md:px-28 text-white'>
        <div className='flex justify-start py-6 text-white '>
              <h2 className='font-signature text-4xl sm:text-7xl w-1/2 px-4'>ABOUT</h2>
        </div>
        <div className='text-2xl py-4 w-full sm:w-2/3 px-10 sm:px-4 text-center leading-10'>
            A highly skilled and experienced Front-end Developer with a passion for crafting 
            elegant and user-friendly web interfaces. With 2 years of hands-on experience in 
            front-end development, I have honed my skills in HTML, CSS, and JavaScript to create 
            seamless and responsive web applications.
        </div>
        <div className='flex justify-start py-6 text-white '>
              <h2 className='font-signature text-4xl sm:text-7xl w-1/2 px-4'>Skills</h2>
        </div>
        <div className='flex flex-col flex-wrap w-full items-center justify-center h-full py-6 px-10 sm:px-4 sm:flex-row gap-[30px] text-white'>
          {skills.map((skill) => (
              <div key={skill.id} className='flex flex-col w-full sm:w-[calc(50%-30px)] md:w-[calc(33%-30px)] p-1 bg-black drop-shadow-[0_10px_10px_#0f9b0f] rounded-lg'>
                <div className='flex justify-center '>
                    <div className='w-2/3 flex gap-[10px] items-center'>
                        <div>{skill.img}</div>
                        <h2 className='text-md sm:text-xl w-full py-4'>{skill.title}</h2>
                    </div>
                    <div className='flex justify-end items-start w-1/3'>
                        <div className='py-1 px-2 bg-primary02 rounded-full text-sm'>{skill.rate}%</div>
                    </div>
                </div>
                <div className='flex justify-start items-center h-1 w-full bg-gray-300 rounded-md'>
                    <div className={`bg-primary rounded-md h-1`} style={{width : `${skill.rate}%`}}></div>
                </div>
              </div>
          ))}
        </div>
        <div className='hidden md:absolute top-0 z-[0] w-[60%] h-[60%] green__gradient'>

        </div>
        
    </div>
  )
}

export default Skills