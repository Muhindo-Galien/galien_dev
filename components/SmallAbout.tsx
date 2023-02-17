import React from 'react'
import { PageInfo } from '../typings';
import Education from './Education';

type MyComponentProps= {
  pageInfo: PageInfo;
}

const SmallAbout = ({pageInfo}: MyComponentProps) => {
  // console.log("SmallAbout",pageInfo);
  
  return (
    <div className='max-w-3xl mx-auto'>
      <h1 className='text-center font-medium text-2xl mb-4 '>~About Me</h1>
      <p className='mx-6 lg:mx-0'>{pageInfo?.homebackground}
          </p>
      <Education/>
    </div>
  )
}

export default SmallAbout