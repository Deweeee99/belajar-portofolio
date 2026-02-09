function Hero() {
  return (
    <div id="home" style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>Halo, Saya Dewe <span style={styles.wave}>👋</span></h1>
        <p style={styles.bio}>
          Saya seorang <b>Laravel Enthusiast</b> yang sedang bertransformasi menjadi <b>Fullstack Developer</b>.
        </p>
        
        <div style={styles.buttons}>
            {/* Tombol ini akan meluncur ke bagian Projects */}
            <a href="#projects" style={styles.primaryBtn}>Lihat Projek</a>
            
            {/* Tombol ini akan meluncur ke Footer/Kontak */}
            <a href="#contact" style={styles.secondaryBtn}>Kontak Saya</a>
        </div>
      </div>
    </div>
  )
}

const styles = {
  hero: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    paddingTop: '60px'
  },
  content: { maxWidth: '700px', padding: '20px' },
  title: { fontSize: '3rem', marginBottom: '20px', color: '#333' },
  bio: { fontSize: '1.2rem', color: '#555', marginBottom: '40px', lineHeight: '1.6' },
  buttons: { display: 'flex', gap: '20px', justifyContent: 'center' },
  primaryBtn: {
    padding: '12px 30px',
    backgroundColor: '#333',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '30px',
    fontWeight: 'bold',
    transition: '0.3s'
  },
  secondaryBtn: {
    padding: '12px 30px',
    backgroundColor: 'white',
    color: '#333',
    textDecoration: 'none',
    border: '2px solid #333',
    borderRadius: '30px',
    fontWeight: 'bold'
  }
}

export default Hero