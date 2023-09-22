import React from 'react'
import Header from './Header' 
import Home from './Home'
import SocialLinks from './SocialLinks'
const Container = () => {
  return (
    <div className='w-[100%] flex flex-col'>
      <Header/>
      <Home/>
      <SocialLinks/>
    </div>
  )
}

export default Container