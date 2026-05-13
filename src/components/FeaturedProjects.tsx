"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "NEXORA",
    type: "Brand Identity & AI Platform",
    tags: ["Strategy", "Branding", "AI"],
    image: "/images/nexora.png",
    year: "2026",
  },
  {
    name: "FINOVA",
    type: "Web Experience & SaaS",
    tags: ["UI/UX", "Development", "SaaS"],
    image: "/images/finova.png",
    year: "2026",
  },
  {
    name: "AETHERIX",
    type: "AI Product Design",
    tags: ["Product", "AI", "Design"],
    image: "/images/orbital.png",
    year: "2025",
  },
  {
    name: "VELORA",
    type: "Creative Campaign",
    tags: ["Video", "Social", "Content"],
    image: "/images/velora.png",
    year: "2025",
  },
  {
    name: "PULSAR",
    type: "Digital Platform",
    tags: ["Strategy", "Marketing", "Web"],
    image: "/images/pulsar.png",
    year: "2025",
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-heading",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-heading",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".project-row",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-list",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="section-padding relative">
      <div className="container-xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-text-muted" />
          <span className="text-[0.7rem] font-semibold tracking-[4px] uppercase text-text-muted">
            Featured Work
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
          <h2
            className="projects-heading text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Selected <span className="gradient-text">projects</span>
          </h2>
          <a
            href="#"
            className="text-[0.72rem] font-semibold tracking-[1.5px] uppercase text-text-secondary hover:text-accent-blue transition-colors flex items-center gap-2"
          >
            View All Projects
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>

        {/* Project List */}
        <div className="projects-list">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className="project-row group relative border-t border-border-glass cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-between py-8 md:py-10 px-2 md:px-6 relative z-10">
                {/* Left: Name + Type */}
                <div className="flex items-center gap-6 md:gap-12 flex-1">
                  <span className="text-[0.65rem] font-bold tracking-[2px] text-text-muted hidden sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="text-xl md:text-3xl font-bold text-text-primary group-hover:text-white transition-colors tracking-[-0.01em]"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {project.name}
                    </h3>
                    <p className="text-[0.75rem] text-text-secondary mt-1">
                      {project.type}
                    </p>
                  </div>
                </div>

                {/* Center: Tags */}
                <div className="hidden md:flex items-center gap-3 flex-1 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.6rem] font-medium tracking-[1px] uppercase text-text-muted px-3 py-1 rounded-full border border-border-glass"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Right: Year + Arrow */}
                <div className="flex items-center gap-6">
                  <span className="text-[0.75rem] text-text-muted hidden sm:block">
                    {project.year}
                  </span>
                  <div className="w-10 h-10 rounded-xl border border-border-glass flex items-center justify-center text-text-muted group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:rotate-0">
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
                  </div>
                </div>
              </div>

              {/* Hover background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-bg-glass to-transparent" />

              {/* Floating image on hover */}
              <motion.div
                className="absolute right-20 top-1/2 -translate-y-1/2 w-[200px] h-[250px] rounded-2xl overflow-hidden pointer-events-none z-20 hidden lg:block"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{
                  opacity: hoveredIndex === i ? 1 : 0,
                  scale: hoveredIndex === i ? 1 : 0.8,
                  x: hoveredIndex === i ? 0 : 20,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </motion.div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-border-glass" />
        </div>
      </div>
    </section>
  );
}
