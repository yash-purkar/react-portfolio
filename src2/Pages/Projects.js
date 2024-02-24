import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom/dist'
import { IoMdArrowBack } from 'react-icons/io'
import { ProjectsData } from '../Datas/ProjectsData'

export const Projects = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => navigate("/")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='w-full mx-auto bg-slate-950 h-full'>
      <div className='sticky w-full h-[70px] flex items-center justify-between  px-4 bg-slate-950 text-gray-300 top-0 left-0' >
        <div>
          <h1 className='text-[#87CEEB] font-bold lg:text-2xl'>Yash Purkar</h1>
        </div>
        <div>
          <button onClick={handleHomeClick} className='tracking-widest  lg:text-xl border-2 border-[#87ceeb] px-5 bg-slate-950 text-[#87CEEB] hover:bg-[#87ceeb] hover:text-slate-950 flex items-center'><IoMdArrowBack className='mr-2' />Home</button>
        </div>
        <div>
          <h2 className='text-[#87ceeb]  lg:text-2xl'>All Projects</h2>
        </div>
      </div>

      <div className=' max-w-[1000px] mx-auto h-full bg-slate-950  last:mb-0'>
        {
          ProjectsData?.map(({ name, img, description, link, sourceLink, technologies }, i) => {

            return (
              <div className={`${i % 2 === 0 ? "bg-[#0f172a]" : "bg-slate-950"} mx-5 p-5  flex flex-col md:flex-row items-center justify-around mt-12`}>
                {i % 2 === 0 && <div>
                  <img className='w-[350px] m-auto my-1 rounded-sm' src={img} alt="app-img" />
                </div>}
                <div className='flex flex-col items-center'>
                  <h3 className='text-[#87CEEB] text-lg md:text-[1.7rem] mb-3 text-center font-bold tracking-wider'>
                    {name}</h3>
                  <p className='mb-3 w-[88%] text-center text-[1.070rem] text-white'>{description}</p>
                  <div className='flex gap-4 mb-5'>
                    {
                      technologies?.map(tech => <span >
                        <img className='w-5 h-5 md:w-7 md:h-7' src={tech} alt={tech} />
                      </span>)
                    }

                  </div>

                  <div className='flex'>
                    <a href={link} target='_blank' rel="noreferrer" className='bg-[#87CEEB] border-2  border-slate-900 hover:bg-[#5ed0fe] text-slate-950 px-3 md:px-6 py-1 my-2 mr-3 flex items-center duration-200'>Live</a>

                    <a href={sourceLink} target='_blank' rel="noreferrer" className='bg-[#87CEEB] border-2  border-slate-900 hover:bg-[#5ed0fe] text-slate-950 px-3 md:px-6 py-1 my-2 mr-3 flex items-center duration-200'>Code</a>
                  </div>

                </div>
                {i % 2 !== 0 && <div>
                  <img className='w-[350px] m-auto my-1 rounded-sm' src={img} alt="app-img" />
                </div>}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
