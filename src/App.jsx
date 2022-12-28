import { useState, useEffect } from 'react'
import Education from './components/Education'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import { useContext } from 'react'
import {NavContext} from "./context/NavContextProvider"
import Projects from './components/Projects'


function App() {
const {showNav, setShowNav} = useContext(NavContext)

const transitionNavBar = () => {
  if(window.scrollY > 100){
    setShowNav(true)
  }else{
    setShowNav(false)
  }
}
useEffect(() => {
  window.addEventListener("scroll",transitionNavBar)
  return () => {
    window.removeEventListener("scroll",transitionNavBar)
  }

}, [])
console.log(window.innerWidth)
  return (
    <div className='bg-[#ffffff] h-screen overflow-x-hidden max-w-screen scroll-smooth snap-y snap-mandatory'>
      {/* Navbar */}

     <section>
      <Navbar />
     </section>
     {/* Hero section */}
     <section className='snap-start'>
      <Hero />
     </section>
     {/* Education */}
     <section className='snap-center snap-mandatory' id='education'>
      <Education />
     </section>
     {/* Skills */}
     <section className='snap-end' id='skills'>
      <Skills />
     </section>
     {/* Projects */}
     <section id='projects' className='snap-center'>
      <Projects />
     </section>
    </div>
  )
}

export default App
