import { Project } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchProjects = async()=>{
  const query = groq`
*[_type =="project"]{
  ...,
  technologies[]->
}
`;
const projects: Project[] =  await sanityClient.fetch(query);
// console.log('projects',projects)
  return projects;
}

