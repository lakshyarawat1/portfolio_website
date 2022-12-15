import React from 'react';
import './index.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Misc from './components/Misc'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'

function App(){
  return(
    <>
    <div>
      <Sidebar />
      <Hero />
      <About />
      <Projects />
      <Misc />
      <Contact />
    </div>
    </>
  )
}

export default App
