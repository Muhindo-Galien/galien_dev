import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Social } from '../typings'

type Props= {
  socials:Social[]
}
const Connectors = ({socials}:Props) => {
  return (
    <div className='pb-6'>
        <h1 className='text-center pt-4 pb-2 font-normal text-lg '>Let's connect on</h1>
        <div className='flex gap-4 sm:gap-3 justify-center items-center py-4 sm:py-0'>
        {socials?.map((social)=>(
                  <SocialIcon key={social._id} url={social.url} fgColor='white' bgColor='transparent' target={'_blank'} style={{ height: 35, width: 35 }} className='border rounded-full'/>
              ))}
        </div>
      </div>
  )
}

export default Connectors