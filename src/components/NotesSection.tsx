
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Heart } from 'lucide-react';

const NotesSection: React.FC = () => {
  const [expandedNotes, setExpandedNotes] = useState<{ [key: number]: boolean }>({});
  const MAX_LENGTH = 250;
  const notes = [
    {
      id: 1,
      message: `Priyankaaaa. What have you done to me😭. Why I'm sooooo obsessed with you priyankaaa😭😭💗. Nee kathaa solliyee yenna mayakitaaa nu nenaikiren🤣🤣 nee katha solla kulla un kai aati aati pesuvalaaa athu nalla irukkuum. Nee pesaratha vida un kai neraiyaaa pesuuumm🤌🤌😂 nalllaaa irukum athalaaam💗. Yennavoo therlaa nee sonna mattum keepen yethunaaalum nee sollrathulam seiven yen WHYY??🥲 "Nee sollatha sollil naa valavillaiyaa, Adi unnai kandu kaadhal kondu nenjam saaigirathe".
Apram unnodaa alagulaaa🥲. Nee avloooo alagaaa irupaaaa🧚‍♂️🧿 Namba gang yeah alaga irupom athu vera visiyam irunthaalum if it is one I CHOOSE YOU💗🎀.
Each day, I'm falling for you even more💗`,
      author: "Me",
      color: "from-coral to-pink"
    },
    {
      id: 2,
      message: `Yen moonja paathu illaa Yenna pakkamaiye yen manasa pathi purinjavaa neee🥲🫂. Naa archana va miss pandran nu. Nee annaiki ketta apa illa nu sonnen ana nee yenaku theriyum anithaaa un manasulaa yenna irukunu sonnaa paaaru chaaaaaa🤌❤️‍🩹. Priyankaaaaaa but i misssss youuu priyankaaaaa🥲🫂🫂.
Vaaa nambaaa schl yeah pooovom🥲. Chaaa namakunu oru thesam maari irunthom. Screte ah padichathu pesarathuu yellameee nallla irunchiiii ❤️‍🩹`,
      author: "Me",
      color: "from-purple to-lavender"
    },
    {
      id: 3,
      message:  `Sometimes I get possessive, Priyankaaa. But I didn’t show it to you, because that’s not really me. But now, it’s just overflowing🥲.

      Whenever you send me those notes about Chandru, it feels like you’re putting so much effort and time into writing your daily beautiful moments, it’s so manifesting Priyankaaa🫠🤌💗
      At that times, I used to feel, “Why wasn’t I born a boy? I could’ve been your boyfriend.” 😭
      I couldn’t say anything then, so I just used to say “nallaa irungaa” and all that, did you notice that?
      
      And after that practical exam, you, me, Bonda, and Archana were in the green building. You and Archana were clicking so many photos and videos, and I was the photographer.
      You don’t know how I felt at that time 🥲.
      I was like, “Yaaraa unnaiyum ennaiyum edukka maattaangalaa...” it really felt that way 🥲
      
      There are soo many moments felt like this🥲. 
      This phase of mine... it feels different, even for me. But I don’t know, it’s too much to hide🥲. `,
      author: "Me",
      color: "from-gold to-coral"
    },
    {
      id: 4,
      message: "Namba schl gang la starting la irunthee unnaa mattum than priyankaa roombaa pudikum yen yennane theriyathu avloo pudikum thittaa thonathu adikaa thonathu yethumee, mothathula rooombaa pudikum😌💗. Anaa yenaku ipa aachiriyama irukku yepdi naa unaku yen guide aah asalta kuduthen nu yenaku padika vechikama 😂😂. Naa angaa varthuku munnadi varaikum naa yaarukumee solli kuduthathee illaa ungalukuu than naan first teacher aah irunthu irukken😂. Apa than yenaku therinjathu naa nalla solli tharuven nu😌. Athalaaam irukkum priyankaaa naa solli kuduthathu aparam exam mudistu vanthu yentaa solluvingalaa nallllaa panni irukken nu apa yenakuuu oru santhosam kedaikum paarunga💆‍♀️",
      author: "Me",
      color: "from-pink to-purple"
    }
  ];

  const noteRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const expandedId = Object.keys(expandedNotes).find(
        (id) => expandedNotes[Number(id)]
      );
      if (expandedId) {
        const ref = noteRefs.current[Number(expandedId)];
        if (ref && !ref.contains(event.target as Node)) {
          setExpandedNotes((prev) => ({ ...prev, [Number(expandedId)]: false }));
        }
      }
    }
    if (Object.values(expandedNotes).some(Boolean)) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedNotes]);

  return (
    <section className="py-20 bg-gradient-to-br from-dark-bg via-dark-card to-purple/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="text-coral w-8 h-8 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-coral to-purple bg-clip-text text-transparent">
              My Notes to You
            </h2>
            <Heart className="text-pink w-8 h-8 ml-3" />
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Personal messages from my heart to yours! 💌
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note, index) => (
            note.id === 3 ? (
              <div key={note.id} className="flex justify-center w-full">
                <div
                  className="animate-scale-in hover:scale-105 transition-all duration-300 w-full max-w-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  ref={el => (noteRefs.current[note.id] = el)}
                >
                  <div className={`bg-gradient-to-br ${note.color} p-6 rounded-2xl shadow-lg text-white transform hover:-translate-y-2 transition-all duration-300 min-h-[250px] flex flex-col justify-between border border-white/10`}>
                    <div>
                      <div className="flex items-start mb-4">
                        <MessageCircle className="w-6 h-6 mr-2 mt-1 opacity-80" />
                        <p className="text-lg leading-relaxed font-medium">
                          {note.message.length > MAX_LENGTH && !expandedNotes[note.id] ? (
                            <>
                              {note.message.slice(0, MAX_LENGTH)}...{' '}
                              <button
                                className="text-white underline hover:text-pink focus:outline-none"
                                onClick={() => setExpandedNotes(prev => ({ ...prev, [note.id]: true }))}
                              >
                                Read More
                              </button>
                            </>
                          ) : (
                            note.message
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                      <Heart className="w-5 h-5 fill-current opacity-80" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
            <div
              key={note.id}
              className="animate-scale-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
                ref={el => (noteRefs.current[note.id] = el)}
            >
              <div className={`bg-gradient-to-br ${note.color} p-6 rounded-2xl shadow-lg text-white transform hover:-translate-y-2 transition-all duration-300 min-h-[250px] flex flex-col justify-between border border-white/10`}>
                <div>
                  <div className="flex items-start mb-4">
                    <MessageCircle className="w-6 h-6 mr-2 mt-1 opacity-80" />
                    <p className="text-lg leading-relaxed font-medium">
                        {note.message.length > MAX_LENGTH && !expandedNotes[note.id] ? (
                          <>
                            {note.message.slice(0, MAX_LENGTH)}...{' '}
                            <button
                              className="text-white underline hover:text-pink focus:outline-none"
                              onClick={() => setExpandedNotes(prev => ({ ...prev, [note.id]: true }))}
                            >
                              Read More
                            </button>
                          </>
                        ) : (
                          note.message
                        )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                  <Heart className="w-5 h-5 fill-current opacity-80" />
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotesSection;
