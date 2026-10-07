import { useNavigate } from 'react-router-dom'

const brandsList = [
  { name: "Samsung", emoji: "🖤", country: "South Korea", phones: 2 },
  { name: "Apple",   emoji: "🤍", country: "United States", phones: 1 },
  { name: "Xiaomi",  emoji: "🟠", country: "China", phones: 1 },
  { name: "OnePlus", emoji: "🟢", country: "China", phones: 1 },
  { name: "Oppo",    emoji: "🔵", country: "China", phones: 1 },
  { name: "Vivo",    emoji: "🟣", country: "China", phones: 1 },
  { name: "Infinix", emoji: "🔴", country: "Hong Kong", phones: 1 },
]

function Brands() {

  const navigate = useNavigate()

  function handleBrandClick(brandName) {
    navigate(`/mobiles?brand=${brandName}`)
  }

  return (
    <main className="main-content">
      <h2 className="section-title">All Brands</h2>

      <div className="brands-grid">
        {brandsList.map((brand) => (
          <div
            key={brand.name}
            className="brand-card"
            onClick={() => handleBrandClick(brand.name)}
          >
            <div className="brand-emoji">{brand.emoji}</div>
            <div className="brand-name">{brand.name}</div>
            <div className="brand-country">{brand.country}</div>
            <div className="brand-phones">{brand.phones} phones</div>
          </div>
        ))}
      </div>

    </main>
  )
}

export default Brands