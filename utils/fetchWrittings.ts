import { Writting } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity"

export const fetchWritting = async()=>{
const query = groq`*[_type =="writting"]`
const writtings: Writting[] =  await sanityClient.fetch(query);
  return writtings;
}

