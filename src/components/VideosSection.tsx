import React, { useState } from 'react';
import { Play, Video, Heart, X } from 'lucide-react';

const VideosSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  // --- VIDEO LINKS CONFIGURATION ---
  // Replace the IDs below with your YouTube video IDs (the part after v= or youtu.be/)
  const videoIds = {
    youAndMe: "jOgAP5Kg_3E", // Example ID, replace me!
    funny: "NeTK-GrYmDE",    // Example ID, replace me!
    aval: "dfqK9yiAH6g",     // Example ID, replace me!
    youBoth: "MCNL4wM7pZg"   // Example ID, replace me!
  };

  const videos = [
    {
      id: 1,
      thumbnail: "/placeholder.svg",
      title: "The first ever video of us🥹❤️‍🩹",
      duration: "0:37",
      videoId: videoIds.youAndMe
    },
    {
      id: 2,
      thumbnail: "/placeholder.svg",
      title: "💃🏻🫶🏻",
      duration: "0:38",
      videoId: videoIds.funny
    },
    {
      id: 3,
      thumbnail: "/placeholder.svg",
      title: "Itha naa solliyee aganum nee avloo azhaguu 🫠💗",
      duration: "0:21",
      videoId: videoIds.aval
    },
    {
      id: 4,
      thumbnail: "/placeholder.svg",
      title: "The cute part of you both 🫶🏻💗",
      duration: "0:35",
      videoId: videoIds.youBoth
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-coral/10 via-purple/10 to-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Video className="text-coral w-8 h-8 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-coral to-gold bg-clip-text text-transparent">
              In Every Frame
            </h2>
            <Heart className="text-purple w-8 h-8 ml-3" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="animate-scale-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative group cursor-pointer" onClick={() => setSelectedVideo(video.id)}>
                   <div className="w-full h-64 bg-black flex items-center justify-center relative overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 blur-[2px]"
                      alt={video.title}
                    />
                    <div className="z-10 relative flex flex-col items-center">
                      <div className="bg-white/90 backdrop-blur-lg rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-coral fill-current" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-lg text-white px-3 py-1 rounded-full text-sm font-medium">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for video preview */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-coral transition-colors"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="bg-white rounded-2xl p-4 sm:p-8 text-center shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                  {videos.find(v => v.id === selectedVideo)?.title}
                </h3>
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-inner bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videos.find(v => v.id === selectedVideo)?.videoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideosSection;
