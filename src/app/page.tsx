"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Preloader from "@/components/Preloader";
import GrainOverlay from "@/components/GrainOverlay";

// Dynamic imports for code splitting
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const FeaturedProjects = dynamic(
  () => import("@/components/FeaturedProjects"),
  { ssr: false }
);
const Process = dynamic(() => import("@/components/Process"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});
const CTA = dynamic(() => import("@/components/CTA"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      {/* Preloader */}
      {loading && <Preloader onComplete={handleLoadComplete} />}

      {/* Grain texture overlay */}
      <GrainOverlay />

      {/* Ambient glows */}
      <div className="ambient-glow ambient-glow--blue" />
      <div className="ambient-glow ambient-glow--purple" />

      {/* Main content */}
      {!loading && (
        <SmoothScroll>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <FeaturedProjects />
            <Process />
            <Testimonials />
            <CTA />
          </main>
          <Footer />
        </SmoothScroll>
      )}
    </>
  );
}
