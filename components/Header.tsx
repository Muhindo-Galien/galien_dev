"use client"; // this is a client component
import Link from 'next/link';
import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
// import { SocialIcon } from 'react-social-icons';
// import { Social } from '../typings'
// import Link from './Link';

// type Props= {
//   socials:Social[]
// }
const Header = () => {
  const [active, setActive] = useState(1)
  const [opened, setOpened] = useState(false)
  const handleOpened = ()=>{
    setOpened(!opened)
  }

  const menuOptions = [
    {name:"home",links_to:'/'},
    {name:"about",links_to:'/about'},
    {name:"work",links_to:'/work'},
    {name:"writting",links_to:'/writting'},
    {name:"contact",links_to:'/contact'}
    
  ]
  return (
    <header className='max-w-3xl mx-auto '>
      <div className=' flex items-center justify-between py-4 lg:mx-0 mx-6 pb-9.5 sm:pb-0'>
          <Link href={'/'}>
            <h1 className='font-medium text-2xl hidden sm:block'>Muhindo  G</h1>
            <h1 className='font-medium text-2xl sm:hidden'>MG</h1>
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
           <div className={opened?"flex flex-col justify-between": "hidden"}>
              <ul className='fixed  p-0 right-0 top-0  gap-3 flex flex-col shadow-xl overflow-hidden h-full w-5/6 max-w-sm py-6 px-6 bg-gray-100 border-r overflow-y-hidden'>
                <div className=" flex justify-between items-center pb-8">
                  <MdClose className='text-3xl text-[#1a1a1a]' onClick={()=>handleOpened()}/>
                </div>
                <Link href='/'>
                    <li className='cursor-pointer text-lg font-normal text-[#1a1a1a]' onClick={()=>handleOpened()}>Home</li>
                </Link>
                <Link href={'/about'}>
                  <li className='cursor-pointer text-lg font-normal text-[#1a1a1a]' onClick={()=>handleOpened()}>About</li>
                </Link>
                <Link href={'/work'}>
                  <li className='cursor-pointer text-lg font-normal text-[#1a1a1a]' onClick={()=>handleOpened()}>work</li>
                </Link>
                <Link href={'/writting'}>
                  <li className='cursor-pointer text-lg font-normal text-[#1a1a1a]' onClick={()=>handleOpened()}>writting</li>
                </Link>
                <Link href={'/contact'}>
                  <li className='cursor-pointer text-lg font-normal text-[#1a1a1a]' onClick={()=>handleOpened()}>contact</li>
                </Link>
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