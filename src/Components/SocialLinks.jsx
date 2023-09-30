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
            style : 'rounded-tr-md'
        },
        {
            id:2 , 
            child :(
                <>Github <FaGithub size={30}/></>
            ),
            href : 'https://github.com/Abdelaziz-Mansouri'
        },
        {
            id:3 , 
            child :(
                <>Mail <HiOutlineMail size={30}/></>
            ),
            href : 'azizmansourish@gmail.com'
        },
        {
            id:4 , 
            child :(
                <>Instagram <FaInstagram size={30}/></>
            ),
            href : 'https://www.instagram.com/abdelaziz_mansouri48/',
            style : 'rounded-br-md'
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed z-[100] text-white'>
        <ul >
            {
                links.map((link) => ( 
                    <li key={link.id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-primary02 ${link.style}`}>
                        <a href={link.href} target='_blank' rel='noreferrer' className={`flex justify-between items-center w-full text-white`}>
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