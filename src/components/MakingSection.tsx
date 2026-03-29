
import React from 'react';
import { Video, Play } from 'lucide-react';

const MakingSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-card via-dark-bg to-purple/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Video className="text-purple w-8 h-8 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple to-coral bg-clip-text text-transparent">
              Behind the Scenes
            </h2>
            <Play className="text-coral w-8 h-8 ml-3" />
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Watch the journey of your birthday surprise come to life! 👩‍💻
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-card rounded-2xl p-8 shadow-lg border border-purple/20">
            <div className="text-center mb-8">
              <Video className="w-20 h-20 text-coral mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Website Creation Journey</h3>
              <p className="text-white/80 text-lg mb-8">
                I recorded the entire process of building this website for you, so you can see how it all came together with love.
              </p>
            </div>
            
            {/* Video Placeholder */}
            <div className="relative bg-gradient-to-br from-purple/20 to-coral/20 rounded-xl overflow-hidden border-2 border-purple/30">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center">
                  <video
                    src="/bts.mp4"
                    controls
                    className="w-full max-w-2xl mx-auto rounded-xl shadow-lg my-8"
                    poster=""
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-coral to-purple rounded-xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-3">Designed with hands, built with heart</h4>
              <p className="text-lg leading-relaxed">
                This isn’t just a website, it’s a digital love letter for your birthday, with each part holding a piece of what you mean to me, in the way you deserve to be remembered.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakingSection;
