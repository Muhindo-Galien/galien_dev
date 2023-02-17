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
  const res= ( await sanityClient.fetch(query))
  const experience: Experience[] = await res

  // console.log("fetching experience",experience);
  return experience;
}

