import { Experience } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";


export const fetchExperience = async()=>{
  const query = groq`
  *[_type =="experience"]{
    ...,
    technologies[]->,
  }
  `;
  const experience: Experience[] =  await sanityClient.fetch(query)
  // console.log("fetching experience",experience);
  
  return experience;
}

