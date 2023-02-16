import { Social } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity"

export const fetchSocials = async()=>{
  const query = groq`*[_type =="social"]`
  const socials: Social[] =  await sanityClient.fetch(query);
  // console.log("fetching socials",socials);
  
  return socials;
}

