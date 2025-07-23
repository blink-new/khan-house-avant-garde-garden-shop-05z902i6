import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react'
import { useState } from 'react'

interface ProductShopProps {
  onBack: () => void
}

const products = [
  {
    id: 1,
    name: "Ethereal Orchid Collection",
    price: "$89",
    image: "🌺",
    description: "Mystical orchids that bloom in moonlight",
    category: "Exotic Flowers"
  },
  {
    id: 2,
    name: "Avant-Garde Succulent Set",
    price: "$45",
    image: "🌵",
    description: "Geometric succulents for modern spaces",
    category: "Succulents"
  },
  {
    id: 3,
    name: "Whimsical Herb Garden",
    price: "$32",
    image: "🌿",
    description: "Aromatic herbs with artistic flair",
    category: "Herbs"
  },
  {
    id: 4,
    name: "Celestial Rose Bouquet",
    price: "$125",
    image: "🌹",
    description: "Roses that capture starlight",
    category: "Bouquets"
  },
  {
    id: 5,
    name: "Zen Garden Moss",
    price: "$28",
    image: "🍃",
    description: "Meditative moss for tranquil spaces",
    category: "Garden Decor"
  },
  {
    id: 6,
    name: "Artistic Bonsai Tree",
    price: "$156",
    image: "🌳",
    description: "Living sculpture for contemplation",
    category: "Bonsai"
  }
]

export function ProductShop({ onBack }: ProductShopProps) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  const toggleFavorite = (productId: number) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  return (
    <div className="min-h-screen p-6 md:p-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-primary hover:text-accent transition-colors duration-300 group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Back to Garden</span>
        </button>
        
        <h1 className="font-display text-3xl md:text-5xl font-bold text-primary text-center flex-1">
          Curated Collection
        </h1>
        
        <div className="w-20"></div> {/* Spacer for centering */}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
              hoveredProduct === product.id ? 'scale-105 -rotate-1' : ''
            }`}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-300"
            >
              <Heart 
                className={`w-5 h-5 transition-colors duration-300 ${
                  favorites.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'
                }`} 
              />
            </button>

            {/* Product Image */}
            <div className="text-center mb-6">
              <div className="text-8xl mb-4 group-hover:animate-bounce">
                {product.image}
              </div>
              <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                {product.category}
              </span>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                {product.name}
              </h3>
              
              <p className="text-primary/70 text-sm leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between pt-4">
                <span className="font-display text-2xl font-bold text-accent">
                  {product.price}
                </span>
                
                <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300 group">
                  <ShoppingCart className="w-4 h-4 group-hover:animate-bounce" />
                  <span className="font-medium">Add to Cart</span>
                </button>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl transition-opacity duration-500 ${
              hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-primary/60 font-light text-lg mb-6">
          Discover more extraordinary plants in our ever-growing collection
        </p>
        <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
          View All Products
        </button>
      </div>
    </div>
  )
}