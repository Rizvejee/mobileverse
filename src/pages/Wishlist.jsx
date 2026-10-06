import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

function Wishlist({ wishlist, toggleWishlist, addToCart }) {

  if (wishlist.length === 0) {
    return (
      <main className="main-content" style={{ textAlign: "center", padding: "80px 40px" }}>
        <div style={{ fontSize: "64px", marginBottom: "16px" }}>🤍</div>
        <h2 style={{ marginBottom: "12px" }}>Your wishlist is empty</h2>
        <p style={{ color: "var(--text-2)", marginBottom: "28px" }}>
          Save phones you love and come back to them later.
        </p>
        <Link to="/" className="btn-primary" style={{ padding: "12px 28px", borderRadius: "8px", fontSize: "14px" }}>
          Browse Phones
        </Link>
      </main>
    )
  }

  return (
    <main className="main-content">
      <h2 className="section-title">
        My Wishlist
        <span className="result-count">{wishlist.length} phones</span>
      </h2>

      <div className="product-grid">
        {wishlist.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        ))}
      </div>
    </main>
  )
}

export default Wishlist