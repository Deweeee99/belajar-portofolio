import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Footer from './components/footer'
 

function App() {
 return (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Footer />
  
  </div>
 )
}

export default App
