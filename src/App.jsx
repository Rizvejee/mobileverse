import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

import Navbar        from './components/Navbar'
import Footer        from './components/Footer'
import Home          from './pages/Home'
import AllMobiles    from './pages/AllMobiles'
import Brands        from './pages/Brands'
import Deals         from './pages/Deals'
import NotFound      from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import Cart          from './pages/Cart'
import Wishlist      from './pages/Wishlist'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"           element={<Home />}          />
          <Route path="/mobiles"    element={<AllMobiles />}    />
          <Route path="/brands"     element={<Brands />}        />
          <Route path="/deals"      element={<Deals />}         />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart"       element={<Cart />}          />
          <Route path="/wishlist"   element={<Wishlist />}      />
          <Route path="*"           element={<NotFound />}      />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App