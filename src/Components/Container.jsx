import React from 'react'
import Header from './Header' 
import Home from './Home'
import SocialLinks from './SocialLinks'
import AllCreativeWorks from './AllCreativeWorks'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
const Container = () => {
  return (
    <div className='w-[100%] flex flex-col'>
      <Header/>
      <Home/>
      <SocialLinks/>
      <Skills/>
      <AllCreativeWorks/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Container