import React, { use } from 'react'
import Card from '../../components/Card'
import { Project } from '../../typings'
import { fetchProjects } from '../../utils/fetchProjects'

const Work =async () => {
  const projects:Project[]  =await fetchProjects()

  return (
    <div className='max-w-3xl mx-auto pt-12'>
      <h1 className='text-center font-medium text-2xl mb-4 '>~Projects</h1>
      <p className='my-1 text-md lg:text-base text-center tracking-15 mx-2 sm:mx-0'>Some of the projects I have worked on!</p>
      <div className='grid grid-cols-1 md:grid-cols-3  gap-6 md:gap-4 lg:gap-3 py-10 mx-4 lg:mx-0'>
        {projects?.map((project)=>{
          return <Card project={project} key={project._id}/>
        })}
      </div>
  </div>)
}

export default Work