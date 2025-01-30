"use client"; // TODO
import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'; // 

type Props = {}

const Navbar = (props: Props) => {
  const [nav, setNav] = useState(false); // Navigation state

  const handleNav = () => { // Toggles our 'nav' value
    setNav(!nav);
  };

  return (
    <div>
      <div className='bg-white h-[100px] flex justify-around items-center'>
        
        <h1 className='text-3xl font-light text-black ml-4'>Jared Anastacio Ferrer</h1>

        <ul className='hidden md:flex text-blue-600 font-thin'>
          <li className='p-5 hover:text-blue-400'><a href='#about'>About</a></li>
          <li className='p-5 hover:text-blue-400'><a href='#experience'>Experience</a></li>
          <li className='p-5 hover:text-blue-400'><a href='#projects'>Projects</a></li>
          <li className='p-5 hover:text-blue-400'><a href='#contact'>Contact</a></li>
        </ul>
        
        <div className='block md:hidden mr-6 text-black' onClick={handleNav}>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500': 'fixed left-[-100%]'}>
          
          <h1 className='text-3xl font-light text-white ml-4 flex justify-center mt-4'>Jared Anastacio Ferrer</h1>

          <ul className='p-8 text-2xl text-blue-400 font-thin'>
            <li className='p-2 hover:text-blue-200'><a href='#about'>About</a></li>
            <li className='p-2 hover:text-blue-200'><a href='#experience'>Experience</a></li>
            <li className='p-2 hover:text-blue-200'><a href='#projects'>Projects</a></li>
            <li className='p-2 hover:text-blue-200'><a href='#contact'>Contact</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
};

export default Navbar;