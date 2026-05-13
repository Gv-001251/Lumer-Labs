"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Large statement reveal
      gsap.fromTo(
        ".about-statement",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-statement",
            start: "top 85%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stagger the philosophy items
      gsap.fromTo(
        ".about-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax on the large number
      gsap.fromTo(
        ".about-year",
        { y: 60 },
        {
          y: -60,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding relative">
      <div className="container-xl">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-20">
          <span className="w-6 h-[1px] bg-text-muted" />
          <span className="text-[0.7rem] font-semibold tracking-[4px] uppercase text-text-muted">
            About
          </span>
        </div>

        {/* Main editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Large statement */}
          <div className="lg:col-span-7">
            <h2
              className="about-statement text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-8"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              We believe in the{" "}
              <span className="gradient-text">power of AI</span>{" "}
              to transform creative vision into{" "}
              <span className="text-text-secondary italic">
                extraordinary reality.
              </span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[520px]">
              Lumer Labs is a collective of designers, engineers, and
              strategists who bridge the gap between artificial intelligence and
              human creativity. Every project we undertake pushes the boundaries
              of what digital experiences can be.
            </p>
          </div>

          {/* Right: Stats + Philosophy */}
          <div className="lg:col-span-5 relative">
            {/* Decorative year */}
            <div
              className="about-year absolute -top-10 right-0 text-[8rem] font-black text-white/[0.02] leading-none pointer-events-none select-none"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              2026
            </div>

            <div className="about-grid space-y-6 relative z-10">
              {[
                {
                  number: "01",
                  title: "Innovation First",
                  desc: "We leverage cutting-edge AI and emerging technologies to solve complex creative challenges.",
                },
                {
                  number: "02",
                  title: "Design Excellence",
                  desc: "Every pixel is intentional. We craft interfaces that are both beautiful and functionally superior.",
                },
                {
                  number: "03",
                  title: "Strategic Impact",
                  desc: "Our work isn't just aesthetic — it drives measurable business outcomes and digital transformation.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="about-item group p-6 rounded-2xl border border-border-glass bg-bg-card hover:border-accent-blue/20 hover:bg-bg-glass transition-all duration-500"
                >
                  <div className="flex items-start gap-5">
                    <span className="text-[0.7rem] font-bold tracking-[2px] text-accent-blue/60 mt-1">
                      {item.number}
                    </span>
                    <div>
                      <h3
                        className="text-base font-semibold text-text-primary mb-2"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
