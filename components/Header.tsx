"use client"; // this is a client component
import Link from 'next/link';
import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { SocialIcon } from 'react-social-icons';
import { Social } from '../typings'
// import Link from './Link';

type Props= {
  socials:Social[]
}
const Header = ({socials}:Props) => {
  const [active, setActive] = useState(1)
  const [opened, setOpened] = useState(false)
  const handleOpened = ()=>{
    setOpened(!opened)
  }

  const menuOptions = [
    {name:"home",links_to:'/'},
    {name:"about",links_to:'/about'},
    {name:"work",links_to:'/work'},
    {name:"Publications",links_to:'/publications'},
    {name:"contact",links_to:'/contact'}
    
  ]
  return (
    <header className='max-w-3xl mx-auto '>
      <div className=' flex items-center justify-between py-4 lg:mx-0 mx-6 pb-9.5 sm:pb-0'>
          <Link href={'/'}>
            <h1 onClick={()=>setActive(1)} className='font-medium text-3xl hidden sm:block'>MG</h1>
            <h1 onClick={()=>setActive(1)} className='font-medium text-3xl sm:hidden'>MG</h1>
          </Link>
          {/* tablet laphrefp */}
          <div className=''>
            <ul className={`sm:flex justify-center gap-4 lg:mx-gap-10 hidden font-normal`}>
              {menuOptions.map((item:{name:string,links_to:string},i:number)=>{
                return(
                <Link href={item.links_to}> 
                  <li 
                  onClick={()=>setActive(i+1)}
                  className={`px-3 py-1 rounded cursor-pointer ${active === i+1?'bg-[#20262E] text-gray-50':'text-gray-50 font-light  '} `}>
                    {item.name}
                  </li> 
                </Link>)
              })}
            </ul>
          </div>
           {/* phone */}
           <div className={opened?"flex flex-col justify-between z-50 shadow-2xl": "hidden"}>
              <ul className='fixed  p-0 right-0 top-0  gap-3 flex flex-col shadow-xl overflow-hidden h-full w-5/6 max-w-sm py-6 px-6 bg-[#1a1a1a] border-r overflow-y-hidden'>
                <div className=" flex justify-between items-center pb-8">
                <div className='flex gap-2'>
                      {socials?.map((social)=>(
                      <SocialIcon key={social._id} url={social.url} fgColor='white' bgColor='#20262E' target={'_blank'} style={{ height: 35, width: 35 }} className='border rounded-full'/>
                  ))}
                  </div>
                  <MdClose className='text-3xl text-[#fff]' onClick={()=>handleOpened()}/>
                </div>
                {menuOptions.map((item:{name:string,links_to:string},i:number)=>{
                return(
                <Link href={item.links_to}> 
                  <li 
                  onClick={()=>setActive(i+1)}
                  className={`px-3 py-1 rounded cursor-pointer ${active === i+1?'bg-[#20262E] text-gray-50':'text-gray-50 font-light  '} `}>
                    {item.name}
                  </li> 
                </Link>)
              })}
              </ul>
          </div>            
                <div className="sm:hidden block text-gray-50">
                    <HiMenuAlt3 className='text-3xl' onClick={()=>handleOpened()}/>
                </div>
            
            </div>
    </header>
  )
}

export default Header