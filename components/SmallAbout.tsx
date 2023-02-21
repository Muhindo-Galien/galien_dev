import React from 'react'
import { Experience, PageInfo } from '../typings';
import ExperienceComponent from './Experience';

type MyComponentProps= {
  pageInfo: PageInfo;
  experience:Experience[];
}
const SmallAbout = ({pageInfo,experience}: MyComponentProps) => {
  return (
    <div className='max-w-3xl mx-auto'>
      <h1 className='text-center font-medium text-2xl mb-4 '>~About Me</h1>
      <p className='mx-6 lg:mx-0 mb-4'>{pageInfo?.homebackground}
          </p>
          <ExperienceComponent experience={experience}/>
    </div>
  )
}

export default SmallAbout