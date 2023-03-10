import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const config =({
  dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-08-31',
  useCdn: true
})

export const sanityClient = createClient(config);

export const urlFor = (source:any)=>
imageUrlBuilder(sanityClient).image(source)
