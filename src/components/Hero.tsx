"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "50+", label: "Projects\nDelivered" },
  { value: "30+", label: "Happy\nClients" },
  { value: "8+", label: "Industries\nImpacted" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Label
      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.2
      );

      // Title words stagger
      const words = titleRef.current?.querySelectorAll(".hero-word");
      if (words) {
        tl.fromTo(
          words,
          { opacity: 0, y: 60, rotateX: -15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.08,
            ease: "power4.out",
          },
          0.4
        );
      }

      // Description
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.0
      );

      // Buttons
      tl.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        1.2
      );

      // Stats
      const statItems = statsRef.current?.querySelectorAll(".stat-card");
      if (statItems) {
        tl.fromTo(
          statItems,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          1.4
        );
      }

      // Scroll indicator
      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        1.8
      );

      // Parallax on scroll
      gsap.to(titleRef.current, {
        y: -80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleWords = "Designing Intelligent Digital Experiences.".split(" ");

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "140px", paddingBottom: "80px" }}
    >
      {/* Ambient effects */}
      <div className="absolute top-[-300px] right-[-200px] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(79,125,245,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,108,247,0.04)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      {/* Grid lines (decorative) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-white" />
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white" />
        <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-white" />
      </div>

      <div className="container-xl relative z-10">
        <div className="max-w-[900px]">
          {/* Label */}
          <div
            ref={labelRef}
            className="flex items-center gap-3 mb-8 opacity-0"
          >
            <span className="w-8 h-[1px] bg-gradient-to-r from-accent-blue to-accent-purple" />
            <span className="text-[0.7rem] font-semibold tracking-[4px] uppercase text-text-secondary">
              AI-Powered Creative Studio
            </span>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-8"
            style={{
              fontFamily: "var(--font-satoshi)",
              perspective: "1000px",
            }}
          >
            {titleWords.map((word, i) => (
              <span
                key={i}
                className={`hero-word inline-block mr-[0.3em] ${
                  word === "Intelligent" || word === "Experiences."
                    ? "gradient-text"
                    : ""
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p
            ref={descRef}
            className="text-lg leading-relaxed text-text-secondary max-w-[540px] mb-12 opacity-0"
          >
            We fuse artificial intelligence with creative excellence to build
            immersive digital products, brands, and experiences that redefine
            what&apos;s possible.
          </p>

          {/* Buttons */}
          <div ref={buttonsRef} className="flex gap-4 flex-wrap opacity-0">
            <MagneticButton href="#work">
              <span className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-[0.75rem] font-bold tracking-[1.5px] uppercase bg-gradient-to-r from-accent-blue to-accent-purple text-white transition-all duration-400 hover:shadow-[0_0_40px_rgba(79,125,245,0.3)]">
                View Our Work
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </MagneticButton>
            <MagneticButton href="#about">
              <span className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[0.75rem] font-semibold tracking-[1.5px] uppercase text-text-primary border border-border-glass hover:border-border-hover hover:bg-bg-glass transition-all duration-400 backdrop-blur-sm">
                About Us
              </span>
            </MagneticButton>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex gap-0 mt-24 w-fit rounded-2xl overflow-hidden border border-border-glass bg-bg-glass backdrop-blur-xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card px-8 py-6 text-center border-r border-border-glass last:border-r-0 hover:bg-[rgba(79,125,245,0.04)] transition-colors duration-300"
            >
              <div
                className="text-2xl font-bold text-text-primary mb-1"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {stat.value}
              </div>
              <div className="text-[0.6rem] font-semibold tracking-[2px] uppercase text-text-muted whitespace-pre-line leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute left-10 bottom-10 flex items-center gap-3 opacity-0"
        style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
      >
        <span className="text-[0.6rem] font-semibold tracking-[3px] uppercase text-text-muted">
          Scroll
        </span>
        <div className="w-10 h-[1px] bg-text-muted relative overflow-hidden">
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-accent-blue to-accent-purple animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
