import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { PageInfo, Social } from '../typings';
import { urlFor } from '../sanity';

type MyComponentProps= {
  pageInfo: PageInfo;
  socials:Social[]
}

const Banner = ({pageInfo,socials}: MyComponentProps) => {
  return (
    <div className='max-w-3xl mx-auto '>
      <div className="mx-4  lg:mx-0  sm:py-20 flex items-center flex-col sm:flex-row justify-between">
          <div className='w-full sm:w-4/6 flex flex-col justify-center'>
            <h2 className='font-normal text-2xl my-4 sm:my-1'>Hi, I am</h2>
            <h1 className='font-medium sm:font-medium text-3xl sm:text-3xl sm:mt-1'>{pageInfo?.name}</h1>
            <h1 className='font-normal text-2xl my-4 sm:my-1'>{pageInfo?.role}</h1>
            <p className='my-1 text-md lg:text-base  tracking-15'>{pageInfo?.heroDescription}</p>
          </div>
          <div className='2/6 flex flex-col gap-4 justify-center items-center py-10 sm:py-0'>
            <Image className='rounded-full border-8 border-[#20262E]' src={urlFor(pageInfo?.heroImage).url()} width={180} height={180} alt='profile'/>
            <div className='flex gap-4 sm:gap-3 justify-center items-center py-4 sm:py-0'>
              {socials?.map((social)=>(
                  <SocialIcon key={social._id} url={social.url} fgColor='white' bgColor='transparent' target={'_blank'} style={{ height: 35, width: 35 }} className='border rounded-full'/>
              ))}
            </div>
          </div>
     
      </div>
    </div>
  )
}

export default Banner