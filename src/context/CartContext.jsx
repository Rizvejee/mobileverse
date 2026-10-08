import { createContext, useContext, useState, useEffect } from 'react'

// Step 1: Context بنائیں
const CartContext = createContext()

// Step 2: Provider بنائیں
function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  function addToCart(product) {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id)
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  function removeFromCart(productId) {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    )
  }

  function updateQuantity(productId, newQuantity) {
    if (newQuantity === 0) {
      removeFromCart(productId)
      return
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  function toggleWishlist(product) {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.find((item) => item.id === product.id)
      if (exists) {
        return prevWishlist.filter((item) => item.id !== product.id)
      }
      return [...prevWishlist, product]
    })
  }

  // Step 3: یہ سب باہر دو
  const value = {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleWishlist,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

// Step 4: آسانی سے use کرنے کے لیے custom hook
function useCart() {
  return useContext(CartContext)
}

export { CartProvider, useCart }