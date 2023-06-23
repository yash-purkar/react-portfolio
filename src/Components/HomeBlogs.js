import React from 'react'
import { BlogsData } from '../Datas/BlogsData'

export const HomeBlogs = () => {
  return (
    <div name="blogs" className='w-full md:h-screen text-slate-950 bg-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  items-center w-full  h-full'>
        <div className='pb-8 self-start '>
          <p className='text-4xl font-bold inline border-b-4 border-slate-950'>Blogs</p>
          <p className='py-6'>Check out some of my blogs</p>
        </div>

        {/* blog container */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

          {/* blog card */}
          {
            BlogsData?.map(({ name, img, link }) => (
              <div key={name} className='shadow-md rounded-md p-5'>
                <img className='w-[300px] h-[150px]' src={img} alt="blog-img" />
                <div>
                  <h3 className='text-lg font-bold my-2'>{name}</h3>
                </div>
                <a href={link} target='_blank' rel="noreferrer" className='w-fit  bg-[#87CEEB] border-2 hover:bg-[#5ed0fe] text-slate-950 px-3 md:px-6 py-1 my-2 mr-3 flex items-center duration-200'>Read</a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
