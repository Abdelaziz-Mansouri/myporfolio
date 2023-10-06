import React from 'react'
import {BsSendCheckFill} from 'react-icons/bs'
const SuccesPopup = (props) => {
    return (
        <div>
            <div onClick={props.close} className='fixed inset-0 bg-title opacity-50'></div>
            <div className="fixed inset-[50%] -translate-x-[50%] drop-shadow-md -translate-y-[50%] w-[444px] h-fit rounded-[24px] p-[22px] bg-dark z-10 text-label flex flex-col justify-center items-center">
                    <BsSendCheckFill size={40} fill='#0f9b0f'/>
                    <h2 className='mt-[16px] mb-[8px] text-title font-bold text-[20px]'>Done!</h2>
                <button onClick={props.close} className='
                                uppercase text-title tracking-widest bg-primary px-4 py-5 flex items-center 
                                justify-center rounded-lg w-full h-14'>Close</button>
            </div>
        </div>
    )
}

export default SuccesPopup