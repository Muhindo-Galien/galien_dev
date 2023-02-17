import { ArticlesCover, BuildCoverImage} from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchBuildCoverImage= async()=>{
const query = groq`*[_type =="buildCover"][0]`
const buildCover: BuildCoverImage=  await sanityClient.fetch(query);
  // console.log("fetching buildCover",buildCover);
  
  return buildCover;
}

