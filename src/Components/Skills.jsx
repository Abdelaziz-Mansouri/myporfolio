import React from 'react'
import {FaGithub , FaHtml5 , FaCss3 , FaReact , FaBootstrap , FaPython} from 'react-icons/fa'
import {SiJavascript , SiTailwindcss , SiCsharp} from 'react-icons/si'
import { DiMsqlServer } from "react-icons/di";
const Skills = () => {

    const skills = [
        {
            id: 1,
            img : (<><FaHtml5 fill='#f06529' size={40}/></>) ,
            title : 'HTML',
            rate : 100,
            style : 'shadow-[#f06529]',
            aosDelay : "200"
        },
        {
            id: 2,
            img : (<><FaCss3 fill='#264de4' size={40}/></>) ,
            title : 'CSS',
            rate : 100,
            style : 'shadow-[#264de4]',
            aosDelay : "400"
        },
        {
            id: 3,
            img : (<><SiJavascript fill='yellow' size={40}/></>) ,
            title : 'Javascript',
            rate : 90,style : 'shadow-yellow-500',
            aosDelay : "600"
        },
        {
            id: 4,
            img : (<><FaBootstrap fill='#712cf9' size={40}/></>) ,
            title : 'Bootstrap',
            rate : 95 ,
            style : 'shadow-[#712cf9]',
            aosDelay : "800"
        },
        {
            id: 5,
            img : (<><SiTailwindcss fill='#38BDF8' size={40}/></>) ,
            title : 'Tailwind',
            rate : 85,
            style : 'shadow-[#38BDF8]',
            aosDelay : "1000"
        },
        {
            id: 6,
            img : (<><FaReact fill='#61dafb' size={40}/></>) ,
            title : 'React Js',
            rate : 90,
            style : 'shadow-[#61dafb]',
            aosDelay : "1200"
        },
        {
            id: 7,
            img : (<><FaGithub fill='#f6f8fa' size={40}/></>) ,
            title : 'GitHub',
            rate : 80,
            style : 'shadow-[#f6f8fa]',
            aosDelay : "1400"
        },
        {
            id: 7,
            img : (<><SiCsharp fill='#5d438e' size={40}/></>) ,
            title : 'C#',
            rate : 70,
            style : 'shadow-[#5d438e]',
            aosDelay : "1600"
        },
        {
            id: 8,
            img : (<><DiMsqlServer fill='#b01d24' size={40}/></>) ,
            title : 'Sql Server',
            rate : 90,
            style : 'shadow-[#dadcdf]',
            aosDelay : "1800"
        },
        {
            id: 9,
            img : (<><FaPython fill='#306998' size={40}/></>) ,
            title : 'Python',
            rate : 60,
            style : 'shadow-[#FFD43B]',
            aosDelay : "2000"
        },
        {
            id: 10,
            img : (<><FaReact fill='#61dafb' size={40}/></>) ,
            title : 'React Native',
            rate : 80,
            style : 'shadow-[#61dafb]',
            aosDelay : "2200"
        },
      ]
  return (
    <div name="about" className='bg-primary xl:min-h-screen flex flex-col py-6 px-2 sm:px-24 md:px-28 text-title'>
        <div className='flex justify-start py-6 text-title ' 
            data-aos="fade-up" 
            data-aos-duration="800"
            data-aos-delay="400"
            data-aos-once="false">
              <h2 className='font-signature text-4xl sm:text-7xl w-1/2 px-4'>ABOUT</h2>
        </div>
        <div className='text-md sm:text-2xl py-4 w-full px-10 sm:px-4 text-center leading-10'
            data-aos="fade-up" 
            data-aos-duration="800"
            data-aos-delay="400"
            data-aos-once="false">
            A highly skilled and experienced Front-end Developer with a passion for crafting 
            elegant and user-friendly web interfaces. With 2 years of hands-on experience in 
            front-end development, I have honed my skills in HTML, CSS, and JavaScript to create 
            seamless and responsive web applications.
        </div>
        <div className='flex justify-start py-6 text-title '
            data-aos="fade-up" 
            data-aos-duration="400"
            data-aos-delay="200"
            data-aos-once="false">
            <h2 className='font-signature text-4xl sm:text-7xl w-1/2 px-4'>Skills</h2>
        </div>
        <div className='flex flex-col flex-wrap w-full items-center justify-center h-full py-6 px-10 sm:px-4 sm:flex-row gap-[30px] text-title'>
          {skills.map(({id , img , title , rate , style, aosDelay}) => (
              <div key={id} className={`flex flex-col w-full sm:w-[calc(50%-30px)] md:w-[calc(33%-30px)] p-1 bg-dark shadow-md ${style} rounded-lg duration-500 hover:scale-105`}
                data-aos="fade-up" 
                data-aos-duration={aosDelay}
                data-aos-once="false">
                <div className='flex justify-center '>
                    <div className='w-2/3 flex gap-[10px] items-center'>
                        <div>{img}</div>
                        <h2 className='text-md sm:text-xl w-full py-4'>{title}</h2>
                    </div>
                    <div className='flex justify-end items-start w-1/3'>
                        <div className='py-1 px-2 bg-primary02 rounded-full text-sm'>{rate}%</div>
                    </div>
                </div>
                <div className='flex justify-start items-center h-1 w-full bg-gray-300 rounded-md'>
                    <div className={`bg-primary rounded-md h-1`} style={{width : `${rate}%`}}></div>
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