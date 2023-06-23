import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'


export const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleClick = () => setToggleNavbar(false)
  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-slate-950 text-gray-300' >
      <div>
        <h1 className='text-[#87CEEB] font-bold text-2xl'>Yash Purkar</h1>
      </div>

      {/* after md screen it will be flex */}
      <ul className='hidden md:flex md:text-[1.1rem]'>
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="home-projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="blogs" smooth={true} duration={500}>
            Blogs
          </Link>
        </li>
        <li>
          <Link to="footer" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      <div onClick={() => setToggleNavbar(prev => !prev)} className='md:hidden z-10 cursor-pointer' >
        {
          !toggleNavbar ? <FaBars /> : <FaTimes />
        }
      </div>

      <ul className={`${!toggleNavbar ? "hidden" : "flex absolute top-0 left-0 w-full h-screen bg-slate-950 flex-col justify-center items-center"}`}>
        <li className='py-4 text-3xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className='py-4 text-3xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-4 text-3xl'>
          <Link onClick={handleClick} to="home-projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-4 text-3xl'>
          <Link to="blogs" smooth={true} duration={500}>
            Blogs
          </Link>
        </li>
        <li className='py-4 text-3xl'>
          <Link onClick={handleClick} to="footer" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

    </div>
  )
}
