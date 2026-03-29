
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import NotesSection from '../components/NotesSection';
import PicsSection from '../components/PicsSection';
import VideosSection from '../components/VideosSection';
import WishesSection from '../components/WishesSection';
import MakingSection from '../components/MakingSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 64; // Height of fixed navigation
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'notes', 'pics', 'videos', 'wishes', 'making'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = section === 'home' ? 
          { offsetTop: 0 } : 
          document.getElementById(section);
        
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation activeSection={activeSection} onSectionChange={scrollToSection} />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="notes">
          <NotesSection />
        </section>
        
        <section id="pics">
          <PicsSection />
        </section>
        
        <section id="videos">
          <VideosSection />
        </section>
        
        <section id="wishes">
          <WishesSection />
        </section>
        
        <section id="making">
          <MakingSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-coral to-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-bounce-gentle mb-6">
            <span className="text-4xl">🎂</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Happy Birthday My Love!</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
          Just for your reaction, your expression, and your happiness from the surprises , I’d do anything😌. It’s all worth it🫡. Stay as happy always as you are right now.
          Love you the mossstttt, Priyankaaaa💗
          </p>
          <div className="text-sm opacity-75">
            Made with full of love💗 | 2025
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
