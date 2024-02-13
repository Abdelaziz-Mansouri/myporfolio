import React from "react";
import { motion, useMotionValue, useSpring, useTransform} from "framer-motion";


const Card = (props) => {

    const x  = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring , [-0.5, 0.5] , ["17.5deg" , "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring , [-0.5, 0.5] , ["-17.5deg" , "17.5deg"]);

    const handleMouseMove =(e) => { 
        const rect= e.target.getBoundingClientRect();

        const width= rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top

        const xPct = ( mouseX / width) -0.5 ;
        const yPct = (mouseY / height) - 0.5;
        
        x.set(xPct);
        y.set(yPct)
     }

    const handleMouseLeave = () => { 
        x.set(0)
        y.set(0)
     }
    return (
        <motion.div 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave} 
            style={{rotateX , rotateY, transformStyle :"preserve-3d"}} 
            className='md:relative flex flex-col w-full sm:w-[calc(50%-30px)] lg:w-[calc(33%-30px)] hover:shadow-md'>
                <a style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                    }} href={props.link} target='_blank' rel="noreferrer">
                    <img src={props.img} alt={props.title} className='rounded-3xl w-full '/>
                </a>
                <h2 className='text-md sm:text-xl w-full py-4'>{props.title}</h2>
                <div className='flex justify-between '>
                    {props.languages.map((language , index) => (
                        <div key={index} className='bg-primary02 rounded-md text-[12px] md:text-sm'>{language}</div>
                    ))}
                </div>
        </motion.div>
  )
}

export default Card