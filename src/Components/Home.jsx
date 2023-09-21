import React from 'react'
import { Ronde } from '../assets'
import Rondegrad from '../assets/rondegradw.png'
import Profile from '../assets/profile.png'
import style from '../style'

const Home = () => {
    console.log(Rondegrad)
  return (
    <div className='bg-black  lg:h-[500px] px-[50px] md:h-[400px]  flex md:flex-row md:justify-between sm:flex-col sm:items-center'>
        <div className='w-1/2'>
            <div style={{ backgroundImage: `url(${Rondegrad})`, backgroundSize: 'cover' }} 
                className={`text-white w-full lg:h-[300px] md:h-[250px] sm:h-[200px]`}>
                <h1 className='xl:text-[70px] md:text-[50px] sm:text-[30px]'>I'M <span className='text-primary'>MANSOURI ABDELAZIZ</span></h1>
                <p className='text-[30px] flex justify-center'>
                    Front-end developer
                </p>
                <div className='flex gap-[10px] justify-center'>
                    <button className={`${style.primaryBotton}`}>Say Hello</button>
                    <button className={`${style.secondayBotton}`}>Portfolio</button>
                </div>
            </div>
        </div>
        <div className='w-1/2 flex justify-center'>
            <div className=''>
                <img src={Profile} alt='Abdelaziz Mansouri' className='lg:w-[385px] lg:h-[400px] md:w-[250px] md:h-[350px]'/>
            </div>
        </div>
    </div>
  )
}

export default Home