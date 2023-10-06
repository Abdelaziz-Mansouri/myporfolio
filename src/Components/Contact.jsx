import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import SuccesPopup from './SuccesPopup';

const Contact = () => {
    const form = useRef();
    const [done , setDone] = useState(false)
    const close = () => { setDone(!done) }
    const sendEmail =(e) => { 
        e.preventDefault();

        emailjs.sendForm('service_ij5j4k8', 'template_i3z6rzp', form.current, 'W5SbsjmXa2uKj9gz1')
        .then((result) => {
            e.target.reset()
            setDone(!done);
        }, (error) => {
            console.log(error.text);
        });
     }
  return (
    <div name="contact" className="py-6 px-24 md:px-28 relative bg-gradient-to-b from-primary via-dark to-dark">
        <div className='flex justify-start py-6 text-title '>
              <h2 className='font-signature text-4xl sm:text-7xl w-1/2 px-4'>CONTACT</h2>
        </div>
        <div className="container">
            <div className="flex justify-between items-center w-full gap-8 flex-wrap">  
                <div className='flex flex-col w-full md:w-[calc(50%-2rem)] text-title'>
                    <p className='text-sm py-4'>A designer knows he has achieved perfection not when there is nothing left <span className='bg-title text-primary'> to add </span> , but when there is nothing left to take away</p>
                    <p className='text-sm py-8 text-primary02'>If you would like to work with us or just want to get in touch, we'd love to hear from you!</p>
                    <a href="//api.whatsapp.com/send?phone=212615322577" target='_blank' className='text-primary underline text-lg'><h2 className=''>+21261532577</h2></a>
                </div>
                <div className="flex-1 w-full md:w-[calc(50%-2rem)]">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 w-full text-title">
                        <div className="">
                            <input type='text' name='user_name' className="border border-paragraph border-opacity-10 rounded-lg outline-none bg-transparent p-4 w-full placeholder:text-paragraph placeholder:text-opacity-30 placeholder:font-light duration-500 transition-all focus:border-opacity-100" placeholder="Name" />
                        </div>
                        <div className="">
                            <input type="email" name='user_email' className="border border-paragraph border-opacity-10 rounded-lg outline-none bg-transparent p-4 w-full placeholder:text-paragraph placeholder:text-opacity-30 placeholder:font-light duration-500 transition-all focus:border-opacity-100" placeholder="Email" />
                        </div>
                        <div className="">
                            <textarea rows="4" name='message' className="border border-paragraph border-opacity-10 rounded-lg outline-none
                                bg-transparent p-4 w-full placeholder:text-paragraph placeholder:text-opacity-30 
                                placeholder:font-light duration-500 transition-all focus:border-opacity-100" 
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <div className="flex-1">
                            <button type="submit" value="send" className="relative overflow-hidden border border-paragraph border-opacity-10 
                                uppercase text-paragraph tracking-widest bg-transparent px-4 py-5 leading-none flex items-center 
                                justify-center rounded-lg w-full group transition-colors hover:text-dark duration-500 h-14 
                                outline-none"> 
                                Send a message 
                                <span className="absolute inset-0 w-1.5 bg-primary transition-all duration-500  
                                group-hover:w-full text-transparent hover:text-paragraph flex items-center justify-center">Send a message </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {done && <SuccesPopup close={close} />}
    </div>
  )
}

export default Contact