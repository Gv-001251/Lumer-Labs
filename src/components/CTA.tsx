"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".cta-label",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );

      tl.fromTo(
        ".cta-title",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        0.15
      );

      tl.fromTo(
        ".cta-desc",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.4
      );

      tl.fromTo(
        ".cta-button",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        0.6
      );

      tl.fromTo(
        ".cta-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "power2.inOut" },
        0.3
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,125,245,0.04)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent cta-line" style={{ transformOrigin: "center" }} />

      <div className="container-xl relative z-10 text-center">
        {/* Label */}
        <div className="cta-label flex items-center justify-center gap-3 mb-8">
          <span className="w-6 h-[1px] bg-text-muted" />
          <span className="text-[0.7rem] font-semibold tracking-[4px] uppercase text-text-muted">
            Get In Touch
          </span>
          <span className="w-6 h-[1px] bg-text-muted" />
        </div>

        {/* Title */}
        <h2
          className="cta-title text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6 max-w-[800px] mx-auto"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          Let&apos;s Build Something{" "}
          <span className="gradient-text">Extraordinary</span>
        </h2>

        {/* Description */}
        <p className="cta-desc text-lg text-text-secondary max-w-[500px] mx-auto mb-12">
          Ready to transform your digital presence? Let&apos;s start a
          conversation about your next project.
        </p>

        {/* Button */}
        <div className="cta-button flex justify-center">
          <MagneticButton href="mailto:hello@lumerlabs.com" strength={0.4}>
            <span className="group inline-flex items-center gap-3 px-12 py-5 rounded-full text-[0.8rem] font-bold tracking-[2px] uppercase bg-gradient-to-r from-accent-blue to-accent-purple text-white transition-all duration-500 hover:shadow-[0_0_60px_rgba(79,125,245,0.35)] hover:scale-[1.02]">
              Start a Project
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
