"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Research",
    description:
      "Deep-dive into your market, users, and competitive landscape. We uncover the insights that shape winning strategies.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Define the roadmap, technology stack, and creative direction. Every decision is backed by data and vision.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Craft premium visual experiences with meticulous attention to typography, motion, and interaction design.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Build with cutting-edge technology — clean architecture, optimized performance, and scalable infrastructure.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Deploy, monitor, and optimize. We ensure a flawless launch and continued evolution of your digital product.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo(
        ".process-heading",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-heading",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Timeline line growth
      gsap.fromTo(
        ".process-timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );

      // Step cards stagger
      gsap.fromTo(
        ".process-step",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Step dots
      gsap.fromTo(
        ".process-dot",
        { scale: 0 },
        {
          scale: 1,
          duration: 0.4,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-[-200px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,108,247,0.04)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="container-xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-text-muted" />
          <span className="text-[0.7rem] font-semibold tracking-[4px] uppercase text-text-muted">
            Process
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-20">
          <h2
            className="process-heading text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] tracking-[-0.02em] max-w-[500px]"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            How we bring ideas{" "}
            <span className="gradient-text">to life</span>
          </h2>
          <p className="text-text-secondary text-base max-w-[380px]">
            A proven methodology refined across 50+ projects — from initial
            concept to global launch.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] md:left-[40px] top-0 bottom-0 w-[1px] bg-border-glass">
            <div
              className="process-timeline-line absolute top-0 left-0 w-full bg-gradient-to-b from-accent-blue to-accent-purple"
              style={{ height: "100%", transformOrigin: "top" }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="process-step relative flex items-start gap-8 md:gap-12 pl-[56px] md:pl-[80px] py-8 group"
              >
                {/* Dot */}
                <div className="process-dot absolute left-[22px] md:left-[34px] top-10 w-3 h-3 rounded-full border-2 border-accent-blue bg-bg-primary z-10 group-hover:bg-accent-blue group-hover:shadow-[0_0_20px_rgba(79,125,245,0.4)] transition-all duration-500" />

                {/* Content */}
                <div className="flex-1 group-hover:translate-x-2 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[0.65rem] font-bold tracking-[2px] text-accent-blue/50">
                      {step.number}
                    </span>
                    <h3
                      className="text-2xl md:text-3xl font-bold text-text-primary group-hover:text-white transition-colors"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-[500px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
