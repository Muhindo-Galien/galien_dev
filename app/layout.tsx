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
import { fetchBuildCoverImage } from '../utils/fetchBuildCoverImage'
import { fetchWrittingCover } from '../utils/fetchWrittingCover'
import Banner from '../components/Banner'
import { ArticlesCover, BuildCoverImage, PageInfo, Social } from '../typings'
import SmallAbout from '../components/SmallAbout'
import Skills from '../components/Skills'
import HomeContact from '../components/HomeContact'
import ProjectWritting from '../components/ProjectWritting'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const experience = await fetchExperience()
  const pageInfo:PageInfo = await fetchPageInfo()
  const projects = await fetchProjects()
  const writting = await fetchWritting()
  const youtubes = await fetchYoutubes()
  const skills = await fetchSkills()
  const buildCover:BuildCoverImage = await fetchBuildCoverImage()
  const writtingCover:ArticlesCover = await fetchWrittingCover()
  const socials:Social[] =  await fetchSocials()
  return (
    <html>
      <head />
      <body>
        <Header/>
        <Banner pageInfo={pageInfo} socials={socials}/>
        <SmallAbout pageInfo={pageInfo}/>
        <Skills/>
        <ProjectWritting buildCover={buildCover} writtingCover={writtingCover}/>
        <HomeContact socials={socials}/>
        {children}
      </body>
    </html>
  )
}
