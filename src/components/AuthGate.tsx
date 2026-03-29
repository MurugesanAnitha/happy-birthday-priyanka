
import React, { useState, useEffect } from 'react';
import { Lock, Heart, ShieldCheck, Mail } from 'lucide-react';

interface AuthGateProps {
  children: React.ReactNode;
}

const ALLOWED_EMAILS = [
  'anithapraveen2266@gmail.com',
  'priyankaranganathan005@gmail.com'
];

const AuthGate: React.FC<AuthGateProps> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAuth = localStorage.getItem('birthday_auth_session');
    if (savedAuth && ALLOWED_EMAILS.includes(savedAuth)) {
      setIsAuthorized(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    
    if (ALLOWED_EMAILS.includes(normalizedEmail)) {
      localStorage.setItem('birthday_auth_session', normalizedEmail);
      setIsAuthorized(true);
      setError('');
    } else {
      setError('Access Denied: This email is not on the guest list! ✋');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coral"></div>
      </div>
    );
  }

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4 overflow-hidden relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-purple/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-coral/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-md w-full animate-scale-in">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-coral to-purple mb-6 shadow-lg shadow-coral/20">
              <Lock className="text-white w-10 h-10" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">A Special Message Awaits</h1>
            <p className="text-white/60">Only for special eyes. Please verify yourself.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-white/80 ml-1">
                Your Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-200 px-4 py-3 rounded-xl text-sm flex items-center">
                <Lock className="w-4 h-4 mr-2" />
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-coral to-purple text-white font-bold py-4 rounded-2xl shadow-lg shadow-coral/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center group"
            >
              Enter the Celebration
              <ShieldCheck className="ml-2 w-5 h-5 group-hover:animate-pulse" />
            </button>
          </form>

          <div className="mt-12 text-center text-white/40 flex items-center justify-center">
            <Heart className="w-4 h-4 mr-2 text-coral fill-coral/20" />
            <span className="text-sm font-medium tracking-widest uppercase">Strictly Private</span>
            <Heart className="w-4 h-4 ml-2 text-coral fill-coral/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthGate;
