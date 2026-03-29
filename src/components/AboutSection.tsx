
import React from 'react';
import { Star, Heart, Sparkles, Gift } from 'lucide-react';

const AboutSection: React.FC = () => {
  const timelineEvents = [
    {
      year: "First Meeting",
      title: "The Day We Met",
      description: "Who knew that random day would lead to such an incredible friendship? From the moment we started talking, I knew you were special! ✨",
      icon: Star,
      color: "from-coral to-pink"
    },
    {
      year: "First Adventure",
      title: "Our Epic Journey Begins",
      description: "Remember our first big adventure together? That's when I realized you're not just a friend, you're family. The laughter, the memories, pure magic! 🌟",
      icon: Heart,
      color: "from-purple to-lavender"
    },
    {
      year: "Growing Stronger",
      title: "Through Thick and Thin",
      description: "You've been there through all my ups and downs. Your support and understanding mean everything to me. True friendship at its finest! 💪",
      icon: Sparkles,
      color: "from-gold to-coral"
    },
    {
      year: "Today",
      title: "Celebrating You",
      description: "Here we are today, celebrating another year of your amazing existence! You bring so much joy, laughter, and love into this world. Happy Birthday! 🎉",
      icon: Gift,
      color: "from-pink to-purple"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dark-bg via-dark-card to-purple/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float opacity-30">
          <div className="w-32 h-32 bg-gradient-to-r from-coral to-pink rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-bounce-gentle opacity-20">
          <div className="w-24 h-24 bg-gradient-to-r from-purple to-lavender rounded-full blur-lg"></div>
        </div>
        <div className="absolute top-1/2 right-1/3 animate-float opacity-25" style={{ animationDelay: '2s' }}>
          <div className="w-40 h-40 bg-gradient-to-r from-gold to-coral rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Heart className="text-coral w-8 h-8 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              About You
            </h2>
            <Sparkles className="text-gold w-8 h-8 ml-3" />
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            The story of an incredible person and our beautiful friendship! 📖
          </p>
        </div>

        {/* Mobile-first Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-coral to-purple rounded-full"></div>
          
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <div key={index} className={`relative flex items-center mb-8 md:mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                {/* Mobile layout */}
                <div className="w-full md:w-1/2 md:pr-8 md:pl-8 px-4">
                  <div className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className={`bg-gradient-to-r ${event.color} p-4 md:p-6 rounded-2xl shadow-lg text-white hover:scale-105 transition-transform duration-300 backdrop-blur-lg bg-opacity-90 ${isLeft ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                      <div className="flex items-center justify-center md:justify-start mb-3">
                        <Icon className="w-6 h-6 mr-2" />
                        <span className="font-bold text-lg">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                      <p className="leading-relaxed text-sm md:text-base">{event.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Desktop timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-coral">
                  <Icon className="w-6 h-6 text-coral" />
                </div>
                
                <div className="hidden md:block w-1/2"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-coral to-purple rounded-2xl p-6 md:p-8 text-white max-w-3xl mx-auto shadow-xl backdrop-blur-lg bg-opacity-90 mx-4 md:mx-auto">
            <h4 className="text-xl md:text-2xl font-bold mb-4">A Message From the Heart</h4>
            <p className="text-base md:text-lg leading-relaxed">
              "You are one of those rare souls who makes the world brighter just by being in it. Your friendship is a gift I treasure every single day. Thank you for being authentically, wonderfully YOU! 💕"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
