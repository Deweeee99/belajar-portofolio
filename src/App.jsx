import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
 return (
  <div style={styles.mainBackground}>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
    </Routes>
    </Router>
    <Footer />
  
  </div>
 )

 
}

const styles = {
  mainBackground: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#ffffff', // Warna dasar putih
    
    // INI GRADASI BABY BLUE & SOFT PINK
    backgroundImage: `
      /* Baby Blue di Pojok Kiri Atas */
      radial-gradient(at 10% 10%, rgba(173, 216, 230, 0.4) 0%, transparent 60%),
      
      /* Soft Pink di Pojok Kanan Bawah */
      radial-gradient(at 90% 90%, rgba(255, 182, 193, 0.4) 0%, transparent 60%),
      
      /* Tambahan Pink Muda di Tengah biar manis */
      radial-gradient(at 50% 50%, rgba(255, 228, 225, 0.3) 0%, transparent 50%)
    `,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover'
  }
}

export default App
