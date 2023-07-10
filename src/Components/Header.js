import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import resume from '../assets/Frontend_Developer.pdf'

export const Header = () => {
  const [text] = useTypewriter({
    words: ['am a frontend developer.', 'love to code.', 'like to make projects.'],
    loop: {}
  })

  return (
    <div name="home" className='w-full  h-screen bg-slate-950'>
      <div className='max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full '>
        <h1 className='text-[#87CEEB]'>Hi, my name is</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Yash Purkar</h2>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I {text}
          <span><Cursor /></span>
        </h2>
        <p className='text-[#8892b0] py-4  max-w-[700px] '>An Aspiring Web Developer. I learn new things and make good projects.</p>
        <div className='flex gap-5 items-center'>
          <Link to="home-projects" smooth={true} duration={500}>
            <button className='group bg-[#87CEEB] border-2  border-[#87CEEB] text-slate-950 px-1 py-1 md:px-6 md:py-3 my-2 flex items-center duration-200'>
              View Projects
              <span className='ml-2 group-hover:rotate-90 duration-300'><HiArrowNarrowRight /></span>
            </button>
          </Link>
          <a href={resume} download={`yash_purkar_frontend_developer.pdf`} className='bg-[#87CEEB] border-2  border-[#87CEEB] text-slate-950 px-1 py-1 md:px-6 md:py-3 md:my-2 flex items-center duration-200'>
            Resume <FaDownload className='ml-1' />

          </a>
        </div>

      </div>

    </div>
  )
}
