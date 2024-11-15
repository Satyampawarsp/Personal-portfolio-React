import React from 'react'
import './HomePage.module.css'
import Navbar from '../../components/navbar/Navbar'
import Home from '../../components/home/Home'
import Project from '../../components/project/Project'
import About from '../../components/about/About'
import Skills from '../../components/skills/Skills'
import Contact from '../../components/contact/Contact'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default HomePage
