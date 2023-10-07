import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center h-14 bg-dark border-t-[1px] border-t-primary02 py-6 px-4 sm:px-24 md:px-28'>
        <div className="container">
            <span className="leading-none flex items-center justify-center text-center gap-1 text-paragraph dark:text-dark-75">
                
                <span className="font-extralight text-sm md:text-xs md:text-center">
                    &copy; 2023 Abdelaziz Mansouri is Powered by  
                    <a href="https://www.upwork.com/freelancers/~01a253c8b5d0dbde88" target="_blank" rel="noreferrer" className="text-primary underline hover:brightness-105">
                        ABDELAZIZ
                    </a>
                </span>
            </span>
        </div>
    </div>
  )
}

export default Footer