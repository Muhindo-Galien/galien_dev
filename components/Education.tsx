import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'


const Education = () => {
  return (
        <section className="education mx-4  lg:mx-0 my-2">
          <h1 className="font-medium text-xl">Education </h1>
            <div className="box-container pt-4 sm:w-5/6">
                <div className="box">
                    <FaGraduationCap className='gradIcon'/>
                    <div className='flex flex-col sm:flex-row justify-start sm:justify-between '>
                      <h3  className='py-1 ftext-center font-medium text-lg'>Bachelor's Degree in CS </h3>
                    <span className='py-1 ftext-center font-normal text-base'>2020-Jan - 2022-Nov</span>
                    </div>
                      <h3  className='py-1 ftext-center font-normal text-base'> Internation University of East Africa </h3>
                    <p className='text-gray-100 font-light text-base'>Acquired skills in Bachelor of Computer Science encompass Data Structures & Algorithms, Computational Theory, Computer Organization, Artificial Intelligence, Human-Computer Interaction, Social Computing, Web & App Development.</p>
                </div>   
                </div>
        </section>  
   
  )
}

export default Education