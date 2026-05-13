"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Dribbble", href: "#" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative border-t border-border-glass">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />

      <div className="container-xl footer-content py-16 md:py-20">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                <span className="text-white text-xs font-black">L</span>
              </div>
              <span
                className="text-sm font-bold tracking-[3px] uppercase"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                Lumer Labs
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-[320px] mb-6">
              AI-powered creative technology studio designing intelligent
              digital experiences that redefine what&apos;s possible.
            </p>
            <a
              href="mailto:hello@lumerlabs.com"
              className="text-sm text-text-secondary hover:text-accent-blue transition-colors"
            >
              hello@lumerlabs.com
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[0.7rem] font-semibold tracking-[3px] uppercase text-text-muted mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-accent-blue group-hover:w-full transition-all duration-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-4">
            <h4 className="text-[0.7rem] font-semibold tracking-[3px] uppercase text-text-muted mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {link.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border-glass">
          <p className="text-[0.7rem] text-text-muted tracking-[1px]">
            © 2026 Lumer Labs. All rights reserved.
          </p>
          <p className="text-[0.7rem] text-text-muted tracking-[1px]">
            Designed & Built with Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
}
