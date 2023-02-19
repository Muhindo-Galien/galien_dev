"use client"
import React, { useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import emailjs from "@emailjs/browser";
import { SocialIcon } from 'react-social-icons';
import Connectors from './Connectors';
import { Social } from '../typings'

type Props= {
  socials:Social[]
}

const HomeContact = ({socials}:Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false)
  const handleSubmit=(event: React.FormEvent)=>{
    event.preventDefault();
    if (formRef.current) {
      setLoading(true)
      emailjs
        .sendForm(
          "service_93baent",
          "template_3k5oxtm",
          formRef.current,
          'k6KAWnR4eQwI_hNZh'
        )
        .then(
          (result: { text: any; }) => {
            setLoading(false)
            console.log(result.text);
            formRef.current?.reset(); 
            toast.success("Message sent successfully!")
            
          },
          (error: { text: any; }) => {
            setLoading(false)
            console.log(error.text);
          }
        );
    }
}

  return (
    <div className='max-w-lg mx-auto pt-6  sm:pt-20'>
       <h1 className='text-center font-medium text-2xl mb-4  capitalize'>~contact</h1>
       <div className="mx-5">
        <p className='text-center text-base'>we can build something amazing together? I'd love to hear from you!</p>
        <form className='flex flex-col gap-3 my-5' ref={formRef} onSubmit={handleSubmit}>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-2 w-full'>
            <input type="text" className='inputText' id="name" name="user_name" placeholder='Name' required/>
            <input type="text"  className='inputText'id="subject" name="user_subject"  placeholder='Subject' required/>
          </div>
          <input type="email" placeholder='Email' id="email" name="user_email"  className='inputText' required/>
          <textarea className='inputText' placeholder='Message' id="msg" name="message" cols={20} rows={2} required></textarea>
          {loading?(
            <button disabled className="py-2 px-3 rounded-md hover:bg-[#595e64] bg-[#40454b] text-gray-200" type="submit">Sending...</button>
            ):(
              <button className="py-2 px-3 rounded-md hover:bg-[#595e64] bg-[#40454b] text-gray-200" type="submit">Send</button>
          )}
        </form>
       </div>
       <Connectors socials={socials}/>
       <Toaster />
    </div>
  )
}

export default HomeContact