// src/components/Hero.jsx
import React from 'react'
import fotoProfil from '../assets/profil.jpeg' 
import reactLogo from '../assets/react-logo.png' 
import laravelLogo from '../assets/logo-laravel.png' 
import githubLogo from '../assets/github-logo.png' 
import instagramLogo from '../assets/instagram-logo.png' 
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section id="home" style={styles.heroSection}>

        <div className="hero-container">
             <div style={styles.leftCol}>
            <div style={styles.imageWrapper}>
                <img 
                  src={fotoProfil} 
                  alt="Foto Profil" 
                  style={styles.image} 
                />
                <img 
                  src={reactLogo} 
                  alt="React" 
                  style={{...styles.techIcon, ...styles.iconReact}} 
                  className="animate-float"
                />
                <img 
                 src={laravelLogo} 
                  alt="Laravel" 
                  style={{...styles.techIcon, ...styles.iconLaravel}} 
                  className="animate-float delay-1"
                />
            </div>
        </div>

        <div className="hero-right">
             <h2 style={styles.greeting}>Halo, Saya</h2>
            <h1 style={styles.name}>Dewaaa</h1>
            
            <p style={styles.bio}>
              Saya adalah siswa SMK yang suka ngoding. Saat ini sedang fokus belajar 
              <b> Laravel</b> dan <b>React JS</b> untuk menjadi Fullstack Developer yang handal.
            </p>
            <div className="hero-buttons">
                <Link to="/projects" style={styles.btnPrimary}>Lihat Project</Link>
                <Link to="/contact" style={styles.btnSecondary}>Hubungi Saya</Link>
            </div>

            <div style={styles.socials}>
                <span style={{color:'#666', fontWeight:'500'}}>Ikuti saya:</span>
                
                <a href="https://github.com/dewadong" target="_blank" rel="noreferrer">
                   <img src={githubLogo} alt="GitHub" style={styles.socialIcon} />
                </a>

                <a href="https://instagram.com/dewadong" target="_blank" rel="noreferrer">
                   <img src={instagramLogo} alt="Instagram" style={styles.socialIcon} />
                </a>
            </div>
        </div>
        </div>
    </section>
  )
}

const styles = {
  heroSection: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 20px 60px 20px'
  },
  // leftCol masih oke pakai inline karena cuma bungkus foto
  leftCol: {
    flex: '1 1 300px',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '30px'
  },
  imageWrapper: {
    width: '300px', // Saya kecilin dikit biar aman di HP
    height: '300px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    zIndex: 1
  },
  techIcon: {
    width: '50px',
    height: '50px',
    position: 'absolute',
    backgroundColor: 'white',
    padding: '8px',
    borderRadius: '50%',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    zIndex: 2,
    objectFit: 'contain'
  },
  iconReact: { top: '0', right: '0' },
  iconLaravel: { bottom: '20px', left: '0' },
  
  // Font styles
  greeting: { fontSize: '1.5rem', color: '#555', marginBottom: '10px', fontWeight: '600' },
  name: { color: '#1a1a1a', fontWeight: '800', marginBottom: '20px', lineHeight: '1.1' }, // Size diatur di CSS
  bio: { color: '#666', marginBottom: '30px', lineHeight: '1.6', maxWidth: '500px' }, // Size diatur di CSS
  
  btnPrimary: { padding: '12px 30px', backgroundColor: '#1a1a1a', color: 'white', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold' },
  btnSecondary: { padding: '12px 30px', backgroundColor: 'transparent', color: '#1a1a1a', border: '2px solid #1a1a1a', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold' },
  
  socials: { marginTop: '30px', display: 'flex', alignItems: 'center', gap: '20px' },
  socialIcon: { width: '30px', height: '30px', opacity: 0.8, transition: '0.3s', cursor: 'pointer' }
}

export default Hero