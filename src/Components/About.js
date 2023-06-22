import React from 'react'

export const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-slate-950 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#87CEEB]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div>

          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi all, I'm Yash 👋</p>
            </div>
            <div>
              <p>
                A passionate Frontend Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs and some other cool libraries and frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
