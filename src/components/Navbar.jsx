import { Link } from 'react-router-dom'

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Mobile<span>Verse</span>
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mobiles">All Mobiles</Link></li>
        <li><Link to="/brands">Brands</Link></li>
        <li><Link to="/deals">Deals</Link></li>
      </ul>

      <div className="nav-actions">
        <button className="icon-btn">🔍</button>
        <button className="icon-btn">🤍</button>
        <Link to="/cart" className="icon-btn cart-icon">
          🛒
          {cartCount > 0 && (
            <span className="badge">{cartCount}</span>
          )}
        </Link>
        <button className="btn-primary">Sign In</button>
      </div>

    </nav>
  )
}

export default Navbar