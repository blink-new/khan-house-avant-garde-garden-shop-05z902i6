import { useState } from 'react'
import InteractiveGarden from './components/InteractiveGarden'
import ProductShop from './components/ProductShop'
import AboutPage from './components/AboutPage'

function App() {
  const [currentView, setCurrentView] = useState<'garden' | 'shop' | 'about'>('garden')

  return (
    <div className="min-h-screen garden-gradient overflow-hidden">
      {currentView === 'garden' && (
        <InteractiveGarden 
          onFlowerClick={() => setCurrentView('shop')}
          onBirdClick={() => setCurrentView('about')}
        />
      )}
      {currentView === 'shop' && (
        <ProductShop onBack={() => setCurrentView('garden')} />
      )}
      {currentView === 'about' && (
        <AboutPage onBack={() => setCurrentView('garden')} />
      )}
    </div>
  )
}

export default App