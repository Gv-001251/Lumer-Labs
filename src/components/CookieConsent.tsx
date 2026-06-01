import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  
  // Custom preferences state
  const [preferences, setPreferences] = useState({
    essential: true, // Always active
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('lumer-cookie-consent');
    if (!consent) {
      // Delay presentation slightly for premium entrance effect
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('lumer-cookie-consent', 'all');
    localStorage.setItem('lumer-cookie-preferences', JSON.stringify({ essential: true, analytics: true, marketing: true }));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('lumer-cookie-consent', 'none');
    localStorage.setItem('lumer-cookie-preferences', JSON.stringify({ essential: true, analytics: false, marketing: false }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('lumer-cookie-consent', 'custom');
    localStorage.setItem('lumer-cookie-preferences', JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-[420px] w-[calc(100vw-32px)] bg-[#0c101d]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out animate-slide-up">
      {!showCustomize ? (
        <div className="flex flex-col items-center text-center">
          {/* Cookie Icon */}
          <div className="mb-4 text-white p-3 bg-white/5 rounded-full">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z"></path>
              <path d="M8.5 8.5v.01"></path>
              <path d="M16 15.5v.01"></path>
              <path d="M12 12v.01"></path>
              <path d="M11 16v.01"></path>
              <path d="M6 13v.01"></path>
            </svg>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Cookie Consent</h3>
          
          <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
            Lumer Labs uses cookies to enhance your browsing experience, analyze site traffic, and support our strategic digital operations. By clicking "Accept All", you agree to our use of all cookies. You can manage preferences below or review our{' '}
            <a href="/privacy-policy" className="text-blue-400 hover:underline transition-all">
              Privacy Policy
            </a>.
          </p>

          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={handleAcceptAll}
              className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 rounded-full text-white text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98]"
            >
              Accept All
            </button>
            <button
              onClick={handleRejectAll}
              className="w-full py-3 px-6 bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 rounded-full text-white text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98]"
            >
              Reject All
            </button>
            <button
              onClick={() => setShowCustomize(true)}
              className="w-full py-3 px-6 bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 rounded-full text-white/80 hover:text-white text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98]"
            >
              Customize Cookies
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => setShowCustomize(false)}
              className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <h3 className="text-xl font-bold text-white tracking-tight">Customize Cookie Preferences</h3>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            {/* Essential Category */}
            <div className="flex items-start justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex flex-col gap-1 max-w-[80%]">
                <span className="text-sm font-semibold text-white">Essential Cookies</span>
                <span className="text-xs text-slate-400 font-light leading-relaxed">
                  Required to enable basic website functions, secure navigation, and session caching.
                </span>
              </div>
              <div className="flex items-center pt-1">
                <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Always Active
                </span>
              </div>
            </div>

            {/* Analytics Category */}
            <div className="flex items-start justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex flex-col gap-1 max-w-[80%]">
                <span className="text-sm font-semibold text-white">Analytics & Performance</span>
                <span className="text-xs text-slate-400 font-light leading-relaxed">
                  Allows us to monitor site performance, traffic trends, and page statistics to improve UI flow.
                </span>
              </div>
              <button
                onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  preferences.analytics ? 'bg-blue-600' : 'bg-slate-700'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    preferences.analytics ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Marketing Category */}
            <div className="flex items-start justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex flex-col gap-1 max-w-[80%]">
                <span className="text-sm font-semibold text-white">Marketing & Advertising</span>
                <span className="text-xs text-slate-400 font-light leading-relaxed">
                  Used to optimize advertising campaigns, coordinate promotions, and share offers.
                </span>
              </div>
              <button
                onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  preferences.marketing ? 'bg-blue-600' : 'bg-slate-700'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    preferences.marketing ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          <button
            onClick={handleSavePreferences}
            className="w-full py-3 px-6 bg-white/15 hover:bg-white/25 border border-white/10 hover:border-white/20 rounded-full text-white text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98]"
          >
            Save Preferences
          </button>
        </div>
      )}
    </div>
  );
}
