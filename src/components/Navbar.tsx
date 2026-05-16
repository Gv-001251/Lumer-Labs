import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Simple entrance animation for the navbar and logo
    gsap.from([logoRef.current, navRef.current], {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
      stagger: 0.1,
    });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] pointer-events-none">
        {/* Logo at Top Left */}
        <div 
          ref={logoRef} 
          className="fixed left-6 sm:left-12 top-10 flex items-center gap-3 pointer-events-auto z-[1000]"
        >
          <img src="/lumer_labs_logo_svg.svg" alt="LumerLabs Logo" className="w-12 h-12" />
          <span className="text-white font-semibold text-2xl tracking-tight">LumerLabs</span>
        </div>
      <div className="max-w-[1440px] mx-auto relative h-32 px-6 sm:px-12 pointer-events-none">
        

        {/* Centered Navigation Links in Glass Pill */}
        <div className="flex justify-center pt-10 pointer-events-none">
          <nav 
            ref={navRef}
            className="flex items-center justify-center px-8 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl pointer-events-auto z-[1000]"
          >
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Services', 'About Us', 'More Links'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-slate-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
