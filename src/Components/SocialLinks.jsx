import React from 'react'
import {FaGithub , FaLinkedin , FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
const SocialLinks = () => {
    const links =[
        {
            id:1 , 
            child :(
                <>Linkedin <FaLinkedin size={30}/></>
            ),
            href : 'https://www.linkedin.com/in/abdelaziz-mansouri-210380257/',
            style : 'md:rounded-tr-md sm:border-r-[1px] md:border-none'
        },
        {
            id:2 , 
            child :(
                <>Github <FaGithub size={30}/></>
            ),
            href : 'https://github.com/Abdelaziz-Mansouri',
            style : 'sm:border-r-[1px] md:border-none'
        },
        {
            id:3 , 
            child :(
                <>Mail <HiOutlineMail size={30}/></>
            ),
            href : 'mailto:azizmansourish@gmail.com',
            style : 'sm:border-r-[1px] md:border-none'
        },
        {
            id:4 , 
            child :(
                <>Instagram <FaInstagram size={30}/></>
            ),
            href : 'https://www.instagram.com/abdelaziz_mansouri48/',
            style : 'md:rounded-br-md'
        }
    ]
  return (
    <div className='flex md:flex-col md:top-[35%] md:left-0 md:fixed md:z-[100] text-title'>
        <ul className='w-full flex flex-col sm:flex-row md:flex-col justify-center'>
            {
                links.map(({id , child , href ,style}) => ( 
                    <li key={id} className={`flex justify-between items-center w-full sm:w-1/4 md:w-40 h-14 px-4 md:ml-[-100px] md:hover:ml-[-10px] md:hover:rounded-md md:duration-300 bg-dark md:bg-primary02 ${style} `}>
                        <a href={href} target='_blank' rel='noreferrer' className={`flex justify-center gap-2 sm:gap-0 sm:justify-between items-center w-full text-title`}>
                            {child}
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SocialLinks