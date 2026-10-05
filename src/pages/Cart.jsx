import { Link } from 'react-router-dom'

function Cart({ cart, removeFromCart, updateQuantity }) {

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <main className="main-content" style={{ textAlign: "center", padding: "80px 40px" }}>
        <div style={{ fontSize: "64px", marginBottom: "16px" }}>🛒</div>
        <h2 style={{ marginBottom: "12px" }}>Your cart is empty</h2>
        <p style={{ color: "var(--text-2)", marginBottom: "28px" }}>
          Looks like you haven't added anything yet.
        </p>
        <Link to="/" className="btn-primary" style={{ padding: "12px 28px", borderRadius: "8px", fontSize: "14px" }}>
          Browse Phones
        </Link>
      </main>
    )
  }

  return (
    <main className="main-content">
      <h2 className="section-title">Shopping Cart</h2>

      <div className="cart-layout">

        {/* Cart Items */}
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">

              <div className="cart-item-img">{item.emoji}</div>

              <div className="cart-item-info">
                <div className="product-brand">{item.brand}</div>
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">
                  PKR {item.price.toLocaleString()}
                </div>
              </div>

              <div className="cart-item-actions">

                {/* Quantity Control */}
                <div className="qty-control">
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span className="qty-num">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                {/* Item Total */}
                <div className="item-total">
                  PKR {(item.price * item.quantity).toLocaleString()}
                </div>

                {/* Remove */}
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="cart-summary">
          <h3 className="summary-title">Order Summary</h3>

          <div className="summary-row">
            <span>Items ({cart.reduce((sum, item) => sum + item.quantity, 0)})</span>
            <span>PKR {total.toLocaleString()}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span style={{ color: "green" }}>Free</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total</span>
            <span>PKR {total.toLocaleString()}</span>
          </div>

          <button className="btn-primary" style={{ width: "100%", padding: "14px", fontSize: "15px", marginTop: "20px", borderRadius: "10px" }}>
            Checkout
          </button>

          <Link to="/" style={{ display: "block", textAlign: "center", marginTop: "14px", fontSize: "13px", color: "var(--text-3)" }}>
            Continue Shopping
          </Link>
        </div>

      </div>
    </main>
  )
}

export default Cart