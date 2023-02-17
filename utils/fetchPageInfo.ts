import { PageInfo } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { setGlobalState } from "../store";

export const fetchPageInfo = async()=>{
  const query = groq`
*[_type =="pageInfo"]
`;
const pageInfo: PageInfo[] =  await sanityClient.fetch(query);
setGlobalState('pageInfo',pageInfo)
 // console.log("fetching pageInfo",pageInfo);
  
  return pageInfo;
}

