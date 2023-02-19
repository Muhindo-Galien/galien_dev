
import Image from 'next/image';
import { urlFor } from '../sanity';
import { ArticlesCover, BuildCoverImage } from '../typings';
import Link from 'next/link';
import ClientSideRoute from './ClientSideRoute';

type Props={
  buildCover:BuildCoverImage;
  writtingCover:ArticlesCover;
  
}

const ProjectWritting = ({writtingCover,buildCover}:Props) => {

  return (
    <div className='max-w-3xl mx-auto'>
       <h1 className='text-center font-medium text-2xl mb-4 pt-5'>~Work</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 pt-4 gap-4 mx-6 lg:mx-0 bg-[#20262E] py-2 px-4 rounded-md">
          <div className='flex flex-col justify-center'>
              <h1 className='font-medium text-2xl mb-4'>Builds</h1>
              <div className='w-full sm:w-4/5'>
                <Link href='/work'>
                <Image src={urlFor(buildCover?.buildCoverImage).url()} height={80} width={300} alt={'projects'} className='h-80 w-50 object-cover rounded-md'/>  
                  <button className='my-3 bg-[#1a1a1a] text-gray-50 py-2 px-3 lg:w-full w-[300px]  rounded-md font-normal text-lg capitalize'>Explore my work</button>
                </Link>     
              </div>
          </div>
          <div className='flex flex-col '>
            <h1 className='text-left font-medium text-2xl mb-4'>Articles</h1>
            <div className='w-full sm:w-4/5'>
                <Link href='/writting'>
                <Image src={urlFor(writtingCover?.writtingCoverImage).url()} alt={'projects'} height={80} width={300}  className='h-80 w-50 object-cover rounded-md cursor-pointer'/>       
                  <button  className='my-3 bg-[#1a1a1a] text-gray-50 py-2 px-3 lg:w-full w-[300px] rounded-md font-normal text-lg capitalize'>Explore my Articles</button>
                </Link>
              </div>
          </div>
       </div>
    </div>
  )
}

export default ProjectWritting