import products from '../data/products.js'
import ProductCard from '../components/ProductCard'

function Home({ addToCart, toggleWishlist, wishlist }) {
  return (
    <main className="main-content">
      <h2 className="section-title">Featured Phones</h2>
      <div className="product-grid">
        {products.map((product) => (
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

export default Home