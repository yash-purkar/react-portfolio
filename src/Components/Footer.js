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
          <h3 className='text-xl lg:text-2xl'>Feel free to connect on <span className='text-[#87CEEB] '>{text}</span>
            <span><Cursor /></span>
          </h3>
        </div>

        <ul className='flex gap-8 mt-3 text-3xl list-none'>
          <li className=' text-3xl'>
            <a href="https://www.linkedin.com/in/yash-purkar-32a67925a/" target='_blank' rel="noreferrer"><AiFillLinkedin className='text-blue-600' />
            </a>
          </li>

          <li className='text-3xl'>
            <a href="https://github.com/yash-purkar" target='_blank' rel="noreferrer"><AiFillGithub /></a>
          </li>

          <li className='text-sky-400 text-3xl'>
            <a href="https://twitter.com/yashpurkar14" target='_blank' rel="noreferrer">
              <AiFillTwitterCircle />
            </a>
          </li>
        </ul>

        <p className='flex items-center mt-3'>made with <span className='text-red-600'> <AiFillHeart className='mx-1' /></span> by yash</p>

      </div>
    </div>
  )
}
