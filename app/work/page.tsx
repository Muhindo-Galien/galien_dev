import React, { useState } from 'react'
import Card from '../../components/Card'
import { Project } from '../../typings'
import { fetchProjects } from '../../utils/fetchProjects'

export const revalidate =20

const Work =async () => {
  const projects:Project[]  =await fetchProjects()
  const topNotchs:Project[]=[];
  const normalProjects:Project[]=[];
  for(let i=0; i< projects?.length; i++){
    if(projects[i]?.istopnotch== true){
      topNotchs.push(projects[i])
    }else{
      normalProjects.push(projects[i])
    }  
  }
  console.log(topNotchs.reverse());
  console.log(normalProjects.reverse());
  console.log("===================topNotchs======");
  console.log(topNotchs.length);
  console.log("===================normalProjects======");
  console.log(normalProjects.length);





  return (
    <div className='max-w-3xl mx-auto pt-12'>
      <h1 className='text-center font-medium text-2xl mb-4 '>~Projects</h1>
      <p className='my-1 text-md lg:text-base text-center tracking-15 mx-2 sm:mx-0'>Some of the projects I have worked on!</p>
      <h1 className="font-medium text-xl pt-2 ml-4 sm:ml-0">Top notch projects </h1>
      <div className='grid grid-cols-1 md:grid-cols-3  gap-6 md:gap-4 lg:gap-3  py-5 mx-4 lg:mx-0'>
        {topNotchs?.map((project)=>{
          return <Card project={project} key={project._id}/>
        })}
      </div>

      <h1 className="font-medium text-xl ml-4 sm:ml-0">Other projects </h1>
      <div className='grid grid-cols-1 md:grid-cols-3  gap-6 md:gap-4 lg:gap-3  pt-5 pb-10 mx-4 lg:mx-0'>
        {normalProjects?.map((project)=>{
          return <Card project={project} key={project._id}/>
        })}
      </div>
  </div>)
}

export default Work