import { Youtube } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity"


export const fetchYoutubes= async()=>{
  const query = groq`*[_type =="youtube"]`
  const youtubes: Youtube[] =  await sanityClient.fetch(query);  
  return youtubes;
}

