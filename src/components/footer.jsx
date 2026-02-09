function Footer() {
  return (
    <footer id="contact" style={styles.footer}>
      <p>By Dewe &copy; 2026</p>
      <p style={styles.text}>Dibuat dengan React JS di Jakarta</p>
      
      {/* Link Sosmed */}
      <div style={styles.socials}>
        {/* TAMBAHAN PENTING 2: target="_blank" biar buka tab baru */}
        <a href="https://github.com/" target="_blank" style={styles.link}>GitHub</a>
        <a href="https://instagram.com/" target="_blank" style={styles.link}>Instagram</a>
        <a href="https://linkedin.com/" target="_blank" style={styles.link}>LinkedIn</a>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    marginTop: '50px' 
  },
  text: {
    fontSize: '14px',
    color: '#aaa',
    marginBottom: '10px'
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '10px'
  },
  link: {
    color: 'white',
    textDecoration: 'none', 
    fontWeight: 'bold',
    cursor: 'pointer'
  }
}

export default Footer