import { Youtube } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity"
import { setGlobalState } from "../store";


 const fetchYoutubes= async()=>{
  const query = groq`*[_type =="youtube"]`
  const youtubes: Youtube[] =  await sanityClient.fetch(query);  
  setGlobalState('youtubes',youtubes)
  return youtubes;
}
export {
  fetchYoutubes
}

