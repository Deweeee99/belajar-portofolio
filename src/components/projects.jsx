function Projects() {
  const projects = [
    { name: "Sistem Sekolah", tech: "Laravel", desc: "Manajemen data siswa & guru.", link: "https://github.com/dirzz/sekolah" },
    { name: "Portofolio", tech: "React", desc: "Website pribadi modern.", link: "https://github.com/dirzz/portofolio" },
    { name: "Top Up Game", tech: "PHP", desc: "E-commerce top up game.", link: "https://github.com/dirzz/topup" },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title}>Projek Unggulan</h2>
      
      <div style={styles.grid}>
        {projects.map((item, index) => (
          <div key={index} style={styles.card}>
            <h3>{item.name}</h3>
            <span style={styles.badge}>{item.tech}</span>
            <p style={styles.desc}>{item.desc}</p>
            
            {/* Tombol Aktif ke Link Luar */}
            <a href={item.link} target="_blank" style={styles.btn}>Lihat Code &rarr;</a>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: { padding: '80px 20px', backgroundColor: '#fff', textAlign: 'center' },
  title: { fontSize: '2.5rem', marginBottom: '50px' },
  grid: { display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' },
  card: { 
    border: '1px solid #ddd', 
    width: '300px', 
    padding: '30px', 
    borderRadius: '15px', 
    textAlign: 'left',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
  },
  badge: { 
    background: '#e0f7fa', 
    color: '#006064', 
    padding: '5px 10px', 
    borderRadius: '5px', 
    fontSize: '12px', 
    fontWeight: 'bold' 
  },
  desc: { margin: '15px 0', color: '#666', lineHeight: '1.5' },
  btn: { 
    display: 'inline-block', 
    textDecoration: 'none', 
    color: '#007bff', 
    fontWeight: 'bold', 
    marginTop: '10px' 
  }
}

export default Projects