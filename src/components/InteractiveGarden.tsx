import { useState, useEffect } from 'react'

interface InteractiveGardenProps {
  onFlowerClick: () => void
  onBirdClick: () => void
}

export function InteractiveGarden({ onFlowerClick, onBirdClick }: InteractiveGardenProps) {
  const [hoveredFlower, setHoveredFlower] = useState<number | null>(null)
  const [hoveredBird, setHoveredBird] = useState<boolean>(false)

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Floating Khan House Logo */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary animate-float">
          Khan House
        </h1>
        <p className="text-center text-primary/70 font-light tracking-wide mt-2">
          Avant-Garde Garden Shop
        </p>
      </div>

      {/* Interactive Flowers */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Large Center Flower */}
        <div 
          className={`absolute cursor-pointer transition-all duration-500 animate-sway ${
            hoveredFlower === 0 ? 'scale-110 flower-glow' : ''
          }`}
          style={{ 
            left: '50%', 
            top: '60%', 
            transform: 'translate(-50%, -50%)',
            zIndex: 10
          }}
          onMouseEnter={() => setHoveredFlower(0)}
          onMouseLeave={() => setHoveredFlower(null)}
          onClick={onFlowerClick}
        >
          <FlowerSVG size={120} color="#E6B800" />
          {hoveredFlower === 0 && (
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium whitespace-nowrap animate-fade-in">
              🌸 Click to Shop
            </div>
          )}
        </div>

        {/* Smaller Flowers Around */}
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`absolute cursor-pointer transition-all duration-500 animate-sway ${
              hoveredFlower === index ? 'scale-110 flower-glow' : ''
            }`}
            style={{
              left: `${30 + (index * 15)}%`,
              top: `${45 + (index % 2 === 0 ? 20 : -10)}%`,
              animationDelay: `${index * 0.5}s`,
              zIndex: 5
            }}
            onMouseEnter={() => setHoveredFlower(index)}
            onMouseLeave={() => setHoveredFlower(null)}
            onClick={onFlowerClick}
          >
            <FlowerSVG 
              size={80} 
              color={index % 2 === 0 ? "#E6B800" : "#2D5016"} 
            />
            {hoveredFlower === index && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-fade-in">
                🌺 Browse Products
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Interactive Bird */}
      <div 
        className={`absolute top-1/4 right-1/4 cursor-pointer transition-all duration-500 animate-float ${
          hoveredBird ? 'scale-110' : ''
        }`}
        style={{ animationDelay: '1s', zIndex: 15 }}
        onMouseEnter={() => setHoveredBird(true)}
        onMouseLeave={() => setHoveredBird(false)}
        onClick={onBirdClick}
      >
        <BirdSVG size={60} />
        {hoveredBird && (
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium whitespace-nowrap animate-fade-in">
            🐦 About Khan House
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/10 to-transparent"></div>
      
      {/* Floating Petals */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-petal-dance opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        >
          <div className="w-3 h-3 bg-accent rounded-full"></div>
        </div>
      ))}

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-primary/60 animate-fade-in">
        <p className="text-lg font-light">Click flowers to shop • Click the bird to learn more</p>
      </div>
    </div>
  )
}

function FlowerSVG({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-lg">
      {/* Petals */}
      {[0, 72, 144, 216, 288].map((rotation, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="30"
          rx="8"
          ry="20"
          fill={color}
          transform={`rotate(${rotation} 50 50)`}
          className="animate-pulse"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
      {/* Center */}
      <circle cx="50" cy="50" r="8" fill="#2D5016" />
      {/* Stem */}
      <rect x="48" y="50" width="4" height="30" fill="#2D5016" />
      {/* Leaves */}
      <ellipse cx="40" cy="65" rx="6" ry="12" fill="#2D5016" transform="rotate(-30 40 65)" />
      <ellipse cx="60" cy="70" rx="6" ry="12" fill="#2D5016" transform="rotate(30 60 70)" />
    </svg>
  )
}

function BirdSVG({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-lg">
      {/* Body */}
      <ellipse cx="50" cy="60" rx="20" ry="15" fill="#E6B800" />
      {/* Head */}
      <circle cx="45" cy="40" r="12" fill="#E6B800" />
      {/* Wing */}
      <ellipse cx="60" cy="55" rx="15" ry="8" fill="#2D5016" transform="rotate(20 60 55)" />
      {/* Beak */}
      <polygon points="35,38 30,40 35,42" fill="#FF6B35" />
      {/* Eye */}
      <circle cx="42" cy="37" r="2" fill="#000" />
      {/* Tail */}
      <ellipse cx="75" cy="65" rx="12" ry="5" fill="#2D5016" transform="rotate(30 75 65)" />
    </svg>
  )
}