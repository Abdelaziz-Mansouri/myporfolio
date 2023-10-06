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
            style : 'md:rounded-tr-md border-r-[1px] md:border-none'
        },
        {
            id:2 , 
            child :(
                <>Github <FaGithub size={30}/></>
            ),
            href : 'https://github.com/Abdelaziz-Mansouri',
            style : 'border-r-[1px] md:border-none'
        },
        {
            id:3 , 
            child :(
                <>Mail <HiOutlineMail size={30}/></>
            ),
            href : 'azizmansourish@gmail.com',
            style : 'border-r-[1px] md:border-none'
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
        <ul className='w-full flex md:flex-col '>
            {
                links.map((link) => ( 
                    <li key={link.id} className={`flex justify-between items-center w-1/4 md:w-40 h-14 px-4 md:ml-[-100px] md:hover:ml-[-10px] md:hover:rounded-md md:duration-300 bg-dark md:bg-primary02 ${link.style} `}>
                        <a href={link.href} target='_blank' rel='noreferrer' className={`flex justify-between items-center w-full text-title`}>
                            {link.child}
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SocialLinks