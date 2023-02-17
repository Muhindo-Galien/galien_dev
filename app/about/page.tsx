import React from 'react'
import Connectors from '../../components/Connectors'
import Education from '../../components/Education'
import ExperienceComponent from '../../components/Experience'
import { Experience, PageInfo, Social } from '../../typings'
import { fetchExperience } from '../../utils/fetchExperience'
import { fetchPageInfo } from '../../utils/fetchPageInfo'
import { fetchSocials } from '../../utils/fetchSocials '

export const revalidate =20

const About = async() => {
  const experience: Experience[] = await fetchExperience()
  const pageInfo:PageInfo= await fetchPageInfo()
  const socials:Social[] = await fetchSocials()

  
  return (
    <div className='max-w-3xl mx-auto'>
      <div className='mx-6 lg:mx-0'>
        <h1 className='text-left font-medium text-2xl mb-4 pt-6 sm:pt-16 capitalize'>About Me</h1>
        <p >{pageInfo?.backgroundInformation}
          </p>
          <Education/>
          <ExperienceComponent experience={experience}/>
      </div>
      <Connectors socials={socials}/>
    </div>
  )
}

export default About
