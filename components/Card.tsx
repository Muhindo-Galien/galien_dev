import React from 'react'
import { MdOpenInNew } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props={
  project: Project
}

const Card = ({project}:Props) => {
  console.log( 'project',urlFor(project?.image).url());
  
  return (
      <div className='rounded-md  shadow-sm font-globalFont bg-[#1a1a1a] cursor-pointer border border-gray-600' >
          <img className='rounded-tl-md rounded-tr-md h-80 sm:h-48 w-full object-cover' src={urlFor(project?.image).url() } alt="project" />
          <div className="px-4 pt-2">
              {project?.technologies.map((tech)=>{
                return <span className='text-blue-400 mr-1 overflow-x-hidden' key={tech?._id}>#{tech?.title}</span>
              })}  
            </div>
          <div className='flex items-center justify-between px-4 pt-2 text-gray-100 rounded-md w-full ' >
            <h2 className='text-lg font-medium'>Mundo </h2>
            <div className='flex gap-4'>
              <a href={project?.linkToGitHub} target="_blank">
                <FaGithub className='text-xl'/>
              </a>
              <a href={project?.linkToBuildLive} target="_blank">
                <MdOpenInNew className='text-xl'/>
              </a>
            </div>
          </div>
          <p className='text-gray-300 px-4 pb-4 pt-2 font-light'>{(project?.summary).slice(0,80)}</p>
        </div>

  )
}

export default Card