import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { cart } = useCart()
  const navigate = useNavigate()

  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  function handleSearch(e) {
    e.preventDefault()
    if (searchQuery.trim() === "") return
    navigate(`/mobiles?search=${searchQuery}`)
    setSearchQuery("")
    setSearchOpen(false)
  }

  return (
    <nav className="navbar">

      <Link to="/" className="logo">Mobile<span>Verse</span></Link>

      {/* Search bar کھلا ہو تو links چھپا دو */}
      {!searchOpen && (
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mobiles">All Mobiles</Link></li>
          <li><Link to="/brands">Brands</Link></li>
          <li><Link to="/deals">Deals</Link></li>
        </ul>
      )}

      {/* Search Bar */}
      {searchOpen && (
        <form className="nav-search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="nav-search-input"
            placeholder="Search phones, brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <button type="submit" className="nav-search-btn">Search</button>
          <button
            type="button"
            className="nav-search-close"
            onClick={() => {
              setSearchOpen(false)
              setSearchQuery("")
            }}
          >
            ✕
          </button>
        </form>
      )}

      <div className="nav-actions">
        {/* Search Icon */}
        <button
          className="icon-btn"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          🔍
        </button>

        <Link to="/wishlist" className="icon-btn">🤍</Link>

        <Link to="/cart" className="icon-btn cart-icon">
          🛒
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </Link>

        <button className="btn-primary">Sign In</button>
      </div>

    </nav>
  )
}

export default Navbar