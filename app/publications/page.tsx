import React from 'react'

import { FaYoutube } from 'react-icons/fa';
import { Writting, Youtube } from '../../typings';
import { fetchWritting } from '../../utils/fetchWrittings';
import { fetchYoutubes } from '../../utils/fetchYoutubes';

export const revalidate =20

const Publications =async () => {
  const writtings:Writting[] = await fetchWritting()
  const youtubes:Youtube[]= await fetchYoutubes()

  return (
    <div className='max-w-3xl mx-auto'>
    <div className="grid grid-cols-1 sm:grid-cols-2 pt-4 gap-4 mx-4  lg:mx-0 py-2 rounded-md">
      <div>
        <h1 className='text-left font-medium text-2xl mb-2 sm:mb-4 pt-6 sm:pt-16 capitalize'>Articles</h1>
        <div className="flex flex-col gap-4">
          {(writtings?.reverse())?.map((article)=>{
            return(
                <a key={article._id} href={article?.url} target={'_blank'} className='underline'>{article.title}</a>
            )
          })}
        </div>
      </div>
      <div>
        <h1 className='text-left font-medium text-2xl mb-2 sm:mb-4 pt-6 sm:pt-16 capitalize'>Youtube Tutorials</h1>
        <div className="flex flex-col">
          {youtubes?.map((tuto)=>{
            return(
                <a key={tuto._id} href={tuto?.url} target={'_blank'} className='underline flex'><span><FaYoutube className='mr-1 mt-0.5 text-xl'/> </span>{tuto.title}</a>
            )
          })}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Publications