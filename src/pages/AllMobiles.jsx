import { useState } from 'react'
import products from '../data/products.js'
import ProductCard from '../components/ProductCard'

const brands = ["All", "Samsung", "Apple", "Xiaomi", "Oppo", "Vivo", "Infinix", "OnePlus"]

function AllMobiles({ addToCart, toggleWishlist, wishlist }) {

  const [selectedBrand, setSelectedBrand] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("default")

  // Step 1 — Brand filter
  const afterBrand = selectedBrand === "All"
    ? products
    : products.filter((p) => p.brand === selectedBrand)

  // Step 2 — Search filter
  const afterSearch = afterBrand.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Step 3 — Sort
  const finalList = [...afterSearch].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    if (sortBy === "rating") return b.rating - a.rating
    return 0
  })

  return (
    <main className="main-content">

      {/* Top Bar */}
      <div className="filter-topbar">
        <h2 className="section-title" style={{ margin: 0 }}>
          All Mobiles
          <span className="result-count">{finalList.length} phones</span>
        </h2>

        {/* Search */}
        <input
          type="text"
          className="search-input"
          placeholder="Search phones..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Sort */}
        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Brand Chips */}
      <div className="brand-chips">
        {brands.map((brand) => (
          <button
            key={brand}
            className={`chip ${selectedBrand === brand ? "active" : ""}`}
            onClick={() => setSelectedBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Results */}
      {finalList.length === 0 ? (
        <div className="empty-state">
          <div style={{ fontSize: "48px", marginBottom: "12px" }}>🔍</div>
          <h3>No phones found</h3>
          <p>Try a different search or brand filter.</p>
        </div>
      ) : (
        <div className="product-grid">
          {finalList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          ))}
        </div>
      )}

    </main>
  )
}

export default AllMobiles