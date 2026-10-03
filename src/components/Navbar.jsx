function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        Mobile<span>Verse</span>
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/mobiles">All Mobiles</a></li>
        <li><a href="/brands">Brands</a></li>
        <li><a href="/deals">Deals</a></li>
      </ul>

      {/* Actions */}
      <div className="nav-actions">
        <button className="icon-btn" title="Search">🔍</button>
        <button className="icon-btn" title="Wishlist">🤍</button>
        <button className="icon-btn" title="Cart">🛒</button>
        <button className="btn-primary">Sign In</button>
      </div>

    </nav>
  );
}

export default Navbar;