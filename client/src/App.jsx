import './App.css'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Education from './components/Education'
import Hero from './components/Hero'
import HireBanner from './components/HireBanner'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Works from './components/Works'

function App() {

  return (
    <div className="App cursor-none">
      <Cursor />
      <Hero />
      <Home />
      <Education />
      <Skills />
      <Works />
      <HireBanner /> 
      <Contact />
    </div>
  )
}

export default App
