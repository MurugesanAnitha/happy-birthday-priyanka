import React, { useState } from 'react';
import { Play, Video, Heart, X } from 'lucide-react';

const VideosSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  // --- VIDEO LINKS CONFIGURATION ---
  // FIXED: Converted your view links to direct download links!
  const videoLinks = {
    youAndMe: "https://drive.google.com/uc?export=download&id=1bN_FOOmw0hQOTMDn-MDasZ7a2EQQ92Mh",
    funny: "https://drive.google.com/uc?export=download&id=1sGMPoRXJ-OplQEkfKXAqldrSmmK4wy32",
    aval: "https://drive.google.com/uc?export=download&id=1yVvZRz4TcMroLdDWjZuBTLQjDFEkHBm4",
    youBoth: "https://drive.google.com/uc?export=download&id=1or-jTq6b_ScOwRsrmdci4nwLfL63i9Kd"
  };

  const videos = [
    {
      id: 1,
      thumbnail: "/placeholder.svg",
      title: "The first ever video of us🥹❤️‍🩹",
      duration: "0:37",
      src: videoLinks.youAndMe
    },
    {
      id: 2,
      thumbnail: "/placeholder.svg",
      title: "💃🏻🫶🏻",
      duration: "0:38",
      src: videoLinks.funny
    },
    {
      id: 3,
      thumbnail: "/placeholder.svg",
      title: "Itha naa solliyee aganum nee avloo azhaguu 🫠💗",
      duration: "0:21",
      src: videoLinks.aval
    },
    {
      id: 4,
      thumbnail: "/placeholder.svg",
      title: "The cute part of you both 🫶🏻💗",
      duration: "0:35",
      src: videoLinks.youBoth
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
                    <video
                      src={video.src}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm"
                      muted
                      playsInline
                      preload="metadata"
                      poster={video.poster || undefined}
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
                  <p className="text-gray-600 leading-relaxed">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for video preview */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg">
            <div className="relative max-w-4xl mx-4 w-full">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-coral transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="bg-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {videos.find(v => v.id === selectedVideo)?.title}
                </h3>
                {videos.find(v => v.id === selectedVideo)?.src ? (
                  <video
                    src={videos.find(v => v.id === selectedVideo)?.src}
                    controls
                    style={{ width: "100%", maxHeight: "70vh" }}
                    onClick={e => {
                      const video = e.target as HTMLVideoElement;
                      if (video.requestFullscreen) video.requestFullscreen();
                    }}
                  />
                ) : (
                  <p className="text-gray-600 mb-6">
                    Video player would be here! This is just a beautiful preview for now 📹
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideosSection;
