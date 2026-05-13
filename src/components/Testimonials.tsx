"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Lumer Labs transformed our vision into a digital experience that exceeded every expectation. Their attention to detail and creative intelligence is unmatched.",
    name: "Sarah Chen",
    role: "CEO, NovaTech Solutions",
    initials: "SC",
  },
  {
    quote:
      "Working with Lumer Labs felt like collaborating with a team from the future. They brought AI-driven innovation to every aspect of our brand.",
    name: "Marcus Rivera",
    role: "Founder, Drift Digital",
    initials: "MR",
  },
  {
    quote:
      "The quality of design and development we received was genuinely world-class. Lumer Labs is the gold standard for creative technology studios.",
    name: "Aisha Patel",
    role: "CMO, Elevate Brands",
    initials: "AP",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonials-heading",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-heading",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative">
      <div className="container-xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-text-muted" />
          <span className="text-[0.7rem] font-semibold tracking-[4px] uppercase text-text-muted">
            Testimonials
          </span>
        </div>

        <h2
          className="testimonials-heading text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-16"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          What our <span className="gradient-text">clients say</span>
        </h2>

        {/* Testimonial Card */}
        <div className="max-w-[800px] mx-auto">
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="p-10 md:p-14 rounded-3xl border border-border-glass bg-bg-glass backdrop-blur-xl relative overflow-hidden"
              >
                {/* Glass glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />

                {/* Quote mark */}
                <div className="text-5xl font-bold text-accent-blue/10 mb-6 leading-none"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  &ldquo;
                </div>

                <p
                  className="text-lg md:text-xl text-text-primary leading-relaxed mb-10 font-medium"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {testimonials[active].quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                    <span className="text-sm font-bold text-white">
                      {testimonials[active].initials}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">
                      {testimonials[active].name}
                    </div>
                    <div className="text-[0.75rem] text-text-secondary">
                      {testimonials[active].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-400 ${
                  i === active
                    ? "bg-accent-blue w-6"
                    : "bg-text-muted/30 hover:bg-text-muted"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
