import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle, AiFillHeart } from 'react-icons/ai'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


export const Footer = () => {
  const [text] = useTypewriter({
    words: ['Linkedin', 'GitHub', 'Twitter'],
    loop: {}
  })


  return (
    <div name="footer" className='w-full h-[150px] text-gray-300 bg-slate-950'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col items-center w-full  md:h-full'>

        <div>
          <h3 className='text-2xl'>Connect with me on <span className='text-[#87CEEB] '>{text}</span>
            <span><Cursor /></span>
          </h3>
        </div>

        <div className='flex gap-8 mt-3 text-3xl'>
          <span className=' text-3xl'><AiFillLinkedin className='text-blue-600' /></span>
          <span className='text-3xl'><AiFillGithub /></span>
          <span className='text-sky-400 text-3xl'><AiFillTwitterCircle /></span>
        </div>

        <p className='flex items-center mt-3'>made with <span className='text-red-600'> <AiFillHeart className='mx-2' /></span> by yash.</p>

      </div>
    </div>
  )
}
