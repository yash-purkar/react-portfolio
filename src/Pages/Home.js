import React, { useEffect } from 'react'
import { Navbar } from '../Components/Navbar'
import { Header } from '../Components/Header'
import { AboutSkills } from '../Components/AboutSkills'
import { HomeProjects } from '../Components/HomeProjects'
import { HomeBlogs } from '../Components/HomeBlogs'
import { Footer } from '../Components/Footer'

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Navbar />
      <Header />
      <AboutSkills />
      <HomeProjects />
      <HomeBlogs />
      <Footer />
    </>
  )
}
