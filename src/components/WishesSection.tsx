
import React, { useState, useRef, useEffect } from 'react';
import { Heart, Sparkles, Star, Laugh, Phone, MessageCircle, Camera, Coffee, Music, Gift } from 'lucide-react';

const WishesSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const memoryCards = [
    {
      id: 1,
      icon: Laugh,
      title: "Shawarma",
      emoji: "��",
      frontText: "The Pickle Incident",
      backText: "The first ever date with you. Nallla irunchii priyankaa first time nee naa mattum jolly aah pesitu saptu🥲🧿💗. Annaikii alagaa irunthaa brown color dress laa💗. Apa apa pooolam priyaaa itheey maaariii🙂",
      color: "from-yellow-400 to-orange-500",
      sparkleColor: "text-yellow-300",
      photo: "/eat.jpg"
    },
    {
      id: 2,
      icon: Phone,
      title: "3 movie",
      emoji: "🌙",
      frontText: "3AM Heart-to-Heart",
      backText: "Aiiiioooooo annaikii 3 movie ku pona apa Nee theatre la free hair vittalaaa priyankaaa chaaaaa avloooo nallllaaa irunthaaaa d. Naa yepdriii athaa unakuuu sollluveennn avloooo alagaaaaa irunthaaaaa😭😭🤌💗🧿. Naalaaam unna paathute okantuuu iruntheeen🫠",
      color: "from-indigo-400 to-purple-600",
      sparkleColor: "text-indigo-300",
      photo: "/3.jpg"
    },
    {
      id: 3,
      icon: MessageCircle,
      title: "Exam Time",
      emoji: "📱",
      frontText: "Viral Chaos",
      backText: "Yepdii priyankaaaa schl la irunthee exam time naa crt aah onnu senthuruvoom evloo gap la irunthaalum🤣🤣🤣. Ana nallla irukum priyankaa, nee call panni polambarathuu namba onna padikarathuu yelllam😂🤟🏻. Yenakulaam siripaa irukum, nee phn pannitu naan padikiren line la iru ntu padipala apalam😂😂",
      color: "from-pink-400 to-rose-600",
      sparkleColor: "text-pink-300",
      photo: "/study.jpg"
    },
    {
      id: 4,
      icon: Gift,
      title: "Noodles",
      emoji: "🕵️",
      frontText: "Operation Surprise",
      backText: "Aiiiooo anaikii alaagaaa irunthaaa priyankaa💗noodles kuduka vantha apa lab laa okantuu. Nee starting la pakkavee illaa naa mantharam potta irunthen odanee pathutaa yenakulam nee yenna paatha odanee oreeeh kusii😂💃. Naa bonda ta laaam solliitu irunthen ivaa yen d ivloooo alagaaa irukaaa nuu😭💗💗💗💗🧿",
      color: "from-emerald-400 to-teal-600",
      sparkleColor: "text-emerald-300",
      photo: "/noodles.jpg"
    },
    {
      id: 5,
      icon: Coffee,
      title: "The First Meet",
      emoji: "☕",
      frontText: "Spill Chronicles",
      backText: "yenakuuu nambaa first meet panna moment naaley, yenna kuptu vechi neenga ragging pandra maari kettingale yaaru azhaga iruka nu sollunu athan niyabagam varuthu😂😂, anaa priyankaa naa sollren yennoda schl life best years naa athu 11,12th than becoz of you guyss🥹 12th lam one of my best maari aairichuuu🥹💗",
      color: "from-amber-400 to-orange-600",
      sparkleColor: "text-amber-300",
      photo: "/ugirls.jpg"
    },
    {
      id: 6,
      icon: Camera,
      title: "The love from you guyss",
      emoji: "📸",
      frontText: "Candid Chaos",
      backText: "Innu marakka mudilaa 11th leave la ungala naanum agalya vum yemathanome vera schl pooren nu🤣🤣🤣 aiioooo neengalum nambitingaa yenkagaa neengalum last day apa letters laam kuduthingaa🥹🫶🏻💗 anaa avloo short time neengaa avloo close aaitingaa🫂💗 I loveee youu guyssss🥹🫂🫂",
      color: "from-cyan-400 to-blue-600",
      sparkleColor: "text-cyan-300",
      photo: "/grp.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dark-bg via-dark-card to-purple/10 relative overflow-hidden min-h-screen">
      <audio ref={audioRef} src="/Mental-Manadhil.mp3" loop />
      {/* Twinkling stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating stars */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Star className="w-1 h-1 text-gold" />
          </div>
        ))}
        
        {/* Gradient bursts */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`burst-${i}`}
            className="absolute rounded-full opacity-5 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              background: `radial-gradient(circle, ${
                ['#FF6B6B', '#B794F6', '#F6E05E', '#FF8E8E'][Math.floor(Math.random() * 4)]
              } 0%, transparent 70%)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Sparkle effects */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-bounce-gentle opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 1}s`
            }}
          >
            <Sparkles className="w-2 h-2 text-coral" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-coral w-8 h-8 mr-3 animate-bounce-gentle" />
            <h2 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-coral via-pink to-purple bg-clip-text text-transparent">
              ✨ Moments That Mattered
            </h2>
            <Heart className="text-pink w-8 h-8 ml-3 animate-float" />
          </div>
          {/* Music toggle */}
          <button
            onClick={() => {
              setIsPlaying((prev) => {
                const next = !prev;
                if (audioRef.current) {
                  if (next) {
                    audioRef.current.play();
                  } else {
                    audioRef.current.pause();
                  }
                }
                return next;
              });
            }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple to-pink rounded-full text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <Music className="w-5 h-5 mr-2" />
            {isPlaying ? 'Pause Memory Lane Music' : 'Play Memory Lane Music'} 🎵
          </button>
        </div>

        {/* Memory Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {memoryCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group perspective-1000 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full h-72 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className={`absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br ${card.color} p-6 text-white shadow-xl backface-hidden flex flex-col items-center justify-center text-center border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300`}>
                    {card.photo && (
                      <img
                        src={card.photo}
                        alt={card.title}
                        className="object-cover w-full h-32 rounded-xl mb-3"
                      />
                    )}
                    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                    <div className="absolute bottom-4 text-sm opacity-75 flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      Hover for the story
                      <Heart className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className={`absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br ${card.color} p-6 text-white shadow-xl rotate-y-180 backface-hidden flex flex-col justify-center text-center border border-white/20`}>
                    <p className={`${[3,4,5,6].includes(card.id) ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'} font-normal leading-relaxed break-words`}>
                      {card.backText}
                    </p>
                    <div className="mt-4 flex justify-center">
                      <Heart className="w-4 h-4 text-white/80 animate-bounce-gentle" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
