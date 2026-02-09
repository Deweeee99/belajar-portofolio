function About() {
  return (
    // TAMBAHAN PENTING: id="about" supaya link Navbar berfungsi!
    <section id="about" style={styles.section}>
      <h2 style={styles.title}>Tentang Saya</h2>
      <p style={styles.description}>
        Saya adalah programmer pemula dari Jakarta yang sedang mendalami dunia 
        Web Development. Awalnya saya fokus di Backend dengan <b>Laravel</b>, 
        tapi sekarang lagi seru-serunya belajar Frontend pakai <b>React</b>.
      </p>

      {/* Bagian Skill */}
      <h3 style={styles.subTitle}>Tech Stack</h3>
      <div style={styles.skillsContainer}>
        <span style={styles.skillBadge}>Laravel</span>
        <span style={styles.skillBadge}>PHP</span>
        <span style={styles.skillBadge}>React</span>
        <span style={styles.skillBadge}>JavaScript</span>
        <span style={styles.skillBadge}>MySQL</span>
        <span style={styles.skillBadge}>Git</span>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: 'white', 
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333'
  },
  description: {
    fontSize: '18px',
    maxWidth: '800px',
    margin: '0 auto 40px auto',
    lineHeight: '1.6',
    color: '#555'
  },
  subTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#333'
  },
  skillsContainer: {
    display: 'flex',
    justifyContent: 'center', 
    gap: '15px', 
    flexWrap: 'wrap' 
  },
  skillBadge: {
    backgroundColor: '#e0e0e0',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 'bold',
    color: '#333'
  }
}

export default About