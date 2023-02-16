"use client"

import React, { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import emailjs from "@emailjs/browser";


const HomeContact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit=(event: React.FormEvent)=>{
    event.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_93baent",
          "template_3k5oxtm",
          formRef.current,
          'k6KAWnR4eQwI_hNZh'
        )
        .then(
          (result: { text: any; }) => {
            console.log(result.text);
            formRef.current?.reset(); 
            toast.success("Message sent successfully!")
            
          },
          (error: { text: any; }) => {
            console.log(error.text);
          }
        );
    }
}

  return (
    <div className='max-w-lg mx-auto'>
       <h1 className='text-center font-medium text-2xl mb-4 pt-6 sm:pt-10 capitalize'>~contact</h1>
       <div className="mx-4">
        <p className='text-center'>we can build something amazing together? I'd love to hear from you !</p>
        <form className='flex flex-col gap-3 my-5' ref={formRef} onSubmit={handleSubmit}>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-2 w-full'>
            <input type="text" className='inputText' id="name" name="user_name" placeholder='Name' required/>
            <input type="text"  className='inputText'id="subject" name="user_subject"  placeholder='Subject' required/>
          </div>
          <input type="email" placeholder='Email' id="email" name="user_email"  className='inputText' required/>
          <textarea className='inputText' placeholder='Message' id="msg" name="message" cols={20} rows={2} required></textarea>
          <button className="py-2 px-3 rounded-md hover:bg-[#595e64] bg-[#40454b] text-gray-200" type="submit">Send</button>
        </form>
       </div>
       <Toaster />
    </div>
  )
}

export default HomeContact