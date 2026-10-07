import { useState } from 'react'
import ProductCard from './components/ProductCard/ProductCard'
import productUi from './assets/product-preview.svg'
import productIcons from './assets/product-icons.svg'
import productLanding from './assets/product-landing.svg'
import productMockups from './assets/product-mockups.svg'
import logo from './assets/solara.svg'
import iconUser from './assets/user.svg'
import iconCart from './assets/cart.svg'
import iconSearch from './assets/search.svg'

const products = [
  {
    id: 1,
    title: 'Modern UI kit',
    description: 'Modern interface components for web ...',
    price: 29,
    rating: 5.0,
    reviews: 127,
    image: productUi
  },
  {
    id: 2,
    title: 'Icon Pack Pro',
    description: '800+ outlined icons for apps and sites',
    price: 19,
    rating: 4.9,
    reviews: 84,
    image: productIcons
  },
  {
    id: 3,
    title: 'Landing Kit',
    description: 'Ready-made sections for product pages',
    price: 39,
    rating: 4.8,
    reviews: 56,
    image: productLanding
  },
  {
    id: 4,
    title: 'Mockup Bundle',
    description: 'Device and presentation mockups pack',
    price: 24,
    rating: 5.0,
    reviews: 203,
    image: productMockups
  }
]

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [cartMessage, setCartMessage] = useState('')

  const handleAddToCart = (title, quantity) => {
    setCartCount((value) => value + quantity)
    const word = quantity === 1 ? 'товар' : quantity < 5 ? 'товара' : 'товаров'
    setCartMessage(`${title}: +${quantity} ${word}`)
    window.setTimeout(() => setCartMessage(''), 2000)
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="logo" href="/" aria-label="solara">
            <img src={logo} alt="solara" className="logo-img" />
          </a>

          <nav className="topbar-actions" aria-label="Навигация">
            <button type="button" aria-label="Поиск">
              <img src={iconSearch} alt="" />
            </button>
            <button type="button" aria-label="Профиль">
              <img src={iconUser} alt="" />
            </button>
            <button type="button" className="cart-btn" aria-label="Корзина">
              <img src={iconCart} alt="" />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </nav>
        </div>
      </header>

      <main className="page">
        <section className="catalog">
          <div className="catalog-head">
            <h1>Цифровые товары</h1>
            <p>UI-киты, иконки и мокапы для ваших проектов</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                rating={product.rating}
                reviews={product.reviews}
                image={product.image}
                onAddToCart={(quantity) => handleAddToCart(product.title, quantity)}
              />
            ))}
          </div>
        </section>
      </main>

      {cartMessage && <div className="toast">{cartMessage}</div>}
    </div>
  )
}

export default App
