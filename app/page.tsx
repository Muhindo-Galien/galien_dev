import React from 'react'
import { setGlobalState } from '../store'
import { Experience } from '../typings'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials '
import { fetchWritting } from '../utils/fetchWrittings'
import { fetchYoutubes } from '../utils/fetchYoutubes'

const Homepage = async() => {
  const experience: Experience[] = await fetchExperience()
  const pageInfo = await fetchPageInfo()
  const projects = await fetchProjects()
  const writting = await fetchWritting()
  const youtbes = await fetchYoutubes()
  const skills = await fetchSkills()
  const socials = await fetchSocials()

  setGlobalState('experience',experience)
  // setGlobalState('pageInfo',pageInfo)
  // setGlobalState('writting',writting)
  // setGlobalState('youtube',youtbes)
  // setGlobalState('skills',skills)
  // setGlobalState('project',projects)
  // setGlobalState('socials',socials)
  
  return (
    <div>Homepage</div>
  )
}

export default Homepage