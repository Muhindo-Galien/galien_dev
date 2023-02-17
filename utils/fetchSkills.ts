import { Skill } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { setGlobalState } from "../store";

export const fetchSkills = async()=>{
const query = groq`*[_type =="skill"]`
const skills: Skill[] =  await sanityClient.fetch(query);
  // console.log("fetching Skills",skills);
  
  return skills;
}

