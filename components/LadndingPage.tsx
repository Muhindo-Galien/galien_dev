
import React, { use } from 'react'
import { ArticlesCover, BuildCoverImage, PageInfo, Social, } from "../typings";
import { fetchBuildCoverImage } from '../utils/fetchBuildCoverImage';
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSocials } from "../utils/fetchSocials ";
import { fetchWrittingCover } from '../utils/fetchWrittingCover';
import Banner from './Banner';

import HomeContact from './HomeContact';
import ProjectWritting from './ProjectWritting';
import Skills from './Skills';
import SmallAbout from './SmallAbout';


const LadndingPage = async() => {

  const pageInfo:PageInfo= await fetchPageInfo()
  const socials:Social[] = await fetchSocials()
  const writtingCover:ArticlesCover = await fetchWrittingCover()
  const buildCover:BuildCoverImage = await fetchBuildCoverImage()
  
  return (
    <>
      
    </>
  )
}

export default LadndingPage