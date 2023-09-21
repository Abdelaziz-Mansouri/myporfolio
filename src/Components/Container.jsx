import React from 'react'
import Header from './Header' 
import Home from './Home'

const Container = () => {
  return (
    <div className='w-[100vw] flex flex-col'>
      <Header/>
      <Home/>
    </div>
  )
}

export default Container