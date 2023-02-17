import React from 'react'

const Skills = () => {
  return (
    <div className='max-w-3xl mx-auto'>
      <h1 className='text-center font-medium text-2xl mb-4 '>~Skills</h1>
      <p className='my-1 text-md lg:text-base text-center tracking-15 mx-2 sm:mx-0'>The skills I use to deliver products with a great user experience.</p>
      <div className="flex flex-col sm:flex-row justify-between my-6 gap-4 mx-6 lg:mx-0">
        <div className='flex flex-col justify-center w-full sm:w-3/6 '>
          <h1 className='font-medium text-2xl mb-4'>Engineering</h1>
          <p>As far as building scalable and performant apps is concerned, I am proficient</p>
          <div className='pl-4'>  
              <div className='flex '>
                <span className='mx-2 w-4 h-2  text-base border bg-gray-200 mt-2 px-3 text-center text-gray-200 font-extralight'></span><p className='font-light text-base'> Expertly utilizing HTML, CSS, Tailwind, Bootstrap, and Ant Design to create stunning and well-structured markups</p>
              </div>
              <div className='flex '>
                <span className='mx-2 w-4 h-2  text-base border bg-gray-200 mt-2 px-3 text-center text-gray-200 font-extralight'></span><p className='font-light text-base'> Developing production-ready apps with frameworks and libraries like NextJs, ReactJs,AngularJs,React Native</p>
              </div>
              <div className='flex '>
                <span className='mx-2 w-4 h-2  text-base border bg-gray-200 mt-2 px-3 text-center text-gray-200 font-extralight'></span><p className='font-light text-base'> Building Decentralised Applications (DApps) using Web3.js, Ethers.js,Hardhat ,Truffle.js, Ganache,solona, Solidity;</p>
              </div>
              <div className='flex '>
                <span className='mx-2 w-4 h-2  text-base border bg-gray-200 mt-2 px-3 text-center text-gray-200 font-extralight'></span><p className='font-light text-base'> Proficient in utilizing Node.js,Express.js and  Django for efficient server-side development.</p>
              </div>
              <div className='flex '>
                <span className='mx-2 w-4 h-2  text-base border bg-gray-200 mt-2 px-3 text-center text-gray-200 font-extralight'></span><p className='font-light text-base'> Proficient in utilizing AWS for database services</p>
              </div>
              <div className='flex '>
                <span className='mx-2 w-4 h-2  text-base border bg-gray-200 mt-2 px-3 text-center text-gray-200 font-extralight'></span><p className='font-light text-base'> Coordinating work using Git, Github, Gitlab;</p>
              </div>
          </div>
        </div>
        <div className='flex flex-col w-full sm:w-3/6'>
         <h1 className='text-left font-medium text-2xl mb-4'>Soft Skills</h1>
          <div className='pl-0'>  
              <div className='flex '>
                <span className='mx-2 w-4 h-2  text-base border bg-gray-200 mt-2 px-3 text-center text-gray-200 font-extralight'></span><p className='font-light text-base'> I convey my ideas in English or French, written and spoken fluently;</p>
              </div>
                <div className='flex '>
                  <span className='mx-2  w-4 h-2 text-base border bg-gray-200 mt-2 px-3 text-center text-gray-200 font-extralight'></span><p className='font-light text-base'>Mentor and collaborate with team members;</p>
                </div>
                <div className='flex '>
                  <span className='mx-2  w-4 h-2  text-base border bg-gray-200 mt-2 px-3 text-center text-gray-200 font-extralight'></span><p className='font-light text-base'>Use my time wisely to deliver tasks as fast as possible;</p>
                </div>         
                <div className='flex '>
                  <span className='mx-2  w-4 h-2  text-base border bg-gray-200 mt-2 px-3 text-center text-gray-200 font-extralight'></span><p className='font-light text-base'>Embrace change and adjust quickly</p>
                </div>
          </div>
            </div>
      </div>
    </div>
  )
}

export default Skills