"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 h-[70vh] mx-auto py-8 bg-[#999d9e]'>
        
        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto sm:w-[250px] lg:w-[400px] p-1'>
            <img src='/jaredpicture.png' alt='Jared' className='rounded-[25%]'/>
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extralight'>
                <span className='text-blue-600'> 
                    I'm a
                </span> <br />
                <TypeAnimation sequence={[
                    "Full Stack Developer",
                    2000,
                    "Software Engineer",
                    2000,
                    "CS Major",
                    2000,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
        </div>

        {/** TODO: Fix Location Banner for Small Screen Devices */}            
        <div className='hidden sm:flex absolute right-0 w-[270px] h-[90px] bg-black rounded-s-[50px] justify-center items-center gap-2 p-1'>
            <div className='w-16 h-16 rounded-[100%] bg-[#999d9e]'>
                <img src='/world-svgrepo-com.svg' className='animate-pulse invert p-2'/>
            </div>
            <p className='text-center'>Located in California</p>
        </div>
    </div>
  )
}

export default Hero;