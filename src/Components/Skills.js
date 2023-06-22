import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import TailwindImg from '../assets/tailwind.png'
import Github from '../assets/github.png'

export const Skills = () => {
  return (
    <div name="skills" className='bg-slate-950  text-gray-300 w-full h-screen'>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#87CEEB]'>Skills</p>
            <p className='py-4'>Few technologies I've been working with recently</p>
          </div>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center'>
          <div>
            <img className='w-20 mx-auto' src={HTML} alt="HTML ICON" />
            <p className='my-4'>HTML</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={CSS} alt="CSS ICON" />
            <p className='my-4'>CSS</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={JS} alt="JS ICON" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={ReactImg} alt="REACT ICON" />
            <p className='my-4'>React Js</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={TailwindImg} alt="TAILWIND ICON" />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div>
            <img className='w-20 mx-auto' src={Github} alt="HTML ICON" />
            <p className='my-4'>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  )
}
