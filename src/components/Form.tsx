"use client";
import React from 'react'

const ContactForm = () => {
    return(
        <form className="flex flex-col p-8 text-black w-[400px] md:w-[600px] h-[600px] gap-5 leading-loose">
          <hr className="border-black"/>
          
          <div>
            <h2>What&apos;s your name?</h2>
            <input type="text" className="border-none bg-transparent outline-none"/>
          </div>

          <hr className="border-black"/>

          <div>
            <h2>What&apos;s your email?</h2>
            <input type="text" className="border-none bg-transparent outline-none"/>
          </div>

          <hr className="border-black"/>

          <div>
            <h2>Your Subject</h2>
            <input type="text" className="border-none bg-transparent outline-none"/>
          </div>

          <hr className="border-black"/>

          <div>
            <h2>Your Message</h2>
            <textarea rows={4} cols={40} className="border-none bg-transparent outline-none"/>
          </div>

          <hr className="border-black"/>
        </form>
    );
}


export default ContactForm;
