import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AllMobiles from './pages/AllMobiles'
import Brands from './pages/Brands'
import Deals from './pages/Deals'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'

function App() {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

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
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  function toggleWishlist(product) {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.find((item) => item.id === product.id)

      if (exists) {
        return prevWishlist.filter((item) => item.id !== product.id)
      }

      return [...prevWishlist, product]
    })
  }

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          }
        />

        <Route
          path="/mobiles"
          element={
            <AllMobiles
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          }
        />
        <Route path="/brands" element={<Brands />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              addToCart={addToCart}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App