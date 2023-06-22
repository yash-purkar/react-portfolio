import React from 'react'
import img from '../assets/devv.svg'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Github from '../assets/github.png'

export const AboutSkills = () => {
  return (
    <div name="about" className='bg-white  text-slate-900 w-full min-h-fit md:h-screen'>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col lg:flex-row items-center justify-around    lg:h-full '>

        <div className='mr-24'>
          <h2 className='mb-10 text-4xl font-bold'>Something about <span className='text-[#87ceeb]'>me</span> and my <span className='text-[#87ceeb]'>skills</span></h2>
          <p className='w-96 text-lg  mb-8 font-mono text-gray-500'>Hello I'm Yash, Student Of Computer Application Learning Full Stack Web Devlopement. I Love Exchanging Ideas And Spreading Knowledge And Positivity.</p>
          <img src={img} alt="" className='w-[250px] md:w-[300px]' />
        </div>

        <div className='font-mono mt-3 md:mt-0 text-gray-500 '>
          <div className="flex flex-col  my-5 px-5 py-3 bg-gray-100 rounded-lg">
            <span ><img src={HTML} alt="" className='w-8 h-8' /></span>
            <p> <span className='text-orange-600 font-bold'>HTML :</span> I have good knowledge of HTML especially making Structure of Pages.</p>
          </div>
          <div className="flex flex-col  my-5 px-5 py-3 bg-gray-100 rounded-lg">
            <span ><img src={CSS} alt="" className='w-8 h-8' /></span>
            <p> <span className='text-sky-500 font-bold'>CSS :</span> I've been learning CSS for the past few months and now have a strong ability to design visually appealing website layouts.</p>
          </div>
          <div className="flex flex-col  my-5 px-5 py-3 bg-gray-100 rounded-lg">
            <span ><img src={JS} alt="" className='w-8 h-8' /></span>
            <p> <span className='text-yellow-400 font-bold'>JavaScript :</span> Exploring JavaScript's dynamic potential, learning for months, enhancing functionality and interactivity.</p>
          </div>

          <div className="flex flex-col  my-5 px-5 py-3 bg-gray-100 rounded-lg">
            <span ><img src={ReactImg} alt="" className='w-8 h-8' /></span>
            <p> <span className='text-sky-400 font-bold'>ReactJs :</span> Learning its powerful features to create engaging and interactive web applications.</p>
          </div>
          <div className="flex flex-col  my-5 px-5 py-3 bg-gray-100 rounded-lg">
            <span className='bg-black w-fit rounded-xl' ><img src={Github} alt="" className='w-8 h-8' /></span>
            <p> <span className='text-black font-bold'>Github :</span> Exploring its collaborative features for effective version control and project management.</p>
          </div>
        </div>

      </div>

    </div>
  )
}
