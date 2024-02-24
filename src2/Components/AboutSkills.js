import React from 'react'
import img from '../assets/devv.svg'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import TailwindImg from '../assets/tailwind.png'
import Github from '../assets/github.png'

export const AboutSkills = () => {
  return (
    <div name="about" className='bg-white  text-slate-900 w-full min-h-fit lg:h-screen'>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center lg:flex-row items-center  lg:justify-around lg:h-full '>

        <div className='lg:mr-24 text-center'>
          <h2 className='mb-10 text-4xl px-2 font-bold'>Something about <span className='text-[#87ceeb]'>me</span> and my <span className='text-[#87ceeb]'>skills</span></h2>
          <p className='sm:w-96 mx-auto text-lg  mb-8  text-slate-900 px-8'>Hello I'm Yash, Student Of Computer Application Learning Full Stack Web Devlopement. I Love Exchanging Ideas And Spreading Knowledge And Positivity.</p>
          <img src={img} alt="" className='w-[250px] md:w-[300px] mx-auto' />
        </div>

        <div className=' mt-3 md:mt-0 text-slate-900 '>
          <div className="flex items-center gap-5  my-6 lg:mt-16 px-5 py-2 bg-gray-100 rounded-lg">
            <span ><img src={HTML} alt="" className='w-14 h-8' /></span>
            <p> <span className='text-orange-600 font-bold'>HTML :</span> I have good knowledge of HTML especially making Structure of Pages.</p>
          </div>
          <div className="flex items-center gap-5  my-6 px-5 py-2 bg-gray-100 rounded-lg">
            <span ><img src={CSS} alt="" className='w-14 h-8' /></span>
            <p> <span className='text-sky-500 font-bold'>CSS :</span> After months of dedicated learning, I can create visually appealing website layouts.</p>
          </div>
          <div className="flex items-center gap-5  my-6 px-5 py-2 bg-gray-100 rounded-lg">
            <span ><img src={JS} alt="" className='w-14 h-8' /></span>
            <p> <span className='text-yellow-400 font-bold'>JavaScript :</span> Exploring JavaScript's dynamic potential, months of learning for enhanced functionality and interactivity..</p>
          </div>

          <div className="flex items-center gap-5  my-6 px-5 py-2 bg-gray-100 rounded-lg">
            <span ><img src={ReactImg} alt="" className='w-14 h-8' /></span>
            <p> <span className='text-sky-400 font-bold'>ReactJs :</span> Learning its powerful features to create engaging and interactive web applications.</p>
          </div>
          <div className="flex items-center gap-5  my-6 px-5 py-2 bg-gray-100 rounded-lg">
            <span ><img src={TailwindImg} alt="" className='w-14 h-8' /></span>
            <p> <span className='text-[#44a8b3] font-bold'>Tailwind CSS :</span> Makes it easy to create responsive layouts using its built-in responsive classes</p>
          </div>
          <div className="flex items-center gap-5  my-6 px-5 py-2 bg-gray-100 rounded-lg">
            <span className='bg-black w-fit rounded-xl' ><img src={Github} alt="" className='w-14 h-8' /></span>
            <p> <span className='text-black font-bold'>Github :</span> Exploring its collaborative features for effective version control and project management.</p>
          </div>
        </div>

      </div>

    </div>
  )
}
