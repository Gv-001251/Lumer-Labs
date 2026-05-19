import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Research',
    description: 'Deep dive into your market, users, and competitive landscapes. We uncover the insights that shape winning strategies.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Define the roadmap, technology stack. and creative direction. Every decision is backed by data and vision.'
  },
  {
    number: '03',
    title: 'Design',
    description: 'Craft premium visual experiences with meticulous attention to typography, motion, and interaction design.'
  },
  {
    number: '04',
    title: 'Development',
    description: 'Build with cutting-edge technology — clean architecture. optimized performance. and scalable infrastructure.'
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Deploy. monitor. and optimize. We ensure a flawless launch and continued evolution of your digital product.'
  }
];

const MethodsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current || !containerRef.current || !maskRef.current) return;
    
    let ctx = gsap.context(() => {
      const track = trackRef.current;
      const mask = maskRef.current;
      
      const getScrollAmount = () => {
        return -(track!.scrollHeight - mask!.clientHeight);
      };

      gsap.to(track, {
        y: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track!.scrollHeight}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          refreshPriority: 2,
        }
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="methods"
      ref={containerRef} 
      className="bg-[#050505] bg-[url('/stars-bg.jpg')] bg-cover bg-center bg-no-repeat text-white py-32 min-h-screen relative overflow-hidden flex flex-col"
    >
      <div className="max-w-6xl mx-auto w-full px-4 md:px-12 flex flex-col shrink-0">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">How we bring ideas to Life</h2>
          <p className="text-blue-500 text-lg md:text-lg max-w-3xl mx-auto">
            A methodology refined across 50+ projects from initial concept to global launch
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto mb-8">
          <div className="flex items-center gap-4 text-gray-400">
            <div className="w-12 h-px bg-gray-500"></div>
            <span className="uppercase tracking-widest text-sm">Process</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl mx-auto relative h-[400px]">
          {/* Scroll Progress Line Indicator */}
          <div className="hidden md:block absolute right-0 top-0 w-px h-full bg-white/10">
            {/* You could animate a progress bar here if you wanted to */}
          </div>

          <div ref={maskRef} className="w-full h-full overflow-hidden mask-fade">
            <div ref={trackRef} className="flex flex-col gap-24 py-[40px]">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-24 w-full">
                  {/* Left Column */}
                  <div className="w-full md:w-1/3 shrink-0 flex flex-col items-start pt-2">
                    <div className="text-[#2D2DD9] font-bold text-7xl mb-4 leading-none">{step.number}</div>
                    <h3 className="text-4xl font-bold">{step.title}</h3>
                  </div>

                  {/* Right Column */}
                  <div className="w-full md:w-2/3 flex items-center">
                    <p className="text-2xl md:text-3xl leading-relaxed text-gray-200">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodsSection;