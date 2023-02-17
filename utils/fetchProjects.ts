import { Project } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { setGlobalState } from "../store";

export const fetchProjects = async()=>{
  const query = groq`
*[_type =="project"]{
  ...,
  technologies[]->
}
`;
const projects: Project[] =  await sanityClient.fetch(query);
setGlobalState('projects',projects)
  return projects;
}

