import { type } from 'os'
import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { Experience } from '../typings'

type Props = {
  experience: Experience[]
}

const Experience = ({experience}:Props) => {
  return (
    <section className="education mx-6 lg:mx-0 my-2">
    <h1 className="font-medium text-xl">Experience</h1>
      <div className="box-container py-4 sm:w-5/6">
        {experience?.map((item)=>{
          return(
          <div className="box" key={item._id}>
              <FaGraduationCap className='gradIcon'/>
              <div className='flex flex-col sm:flex-row justify-start sm:justify-between '>
                <h3  className='py-1 ftext-center font-medium text-lg'>{item?.jobTitle} </h3>
              <span className='py-1 ftext-center font-normal text-base'>{new Date(item?.dateStarted).toDateString()} - {item?.dateEnd?new Date(item.dateEnd).toDateString():"Present"}</span>
              </div>
                <h3  className='py-1 ftext-center font-normal text-base'>{item?.companyName}</h3>
              <div className='text-gray-100 font-light text-base'>{item?.points} <p className='font-normal mt-2'>Technologies: {item?.technologies.map((tech)=>(<span key={tech._id}>#{tech?.title},</span>))} </p></div>
          </div>
          )
        })}

      </div>
  </section>
  )
}

export default Experience