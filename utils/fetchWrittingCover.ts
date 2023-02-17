import { ArticlesCover } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchWrittingCover = async()=>{
const query = groq`*[_type =="writtingCover"][0]`
const writtingCover: ArticlesCover=  await sanityClient.fetch(query);
  console.log("fetching writtingCover",writtingCover);
  
  return writtingCover;
}

