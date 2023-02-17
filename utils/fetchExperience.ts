import { Experience } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { use } from "react";
import { setGlobalState } from "../store";


export const fetchExperience = async()=>{
  const query = groq`
  *[_type =="experience"]{
    ...,
    technologies[]->,
  }
  `;
  const res= ( await sanityClient.fetch(query))
  const experience: Experience[] = await res
  setGlobalState('experience',experience)
  // console.log("fetching experience",experience);
  return experience;
}

