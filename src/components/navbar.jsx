import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import '../index.css'

function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrolY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll',handleScroll)
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    }, [])
  return (
    <nav className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>

    <div className="navbar-wrapper">

       <div className="navbar-logo">
        Deweee
      </div> 
      <ul className="navbar-links">
        {/* Perhatikan to="#..." ini adalah tujuan linknya */}
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/projects" >Projects</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
      </ul>
    </div>
    </nav>
  )
}



export default Navbar