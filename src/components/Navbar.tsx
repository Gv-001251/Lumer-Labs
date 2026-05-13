"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        ref={navRef}
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[rgba(6,6,10,0.9)] backdrop-blur-2xl border-b border-border-glass"
            : "py-5 bg-transparent"
        }`}
        style={{ paddingLeft: "clamp(20px, 4vw, 60px)", paddingRight: "clamp(20px, 4vw, 60px)" }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 font-[var(--font-satoshi)] font-bold text-sm tracking-[3px] uppercase text-text-primary"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
              <span className="text-white text-xs font-black">L</span>
            </div>
            LUMER LABS
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-10 list-none">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[0.75rem] font-medium tracking-[2px] uppercase text-text-secondary hover:text-text-primary transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-accent-blue to-accent-purple group-hover:w-full transition-all duration-500" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <MagneticButton href="#contact">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[0.7rem] font-semibold tracking-[1.5px] uppercase text-text-primary border border-border-glass hover:border-accent-blue/40 transition-all duration-400">
                Start a Project
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </MagneticButton>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-text-primary"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[1.5px] bg-text-primary"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-text-primary"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[999] bg-bg-primary/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-3xl font-bold tracking-[4px] uppercase text-text-primary hover:text-accent-blue transition-colors"
                style={{ fontFamily: "var(--font-satoshi)" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
