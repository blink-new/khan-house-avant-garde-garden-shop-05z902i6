import React from 'react';

interface InteractiveGardenProps {
  onFlowerClick: () => void;
  onBirdClick: () => void;
}

const InteractiveGarden: React.FC<InteractiveGardenProps> = ({ onFlowerClick, onBirdClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-green-100 relative overflow-hidden">
      {/* Grass Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-400 to-green-300">
        {/* Grass Blades */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="grass-blade absolute bottom-0"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 6}px`,
              height: `${20 + Math.random() * 30}px`,
              transform: `rotate(${-10 + Math.random() * 20}deg)`,
            }}
          />
        ))}
      </div>

      {/* Khan House Logo */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-emerald bg-gradient-to-r from-emerald to-sapphire bg-clip-text text-transparent">
          Khan House
        </h1>
        <p className="text-center text-sapphire font-medium mt-2">Avant-Garde Garden Shop</p>
      </div>

      {/* Colorful Flowers */}
      <div className="absolute bottom-32 left-20">
        <button
          onClick={onFlowerClick}
          className="group cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          {/* Ruby Flower */}
          <div className="relative">
            <div className="w-16 h-16 bg-ruby rounded-full flower-center shadow-lg"></div>
            {/* Petals */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-t from-pink-400 to-pink-300 petal"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-pink-400 to-pink-300 petal"></div>
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-12 h-8 bg-gradient-to-l from-pink-400 to-pink-300 petal rotate-90"></div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-12 h-8 bg-gradient-to-r from-pink-400 to-pink-300 petal rotate-90"></div>
            {/* Diagonal petals */}
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-tl from-pink-400 to-pink-300 petal rotate-45"></div>
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-tr from-pink-400 to-pink-300 petal -rotate-45"></div>
            <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-bl from-pink-400 to-pink-300 petal -rotate-45"></div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-300 petal rotate-45"></div>
          </div>
          <div className="text-center mt-2 text-ruby font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Shop Now! 🌸
          </div>
        </button>
      </div>

      {/* Sapphire Flower */}
      <div className="absolute bottom-40 right-32">
        <button
          onClick={onFlowerClick}
          className="group cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <div className="relative">
            <div className="w-14 h-14 bg-sapphire rounded-full flower-center shadow-lg"></div>
            {/* Blue petals */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-10 bg-gradient-to-t from-blue-400 to-blue-300 petal"></div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-10 bg-gradient-to-b from-blue-400 to-blue-300 petal"></div>
            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-10 h-6 bg-gradient-to-l from-blue-400 to-blue-300 petal rotate-90"></div>
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-10 h-6 bg-gradient-to-r from-blue-400 to-blue-300 petal rotate-90"></div>
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-tl from-blue-400 to-blue-300 petal rotate-45"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-tr from-blue-400 to-blue-300 petal -rotate-45"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-bl from-blue-400 to-blue-300 petal -rotate-45"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-300 petal rotate-45"></div>
          </div>
          <div className="text-center mt-2 text-sapphire font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Browse! 💎
          </div>
        </button>
      </div>

      {/* Amethyst Flower */}
      <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2">
        <button
          onClick={onFlowerClick}
          className="group cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <div className="relative">
            <div className="w-12 h-12 bg-amethyst rounded-full flower-center shadow-lg"></div>
            {/* Purple petals */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 h-8 bg-gradient-to-t from-purple-400 to-purple-300 petal"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-8 bg-gradient-to-b from-purple-400 to-purple-300 petal"></div>
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-8 h-5 bg-gradient-to-l from-purple-400 to-purple-300 petal rotate-90"></div>
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-8 h-5 bg-gradient-to-r from-purple-400 to-purple-300 petal rotate-90"></div>
            <div className="absolute -top-1 -left-1 w-6 h-6 bg-gradient-to-tl from-purple-400 to-purple-300 petal rotate-45"></div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-tr from-purple-400 to-purple-300 petal -rotate-45"></div>
            <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-gradient-to-bl from-purple-400 to-purple-300 petal -rotate-45"></div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-300 petal rotate-45"></div>
          </div>
          <div className="text-center mt-2 text-amethyst font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Discover! 🔮
          </div>
        </button>
      </div>

      {/* Topaz Flower */}
      <div className="absolute bottom-44 left-40">
        <button
          onClick={onFlowerClick}
          className="group cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <div className="relative">
            <div className="w-10 h-10 bg-topaz rounded-full flower-center shadow-lg"></div>
            {/* Yellow petals */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gradient-to-t from-yellow-400 to-yellow-300 petal"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gradient-to-b from-yellow-400 to-yellow-300 petal"></div>
            <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-6 h-4 bg-gradient-to-l from-yellow-400 to-yellow-300 petal rotate-90"></div>
            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-6 h-4 bg-gradient-to-r from-yellow-400 to-yellow-300 petal rotate-90"></div>
            <div className="absolute -top-0.5 -left-0.5 w-5 h-5 bg-gradient-to-tl from-yellow-400 to-yellow-300 petal rotate-45"></div>
            <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gradient-to-tr from-yellow-400 to-yellow-300 petal -rotate-45"></div>
            <div className="absolute -bottom-0.5 -left-0.5 w-5 h-5 bg-gradient-to-bl from-yellow-400 to-yellow-300 petal -rotate-45"></div>
            <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-300 petal rotate-45"></div>
          </div>
          <div className="text-center mt-2 text-topaz font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Shop! ✨
          </div>
        </button>
      </div>

      {/* Peridot Flower */}
      <div className="absolute bottom-38 right-20">
        <button
          onClick={onFlowerClick}
          className="group cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <div className="relative">
            <div className="w-11 h-11 bg-peridot rounded-full flower-center shadow-lg"></div>
            {/* Green petals */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-7 bg-gradient-to-t from-lime-400 to-lime-300 petal"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-7 bg-gradient-to-b from-lime-400 to-lime-300 petal"></div>
            <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-7 h-4 bg-gradient-to-l from-lime-400 to-lime-300 petal rotate-90"></div>
            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-7 h-4 bg-gradient-to-r from-lime-400 to-lime-300 petal rotate-90"></div>
            <div className="absolute -top-0.5 -left-0.5 w-5 h-5 bg-gradient-to-tl from-lime-400 to-lime-300 petal rotate-45"></div>
            <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gradient-to-tr from-lime-400 to-lime-300 petal -rotate-45"></div>
            <div className="absolute -bottom-0.5 -left-0.5 w-5 h-5 bg-gradient-to-bl from-lime-400 to-lime-300 petal -rotate-45"></div>
            <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-gradient-to-br from-lime-400 to-lime-300 petal rotate-45"></div>
          </div>
          <div className="text-center mt-2 text-peridot font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Explore! 🌿
          </div>
        </button>
      </div>

      {/* Cute Bird */}
      <div className="absolute top-32 right-20">
        <button
          onClick={onBirdClick}
          className="group cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <div className="relative">
            {/* Bird body */}
            <div className="w-8 h-12 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full"></div>
            {/* Bird head */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full"></div>
            {/* Beak */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 translate-x-2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-orange-600"></div>
            {/* Eye */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-x-1 w-1 h-1 bg-black rounded-full"></div>
            {/* Wing */}
            <div className="absolute top-2 -right-1 w-4 h-6 bg-gradient-to-r from-red-300 to-red-400 rounded-full transform rotate-12"></div>
            {/* Tail */}
            <div className="absolute bottom-0 -left-2 w-3 h-4 bg-gradient-to-l from-red-300 to-red-400 rounded-full transform -rotate-12"></div>
          </div>
          <div className="text-center mt-2 text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            About Us! 🐦
          </div>
        </button>
      </div>

      {/* Cute Clouds */}
      <div className="absolute top-20 left-20 w-16 h-8 bg-white rounded-full opacity-80"></div>
      <div className="absolute top-16 left-24 w-12 h-6 bg-white rounded-full opacity-80"></div>
      <div className="absolute top-24 right-40 w-20 h-10 bg-white rounded-full opacity-80"></div>
      <div className="absolute top-20 right-44 w-14 h-7 bg-white rounded-full opacity-80"></div>

      {/* Welcome Message */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-emerald font-medium text-lg mb-2">🌸 Welcome to our magical garden! 🌸</p>
        <p className="text-sapphire">Click the flowers to shop • Click the bird to learn about us</p>
      </div>
    </div>
  );
};

export default InteractiveGarden;