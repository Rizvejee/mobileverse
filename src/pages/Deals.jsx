import ProductCard from '../components/ProductCard'
import products from '../data/products.js'
import { useCart } from '../context/CartContext'


function getDiscount(price, oldPrice) {
  return Math.round(((oldPrice - price) / oldPrice) * 100)
}

function Deals() {

  const { addToCart, toggleWishlist, wishlist } = useCart()
  const dealProducts = products
    .filter((p) => getDiscount(p.price, p.oldPrice) >= 5)
    .sort((a, b) =>
      getDiscount(b.price, b.oldPrice) - getDiscount(a.price, a.oldPrice)
    )

  return (
    <main className="main-content">

      <h2 className="section-title">
        Today's Deals
        <span className="result-count">{dealProducts.length} offers</span>
      </h2>

      {dealProducts.length === 0 ? (
        <div className="empty-state">
          <div style={{ fontSize: "48px", marginBottom: "12px" }}>🏷️</div>
          <h3>No deals right now</h3>
          <p>Check back later for amazing offers.</p>
        </div>
      ) : (
        <div className="product-grid">
          {dealProducts.map((product) => (
            <div key={product.id} style={{ position: "relative" }}>

              {/* Discount Badge */}
              <div className="discount-badge">
                -{getDiscount(product.price, product.oldPrice)}%
              </div>

              <ProductCard
                product={product}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
              />

            </div>
          ))}
        </div>
      )}

    </main>
  )
}

export default Deals