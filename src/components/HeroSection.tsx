
import React from 'react';
import { Heart, Gift, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-bg via-dark-card to-purple/20 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Heart className="text-coral w-8 h-8 opacity-60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce-gentle">
          <Gift className="text-gold w-6 h-6 opacity-70" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '1s' }}>
          <Sparkles className="text-purple w-7 h-7 opacity-50" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-bounce-gentle" style={{ animationDelay: '2s' }}>
          <Heart className="text-pink w-5 h-5 opacity-60" />
        </div>
      </div>

      <div className="text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-scale-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Happiest Birthday
            <span className="block bg-gradient-to-r from-gold to-coral bg-clip-text text-transparent">
              Priyankaaaa!
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            This website is dedicated to a few of our memories that I wish remains forever. "just like my undying love for you💗"
          </p>
        </div>

        {/* Birthday cake emoji with animation */}
        <div className="mt-12 animate-bounce-gentle">
          <span className="text-6xl sm:text-8xl">🎂</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
