import { ArrowLeft, Leaf, Heart, Star } from 'lucide-react'

interface AboutPageProps {
  onBack: () => void
}

export function AboutPage({ onBack }: AboutPageProps) {
  return (
    <div className="min-h-screen p-6 md:p-12">
      {/* Header */}
      <div className="flex items-center mb-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-primary hover:text-accent transition-colors duration-300 group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Back to Garden</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            About Khan House
          </h1>
          <p className="text-xl text-primary/70 font-light leading-relaxed max-w-2xl mx-auto">
            Where nature meets artistry, and every plant tells a story of beauty, 
            sustainability, and avant-garde design.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-semibold text-primary">
              Our Story
            </h2>
            <p className="text-primary/80 leading-relaxed">
              Founded in the heart of an urban jungle, Khan House emerged from a vision 
              to transform spaces through the power of living art. We believe that plants 
              are not just decorations, but companions that breathe life into our daily existence.
            </p>
            <p className="text-primary/80 leading-relaxed">
              Our avant-garde approach combines traditional botanical knowledge with 
              contemporary design principles, creating collections that challenge 
              conventional gardening and celebrate the extraordinary in the ordinary.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-6xl text-center mb-4 animate-float">🌱</div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-accent mb-2">500+</div>
                <div className="text-primary/70">Unique Species</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-primary mb-3">
              Sustainability
            </h3>
            <p className="text-primary/70 text-sm leading-relaxed">
              Every plant is ethically sourced and cultivated with respect for our planet's ecosystems.
            </p>
          </div>

          <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-xl font-semibold text-primary mb-3">
              Passion
            </h3>
            <p className="text-primary/70 text-sm leading-relaxed">
              Our love for botanical beauty drives us to curate only the most extraordinary specimens.
            </p>
          </div>

          <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-primary mb-3">
              Excellence
            </h3>
            <p className="text-primary/70 text-sm leading-relaxed">
              We maintain the highest standards in plant care, packaging, and customer experience.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12 mb-16">
          <h2 className="font-display text-3xl font-semibold text-primary mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-primary/80 leading-relaxed max-w-3xl mx-auto">
            To cultivate a world where the boundary between nature and art dissolves, 
            where every space becomes a canvas for living beauty, and where the simple 
            act of caring for plants becomes a meditation on life itself.
          </p>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="font-display text-2xl font-semibold text-primary mb-6">
            Connect With Us
          </h2>
          <p className="text-primary/70 mb-8">
            Join our community of plant enthusiasts and artistic souls
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
              Newsletter
            </button>
            <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-300">
              Instagram
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}