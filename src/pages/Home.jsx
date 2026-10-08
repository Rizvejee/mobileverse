import { useNavigate } from 'react-router-dom'
import products from '../data/products.js'
import ProductCard from '../components/ProductCard'

const featuredPhones = [
  { emoji: "🤍", brand: "Apple",   name: "iPhone 16 Pro Max", price: 459999 },
  { emoji: "🖤", brand: "Samsung", name: "Galaxy S25 Ultra",  price: 389999 },
  { emoji: "🟠", brand: "Xiaomi",  name: "14 Ultra",          price: 199999 },
]

const brands = ["All", "Samsung", "Apple", "Xiaomi", "Oppo", "Vivo", "Infinix", "OnePlus"]

function Home() {
  const navigate = useNavigate()

  // صرف پہلے 4 products دکھائیں
  const featuredProducts = products.slice(0, 4)

  return (
    <main>

      {/* ── Hero Section ── */}
      <section className="hero">
        <div className="hero-left">

          <div className="hero-badge">
            <span className="hero-dot"></span>
            New Arrivals Just Dropped
          </div>

          <h1 className="hero-title">
            Find Your <span className="hero-highlight">Perfect Phone</span>
          </h1>

          <p className="hero-desc">
            Browse hundreds of smartphones from top brands.
            Best prices, genuine products, and fast delivery across Pakistan.
          </p>

          <div className="hero-btns">
            <button
              className="btn-primary"
              style={{ padding: "14px 28px", fontSize: "15px", borderRadius: "10px" }}
              onClick={() => navigate("/mobiles")}
            >
              Shop Now
            </button>
            <button
              className="btn-outline"
              onClick={() => navigate("/deals")}
            >
              View Deals
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">500+</div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat">
              <div className="stat-num">12+</div>
              <div className="stat-label">Brands</div>
            </div>
            <div className="stat">
              <div className="stat-num">10K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
          </div>

        </div>

        {/* Hero Right — Featured Phones Panel */}
        <div className="hero-right">
          <div className="hero-panel-label">Top Picks This Week</div>

          {featuredPhones.map((phone, index) => (
            <div
              key={index}
              className={`hero-phone-card ${index === 0 ? "active" : ""}`}
            >
              <div className="hero-phone-thumb">{phone.emoji}</div>
              <div>
                <div className="hero-phone-brand">{phone.brand}</div>
                <div className="hero-phone-name">{phone.name}</div>
                <div className="hero-phone-price">
                  PKR {phone.price.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Products ── */}
      <div className="section-wrap">
        <div className="section-head">
          <span className="section-title">Featured Phones</span>
          <span className="see-all" onClick={() => navigate("/mobiles")}>
            See all →
          </span>
        </div>

        {/* Brand Chips */}
        <div className="brand-chips">
          {brands.map((brand) => (
            <button
              key={brand}
              className="chip"
              onClick={() =>
                brand === "All"
                  ? navigate("/mobiles")
                  : navigate(`/mobiles?brand=${brand}`)
              }
            >
              {brand}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* ── Features Section ── */}
      <div className="section-wrap">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Get your phone delivered within 24–48 hours anywhere in Pakistan.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3>100% Genuine</h3>
            <p>All products are official and come with manufacturer warranty.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Easy Returns</h3>
            <p>7-day hassle-free return policy. No questions asked.</p>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Home