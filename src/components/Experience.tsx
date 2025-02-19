"use client";
import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { EXPERIENCES } from '../constants';

type Props = {}

const Experience = (props: Props) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const timelineOpacity = useTransform(scrollYProgress, [0, 0.01, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={sectionRef} className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl text-black'>Experience</h1>
        
        <motion.div
            className="sm:hidden lg:flex absolute left-1/2 w-1 bg-neutral-600 rounded-lg"
            style={{
            height: timelineHeight,
            opacity: timelineOpacity,
            transform: "translateX(-200px)",
            }}
        ></motion.div>

        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                        <p className='mb-2 text-md text-neutral-200'>{experience.date}</p>
                    </div>
                    
                    <div className='w-full max-w-xl lg:h-3/4'>
                        <h6 className='mb-2 font-semibold text-lg'>{experience.role} - <span className='text-lg text-black'>{experience.company}</span></h6>
                        <p className='mb-4 text-neutral-200 text-lg'>{experience.description}</p>
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className='mr-2 mt-4 rounded bg-neutral-500 px-2 py-1 text-md font-medium text-blue-600'>{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>

  )
}

export default Experience;