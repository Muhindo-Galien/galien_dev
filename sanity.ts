import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
// import {client} from ''
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string

export const config =({
  dataset,
  projectId,
  apiVersion: '2021-08-31',
  useCdn: true
})

export const sanityClient = createClient(config);

export const urlFor = (source:any)=>
imageUrlBuilder(sanityClient).image(source)
