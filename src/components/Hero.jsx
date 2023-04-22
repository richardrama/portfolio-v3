import React from 'react'
import Socials from './Socials'

const Hero = () => {
    return (
        <div className='h-[100vh] flex flex-col max-w-[1600px] w-full justify-center w-full md:px-[50px]'>
            <div className="flex flex-col">
                <div className='absolute'>

                </div>
                <div className='font-Chivo text-[17px] text-primary'>Hello, there. I'm</div>
                <h1 className='font-Poppins text-[70px] text-whiteHover tracking-tight font-[600]'>Richard Rama.</h1>
                <h2 className='mt-[-20px] font-Poppins text-[70px] text-white tracking-tight font-[500]'>I build website for clients.</h2>
                <p className='max-w-[600px] w-full text-white text-[17px] font-[500] tracking-tight'>I'm a Web Developer specializing in Front End Development. I create and also design website to match my clients needs. Currently I'm working as a Freelancer, but in the future I may become a full-time worker.</p>
                <div>
                    <button className='transisihover py-[8px] mt-[20px] px-[20px] border-[2px] border-secondary text-black hover:text-secondary font-[600] hover:bg-secondary backdrop-filter backdrop-blur-lg hover:bg-opacity-5 bg-secondary rounded-[3px]'><a href="">Check out more!</a></button>
                </div>
            </div>
        </div >
    )
}

export default Hero