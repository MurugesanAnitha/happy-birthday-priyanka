
import React, { useState } from 'react';
import { Camera, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const PicsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const photos = [
    {
      id: 1,
      url: "youmesun.jpeg",
      caption: "Where it all began 🥹💗",
      
    },
    {
      id: 2,
      url: "child.jpg",
      caption: "When the Sunshine Born 🌝💗",
      
    },
    {
      id: 3,
      url: "cp.jpg",
      caption: "Beautiful moments like these flowers 🌸",
     
    },
    {
      id: 4,
      url: "flowers.jpg",
      caption: "His roses, her glowing smile 🌸",
    
    },
   
    {
      id: 6,
      url: "gp.jpg",
      caption: "Our glam squad, no filter needed 💅❤️",
      
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple/10 via-pink/10 to-coral/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Camera className="text-purple w-8 h-8 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple to-coral bg-clip-text text-transparent">
            Frames of You 
            </h2>
            <Heart className="text-coral w-8 h-8 ml-3" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            More than pictures it’s pieces of you.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="flex justify-center w-full">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {photos.map((photo, index) => (
                <div key={photo.id} className="w-full flex-shrink-0">
                  <div className="relative">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="mx-auto w-44 h-80 sm:w-56 sm:h-96 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{photo.caption}</h3>
                      <p className="text-lg opacity-90">{photo.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-lg rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-lg rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PicsSection;
