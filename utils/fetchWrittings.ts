import { Writting } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity"
import { setGlobalState } from "../store";

export const fetchWritting = async()=>{
const query = groq`*[_type =="writting"]`
const writtings: Writting[] =  await sanityClient.fetch(query);
setGlobalState('writting',writtings)


  
  return writtings;
}

