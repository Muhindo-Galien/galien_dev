import '../styles/globals.css'

import Header from "../components/Header"
import { fetchExperience } from '../utils/fetchExperience'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials '
import { fetchWritting } from '../utils/fetchWrittings'
import { fetchYoutubes } from '../utils/fetchYoutubes'
import { setGlobalState } from '../store'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const experience = await fetchExperience()
  const pageInfo = await fetchPageInfo()
  const projects = await fetchProjects()
  const writting = await fetchWritting()
  const youtbes = await fetchYoutubes()
  const skills = await fetchSkills()
  
  return (
    <html>
      <head />
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
