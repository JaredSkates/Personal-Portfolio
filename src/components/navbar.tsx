"use client"; // TODO
import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'; // 

const Navbar = () => {
  const [nav, setNav] = useState(false); // Navigation state

  const handleNav = () => { // Toggles our 'nav' value
    setNav(!nav);
  };

  return (
    <div>
      <div className='mx-auto flex h-24 w-full max-w-6xl items-center justify-between px-6'>
        {/* Name */}
        <h1 className='ml-4 text-3xl font-extralight text-gray-900'>Jared Anastacio Ferrer</h1>

        {/* Desktop Navigation */}
        <ul className='hidden items-center gap-6 text-lg font-light text-gray-900 md:flex'>
          <li className='transition-colors hover:text-blue-600'><a href='#about'>Blog</a></li>
          <li className='transition-colors hover:text-blue-600'><a href='#experience'>Work</a></li>
          <li className='transition-colors hover:text-blue-600'><a href='#projects'>About</a></li>
          <li className='transition-colors hover:text-blue-600'><a href='#contact'>Contact</a></li>
        </ul>
        
        {/* Mobile Menu Toggle */}
        <div className='mr-6 block text-gray-900 md:hidden' onClick={handleNav}>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        {/* Mobile Navigation */}
        <div className={nav ? 'fixed inset-y-0 left-0 w-3/5 bg-neutral-900 p-6 transition-all duration-500 ease-in-out' : 'fixed -left-full'}>
          <h1 className='mt-4 flex justify-center text-xl font-light text-white sm:text-3xl'>Jared Anastacio Ferrer</h1>
          <div className='h-4'></div>
          <hr className='mx-8 my-4 border-white/30'/>

          <ul className='space-y-3 text-2xl font-light text-white'>
            <li className='transition-colors hover:text-blue-200'><a href='#about'>About</a></li>
            <li className='transition-colors hover:text-blue-200'><a href='#experience'>Experience</a></li>
            <li className='transition-colors hover:text-blue-200'><a href='#projects'>Projects</a></li>
            <li className='transition-colors hover:text-blue-200'><a href='#contact'>Contact</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
};

export default Navbar;
