import React, { useState } from 'react';
import { Heart, ArrowLeft } from 'lucide-react';

interface ProductShopProps {
  onBack: () => void;
}

const ProductShop: React.FC<ProductShopProps> = ({ onBack }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Ruby Rose Seeds",
      price: "$24.99",
      image: "🌹",
      color: "bg-gradient-to-br from-pink-400 to-red-400",
      description: "Vibrant red roses that bloom all season"
    },
    {
      id: 2,
      name: "Sapphire Lavender",
      price: "$18.99",
      image: "💜",
      color: "bg-gradient-to-br from-blue-400 to-purple-400",
      description: "Fragrant blue-purple lavender plants"
    },
    {
      id: 3,
      name: "Emerald Mint",
      price: "$12.99",
      image: "🌿",
      color: "bg-gradient-to-br from-green-400 to-emerald-400",
      description: "Fresh mint for your herb garden"
    },
    {
      id: 4,
      name: "Topaz Sunflowers",
      price: "$16.99",
      image: "🌻",
      color: "bg-gradient-to-br from-yellow-400 to-orange-400",
      description: "Giant golden sunflowers"
    },
    {
      id: 5,
      name: "Amethyst Violets",
      price: "$22.99",
      image: "🟣",
      color: "bg-gradient-to-br from-purple-400 to-indigo-400",
      description: "Delicate purple violet flowers"
    },
    {
      id: 6,
      name: "Peridot Basil",
      price: "$14.99",
      image: "🌱",
      color: "bg-gradient-to-br from-lime-400 to-green-400",
      description: "Aromatic basil for cooking"
    },
    {
      id: 7,
      name: "Crystal Garden Tools",
      price: "$89.99",
      image: "🔧",
      color: "bg-gradient-to-br from-gray-300 to-blue-300",
      description: "Premium gardening tool set"
    },
    {
      id: 8,
      name: "Rainbow Tulip Mix",
      price: "$28.99",
      image: "🌷",
      color: "bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300",
      description: "Colorful tulip bulb collection"
    }
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-emerald hover:text-sapphire transition-colors duration-200 font-medium"
          >
            <ArrowLeft size={20} />
            Back to Garden
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-emerald">
            🌸 Khan House Shop 🌸
          </h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Product Image */}
              <div className={`${product.color} h-48 flex items-center justify-center relative`}>
                <div className="text-6xl">{product.image}</div>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
                >
                  <Heart
                    size={20}
                    className={`${
                      favorites.includes(product.id)
                        ? 'text-red-500 fill-red-500'
                        : 'text-gray-400'
                    } transition-colors duration-200`}
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald">{product.price}</span>
                  <button className="bg-gradient-to-r from-emerald to-sapphire text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-200 font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12 p-6 bg-white/50 rounded-2xl">
          <h2 className="text-2xl font-bold text-emerald mb-2">🌈 Grow Your Dream Garden! 🌈</h2>
          <p className="text-sapphire">
            Each plant comes with care instructions and our happiness guarantee!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductShop;