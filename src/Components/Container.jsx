import React from 'react'
import Header from './Header' 
import Home from './Home'
import SocialLinks from './SocialLinks'
import AllCreativeWorks from './AllCreativeWorks'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import ScrollToTop from 'react-scroll-to-top'
const Container = () => {
  return (
    <div className='w-full overflow-x-hidden flex flex-col'>
      <Header/>
      <Home/>
      <SocialLinks/>
      <Skills/>
      <AllCreativeWorks/>
      <Contact/>
      <Footer/>
      <ScrollToTop className='!bg-title !rounded-full !flex !items-center !justify-center !transition-all !duration-2000' color='#0f9b0f'  smooth top={400} />
    </div>
  )
}

export default Container