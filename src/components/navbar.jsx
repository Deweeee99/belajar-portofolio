function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>Dewe.Dev</div>
      <ul style={styles.menu}>
        {/* Perhatikan href="#..." ini adalah tujuan linknya */}
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  )
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
    backgroundColor: '#1a1a1a',
    color: 'white',
    position: 'sticky', 
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  },
  brand: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#61dafb'
  },
  menu: {
    display: 'flex',
    gap: '30px',
    listStyle: 'none',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '500',
    transition: 'color 0.3s'
  }
}

export default Navbar