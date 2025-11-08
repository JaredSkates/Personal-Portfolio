"use client";
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='mx-auto mt-40 flex flex-col min-h-[70vh] w-full max-w-6xl gap-8 py-8'>
        
        

        <div className='gap-20 mt-40 sm:gap-0 sm:my-auto flex w-full flex-col px-5 sm:flex-row'>
            {/* Social Media Navigation */}
            <div className='mt-6 mr-40 flex w-3/5 items-center gap-4 sm:justify-start'>
                <a href='' className='p-2'>
                    <Image width={30} height={10} src="/Insta.svg" alt="Insta" />
                </a>

                <a href='mailto:janastacioferrer@gmail.com' className='p-2'>
                    <Image width={30} height={10} src="/email.svg" alt="Email" />
                </a>

                <a href='https://www.linkedin.com/in/jaredanastacioferrer/' className='p-2'>
                    <Image width={30} height={10} src="/LinkedIn.svg" alt="LinkedIn" />
                </a>

                <a href='https://github.com/JaredSkates' className='p-2'>
                    <Image width={30} height={10} src="/github-mark.svg" alt="Github" />
                </a>
            </div>

            {/* Type Animation */}
            <h1 className='w-[80%] sm:w-2/5 text-3xl font-extralight text-gray-900 md:text-5xl lg:text-6xl'>
                <span className='font-normal text-gray-500'> 
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
        
        {/* Location Element */}
        <div className='absolute left-0 hidden h-[90px] w-[250px] items-center justify-center gap-2 rounded-r-[50px] bg-[#5C5353] p-1 md:flex'>
            <p className='text-center text-white'>Located in California</p>
            <div className='h-16 w-16 rounded-full bg-neutral-200'>
                <img src='/world-svgrepo-com.svg' className='p-2'/>
            </div>
        </div>

    </div>
  )
}

export default Hero;
