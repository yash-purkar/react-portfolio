import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false)
  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-slate-950 text-gray-300' >
      <div>
        <h1 className=''>Yash Purkar</h1>
      </div>

      {/* after md screen it will be flex */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <div onClick={() => setToggleNavbar(prev => !prev)} className='md:hidden z-10 cursor-pointer' >
        {
          !toggleNavbar ? <FaBars /> : <FaTimes />
        }
      </div>

      <ul className={`${!toggleNavbar ? "hidden" : "flex absolute top-0 left-0 w-full h-screen bg-slate-950 flex-col justify-center items-center"}`}>
        <li className='py-4 text-3xl'>Home</li>
        <li className='py-4 text-3xl'>About</li>
        <li className='py-4 text-3xl'>Skills</li>
        <li className='py-4 text-3xl'>Projects</li>
        <li className='py-4 text-3xl'>Contact</li>
      </ul>

    </div>
  )
}
