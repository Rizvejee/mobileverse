import { useNavigate } from 'react-router-dom'

function ProductCard({ product, addToCart }) {

  const navigate = useNavigate()

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>

      <div className="product-img">{product.emoji}</div>
      <div className="product-brand">{product.brand}</div>
      <div className="product-name">{product.name}</div>

      <div className="product-prices">
        <span className="product-price">PKR {product.price.toLocaleString()}</span>
        <span className="product-old">PKR {product.oldPrice.toLocaleString()}</span>
      </div>

      <div className="product-footer">
        <div className="rating">⭐ {product.rating}</div>
        <button
          className="add-btn"
          onClick={(e) => {
            e.stopPropagation()
            addToCart(product)
          }}
        >
          Add to Cart
        </button>
      </div>

    </div>
  )
}

export default ProductCard