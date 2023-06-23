import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


export const Home = () => {
  const [text] = useTypewriter({
    words: ['am a frontend developer.', 'love to code.', 'like to make projects.'],
    loop: {}
  })

  return (
    <div name="home" className='w-full h-screen bg-slate-950'>
      <div className='max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full '>
        <h1 className='text-[#87CEEB]'>Hi, my name is</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Yash Purkar</h2>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I {text}
          <span><Cursor /></span>
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, enim. Odit inventore nemo voluptatum eius dolorum sapiente laudantium nisi veritatis perspiciatis beatae.</p>
        <div>
          <Link to="home-projects" smooth={true} duration={500}>
            <button className='group bg-[#87CEEB] border-2  border-[#87CEEB] text-slate-950 px-6 py-3 my-2 flex items-center duration-200'>
              View Projects
              <span className='ml-2 group-hover:rotate-90 duration-300'><HiArrowNarrowRight /></span>
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}
