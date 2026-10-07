import { useParams, useNavigate } from 'react-router-dom'
import products from '../data/products.js'

function ProductDetail({ addToCart, toggleWishlist, wishlist }) {

  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find((p) => p.id === Number(id))

  const isWishlisted = wishlist
    ? wishlist.some((item) => item.id === product?.id)
    : false

  if (!product) {
    return (
      <main className="main-content">
        <h2>Product not found!</h2>
      </main>
    )
  }

  return (
    <main className="main-content">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="detail-card">

        <div className="detail-img">
          {product.emoji}
        </div>

        <div className="detail-info">
          <div className="product-brand">{product.brand}</div>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-desc">{product.description}</p>

          <div className="detail-specs">
            <span>RAM: {product.ram}</span>
            <span>Storage: {product.storage}</span>
            <span>⭐ {product.rating}</span>
          </div>

          <div className="product-prices">
            <span className="product-price">
              PKR {product.price.toLocaleString()}
            </span>
            <span className="product-old">
              PKR {product.oldPrice.toLocaleString()}
            </span>
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
            <button
              className="btn-primary"
              style={{ padding: "14px 32px", fontSize: "15px", borderRadius: "10px" }}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

            <button
              className={`wishlist-btn-detail ${isWishlisted ? "wishlisted" : ""}`}
              onClick={() => toggleWishlist(product)}
            >
              {isWishlisted ? "❤️ Wishlisted" : "🤍 Wishlist"}
            </button>
          </div>

        </div>

      </div>

    </main>
  )
}

export default ProductDetail