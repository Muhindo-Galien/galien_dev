import React from 'react'
import Banner from '../components/Banner'
import HomeContact from '../components/HomeContact'
import LadndingPage from '../components/LadndingPage'
import ProjectWritting from '../components/ProjectWritting'
import Skills from '../components/Skills'
import SmallAbout from '../components/SmallAbout'
import { ArticlesCover, BuildCoverImage, PageInfo, Social } from '../typings'
import { fetchBuildCoverImage } from '../utils/fetchBuildCoverImage'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchSocials } from '../utils/fetchSocials '
import { fetchWrittingCover } from '../utils/fetchWrittingCover'

export const revalidate =20

const Homepage =async () => {  
  const pageInfo:PageInfo = await fetchPageInfo()
  const socials:Social[] =  await fetchSocials()
  const buildCover:BuildCoverImage = await fetchBuildCoverImage()
  const writtingCover:ArticlesCover = await fetchWrittingCover()

  return (
    <>
     <Banner pageInfo={pageInfo} socials={socials}/>
     <SmallAbout pageInfo={pageInfo}/>
    <Skills pageInfo={pageInfo}/>
    <ProjectWritting buildCover={buildCover} writtingCover={writtingCover}/>
    <HomeContact socials={socials}/>
      </>
  )
}

export default Homepage