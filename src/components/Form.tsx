"use client";
import axios from 'axios'
import { useState } from "react";
import { SubmitButton } from './ui/SubmitButton';

export function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    async function onFormSubmitted(event: React.FormEvent) {
        event?.preventDefault();

        try {
            const response = await axios.post('/api/sendemail', {
                    name,
                    email,
                    subject,
                    messageToSend: message
                },
                {headers : {
                'Content-Type': 'application/json'
                }
            })

            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    } 

    return(
        <form onSubmit={onFormSubmitted} className="flex flex-col sm:flex-row justify-center sm:gap-20">
            <div className='flex flex-col p-8 text-black w-[400px] md:w-[600px] h-[600px] gap-5 leading-loose'>
                <hr className="border-black"/>
            
                <div>
                    <h2>What&apos;s your name?</h2>
                    <input type="text" 
                    className="border-none bg-transparent outline-none"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                    required
                    />
                </div>

                <hr className="border-black"/>

                <div>
                    <h2>What&apos;s your email?</h2>
                    <input type="text" 
                    className="border-none bg-transparent outline-none"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    required
                    />
                </div>

                <hr className="border-black"/>

                <div>
                    <h2>Your Subject</h2>
                    <input type="text" 
                        className="border-none bg-transparent outline-none"
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value)}}
                        required
                    />
                </div>

                <hr className="border-black"/>

                <div>
                    <h2>Your Message</h2>
                    <textarea rows={4} cols={40} 
                        className="border-none bg-transparent outline-none"
                        value={message}
                        onChange={(e) => {setMessage(e.target.value)}}
                        required
                    />
                </div>

                <hr className="border-black"/>
            </div>
            
            
            <SubmitButton />
        </form>


    );
}