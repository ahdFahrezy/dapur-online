import './App.css'

function App() {
  const dishes = [
    {
      id: 1,
      title: "Rendang Sapi Wagyu",
      desc: "Dimasak perlahan selama 12 jam dengan santan premium dan rempah tradisional.",
      price: "Rp 125.000",
      img: "/assets/dish_1.png"
    },
    {
      id: 2,
      title: "Sate Lilit Bali",
      desc: "Sate daging cincang otentik yang dipanggang dengan batang serai dan Sambal Matah.",
      price: "Rp 85.000",
      img: "/assets/dish_2.png"
    },
    {
      id: 3,
      title: "Es Teler Artisan",
      desc: "Perpaduan modern buah tropis, kelapa muda, dan susu kental manis premium.",
      price: "Rp 45.000",
      img: "/assets/dish_3.png"
    }
  ]

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">Dapur Online</div>
        <ul className="nav-links">
          <li><a href="#home">Beranda</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">Tentang</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
        <button className="btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Pesan Sekarang</button>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Nikmati Hidangan <span style={{ color: '#f59e0b' }}>Indonesia</span> Mewah</h1>
          <p>Resep tradisional terbaik yang dihadirkan kembali dengan teknik kuliner modern. Diantar segar ke depan pintu Anda.</p>
          <button className="btn-primary">Jelajahi Menu</button>
        </div>
        <div className="hero-image">
          <img src="/assets/hero_food.png" alt="Nasi Goreng Spesial" />
        </div>
      </section>

      <section id="menu" className="featured">
        <div className="section-head">
          <h2>Rekomendasi Chef</h2>
          <p style={{ color: '#94a3b8' }}>Hidangan khas kami yang dikurasi untuk pengalaman makan terbaik.</p>
        </div>
        <div className="dish-grid">
          {dishes.map(dish => (
            <div key={dish.id} className="dish-card">
              <img src={dish.img} alt={dish.title} />
              <div className="dish-info">
                <h3>{dish.title}</h3>
                <p>{dish.desc}</p>
                <div className="price">{dish.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="logo" style={{ fontSize: '1.2rem' }}>Dapur Online</div>
        <div className="footer-text">&copy; 2026 Dapur Online. Hidangan mewah diantar.</div>
        <div className="socials" style={{ color: '#94a3b8' }}>
          Ikuti kami: Instagram | Facebook | Twitter
        </div>
      </footer>
    </div>
  )
}

export default App
