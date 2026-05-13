"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "AI Development",
    description:
      "Custom AI solutions, machine learning models, and intelligent automation that transform how businesses operate and innovate.",
    tags: ["Machine Learning", "NLP", "Computer Vision", "Automation"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 0 0 1 1h1a4 4 0 0 1 0 8h-1a1 1 0 0 0-1 1v1a4 4 0 0 1-8 0v-1a1 1 0 0 0-1-1H6a4 4 0 0 1 0-8h1a1 1 0 0 0 1-1V6a4 4 0 0 1 4-4z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "SaaS Products",
    description:
      "End-to-end SaaS product design and development — from concept validation to scalable cloud-native platforms.",
    tags: ["Product Design", "Cloud Architecture", "APIs", "Scalability"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Web Experiences",
    description:
      "Immersive, performance-optimized websites and web applications with cinematic design and seamless interactions.",
    tags: ["UI/UX", "Frontend", "Animation", "WebGL"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Video Production",
    description:
      "Cinematic video content, motion design, and AI-enhanced post-production for brands that demand visual excellence.",
    tags: ["Motion Design", "3D Animation", "Post-Production", "VFX"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Social Media",
    description:
      "Strategic social media management, content calendars, and data-driven campaigns that build engaged communities.",
    tags: ["Strategy", "Content", "Analytics", "Growth"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Graphic Design",
    description:
      "Premium visual identities, brand systems, and graphic assets crafted with meticulous attention to detail.",
    tags: ["Branding", "Identity", "Print", "Digital"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-heading",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-heading",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="section-padding relative">
      <div className="container-xl">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-text-muted" />
          <span className="text-[0.7rem] font-semibold tracking-[4px] uppercase text-text-muted">
            Services
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
          <h2
            className="service-heading text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] tracking-[-0.02em] max-w-[600px]"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Capabilities that{" "}
            <span className="gradient-text">drive transformation</span>
          </h2>
          <p className="text-text-secondary text-base max-w-[400px]">
            From AI-powered products to cinematic visual content — we deliver
            end-to-end creative technology solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card group relative p-8 rounded-2xl border border-border-glass bg-bg-card overflow-hidden cursor-pointer"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top,rgba(79,125,245,0.06)_0%,transparent_70%)]" />

              <div className="relative z-10">
                {/* Icon + Number */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl border border-border-glass bg-bg-glass flex items-center justify-center text-text-secondary group-hover:text-accent-blue group-hover:border-accent-blue/30 transition-all duration-500">
                    {service.icon}
                  </div>
                  <span className="text-[0.7rem] font-bold tracking-[2px] text-text-muted">
                    {service.id}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-text-primary mb-3 group-hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.65rem] font-medium tracking-[1px] uppercase text-text-muted px-3 py-1 rounded-full border border-border-glass"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-8 flex justify-end">
                  <div className="w-10 h-10 rounded-xl border border-border-glass flex items-center justify-center text-text-muted group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple group-hover:text-white group-hover:border-transparent transition-all duration-500">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
