import './App.css'

function App() {
  const dishes = [
    {
      id: 1,
      title: "Wagyu Beef Rendang",
      desc: "Slow-cooked for 12 hours in premium coconut milk and traditional spices.",
      price: "Rp 125.000",
      img: "/assets/dish_1.png"
    },
    {
      id: 2,
      title: "Sate Lilit Balinese",
      desc: "Authentic minced meat satay grilled over lemongrass sticks with Sambal Matah.",
      price: "Rp 85.000",
      img: "/assets/dish_2.png"
    },
    {
      id: 3,
      title: "Artisan Es Teller",
      desc: "Modern fusion of tropical fruits, creamy coconut, and premium condensed milk.",
      price: "Rp 45.000",
      img: "/assets/dish_3.png"
    }
  ]

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">Dapur Online</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Order Now</button>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Experience Gourmet <span style={{ color: '#f59e0b' }}>Indonesian</span> Dining</h1>
          <p>The finest traditional recipes reimagined with modern culinary techniques. Delivered fresh to your doorstep.</p>
          <button className="btn-primary">Explore Menu</button>
        </div>
        <div className="hero-image">
          <img src="/assets/hero_food.png" alt="Signature Nasi Goreng" />
        </div>
      </section>

      <section id="menu" className="featured">
        <div className="section-head">
          <h2>Chef's Recommendations</h2>
          <p style={{ color: '#94a3b8' }}>Our signature dishes curated for the ultimate dining experience.</p>
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
        <div className="footer-text">&copy; 2026 Dapur Online. Gourmet delivered.</div>
        <div className="socials" style={{ color: '#94a3b8' }}>
          Follow us: Instagram | Facebook | Twitter
        </div>
      </footer>
    </div>
  )
}

export default App
