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
              {[
                { label: 'Home', href: '/#home' },
                { label: 'Services', href: '/#services' },
                { label: 'Methods', href: '/#methods' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/#contact' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}

              {/* More Links Hover Dropdown */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">
                  <span>More Links</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:rotate-180"><polyline points="6 9 12 15 18 9"/></svg>
                </button>

                {/* Glassmorphic Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#090b11]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-top z-[9999]">
                  {[
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lumerlabsglh/' },
                    { label: 'X (Twitter)', href: 'https://x.com/lumerlabs' },
                    { label: 'Instagram', href: 'https://www.instagram.com/lumer_labs/' }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
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
