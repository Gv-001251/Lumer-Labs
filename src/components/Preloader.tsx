"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(preloaderRef.current, {
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            duration: 0.8,
            ease: "power3.inOut",
            onComplete,
          });
        },
      });

      // Animate logo reveal
      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate progress line
      tl.to(
        lineRef.current,
        {
          width: "100%",
          duration: 2.2,
          ease: "power2.inOut",
        },
        0.3
      );

      // Counter animation
      tl.to(
        {},
        {
          duration: 2.2,
          ease: "power2.inOut",
          onUpdate: function () {
            setCount(Math.round(this.progress() * 100));
          },
        },
        0.3
      );

      // Fade counter up
      tl.to(
        counterRef.current,
        {
          opacity: 0.08,
          duration: 0.3,
        },
        0.3
      );
    }, preloaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="ambient-glow ambient-glow--blue" />
      <div
        ref={logoRef}
        className="preloader-logo"
        style={{ opacity: 0, transform: "translateY(10px)" }}
      >
        LUMER LABS
      </div>
      <div ref={counterRef} className="preloader-counter" style={{ opacity: 0 }}>
        {String(count).padStart(3, "0")}
      </div>
      <div className="preloader-line-wrap">
        <div ref={lineRef} className="preloader-line" />
      </div>
    </div>
  );
}
