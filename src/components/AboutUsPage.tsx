import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TeamMemberCard from './TeamMemberCard';

const values = [
  {
    number: '01',
    title: 'Innovation First',
    description:
      'We leverage cutting-edge AI and emerging technologies to solve complex creative challenges.',
    align: 'left',
  },
  {
    number: '02',
    title: 'Design Excellence',
    description:
      'Every pixel is intentional. We craft interfaces that are both beautiful and functionally superior.',
    align: 'right',
  },
  {
    number: '03',
    title: 'Strategic Impact',
    description:
      "Our work isn't just aesthetic — it drives measurable business outcomes and digital transformation.",
    align: 'left',
  },
];

/**
 * Team member placement — matches the uploaded design exactly.
 * Positions are % of the 100vh container.
 *
 * labelPos: where the name text sits relative to the photo card
 *   'above-left'  → name above, left-aligned with card
 *   'right-below' → name to the right of card, below mid-point
 *   'below-left'  → name below, left-aligned
 *   'left-mid'    → name to the left of card, vertically centred
 *   'right-mid'   → name to the right of card, vertically centred
 */
const team = [
  {
    name: 'Latesh',
    role: 'Co-Founder & Backend Developer',
    img: '/team/latesh.png',
    position: { top: '5%', left: '22%' } as React.CSSProperties,
    labelPos: 'above-left' as const,
  },
  {
    name: 'NavaGeevithan',
    role: 'Founder & Marketing Strategist',
    img: '/team/navageevithan.png',
    position: { top: '33%', left: '3%' } as React.CSSProperties,
    labelPos: 'right-below' as const,
  },
  {
    name: 'Athulya',
    role: 'Content Writer',
    img: '/team/athulya.png',
    position: { top: '54%', left: '20%' } as React.CSSProperties,
    labelPos: 'right-above' as const,
  },
  {
    name: 'Sriman',
    role: 'Video Editor & Videographer',
    img: '/team/sriman.png',
    position: { top: '10%', right: '7%' } as React.CSSProperties,
    labelPos: 'left-above' as const,
  },
  {
    name: 'Hemachandran',
    role: 'Co-Founder, AI Developer & Designer',
    img: '/team/hemachandran.png',
    position: { top: '50%', right: '9%' } as React.CSSProperties,
    labelPos: 'right-below' as const,
  },
];

// Card dimensions passed to TeamMemberCard
const CARD_W = 180;
const CARD_H = 210;

export default function AboutUsPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const introRef   = useRef<HTMLParagraphElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);
  const teamRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50, opacity: 0, duration: 1, ease: 'power3.out',
      });
      gsap.from(introRef.current, {
        y: 30, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out',
      });
      gsap.from('.value-card', {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
      });
      // Team: fade in only — no movement
      gsap.from('.team-member', {
        opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: teamRef.current, start: 'top 75%' },
      });
      gsap.from('.team-heading', {
        scale: 0.88, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: teamRef.current, start: 'top 75%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full flex flex-col items-center justify-start px-6 sm:px-12 pt-40 pb-0 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/stars-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* ─── About Us ─── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1
          ref={titleRef}
          className="text-white font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight mb-12"
        >
          About Us
        </h1>

        <p
          ref={introRef}
          className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-20"
        >
          <span className="text-white font-semibold">LumerLabs</span> is a collective of designers,
          engineers, and strategists who bridge the gap between artificial intelligence and human
          creativity.
          <br /><br />
          Every project we undertake pushes the boundaries of what digital experiences can be.
        </p>

        {/* Value cards */}
        <div ref={cardsRef} className="w-full flex flex-col gap-10 pb-32">
          {values.map((v) => (
            <div
              key={v.number}
              className={`value-card flex flex-col sm:flex-row items-start gap-6 ${
                v.align === 'right' ? 'sm:flex-row-reverse sm:ml-auto' : ''
              } max-w-lg ${v.align === 'right' ? 'self-end' : 'self-start'}`}
            >
              <span
                className="text-[4rem] sm:text-[5rem] font-bold leading-none tracking-tighter select-none"
                style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}
              >
                {v.number}
              </span>
              <div className={`flex flex-col gap-2 ${v.align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
                <h3 className="text-white font-semibold text-xl sm:text-2xl">{v.title}</h3>
                <p className="text-slate-400 text-lg sm:text-base leading-relaxed max-w-sm">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Meet The Team ─── */}
      <div
        ref={teamRef}
        className="relative z-10 w-full"
        style={{ height: '100vh', minHeight: '680px' }}
      >
        {/* Centre heading */}
        <div className="team-heading absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-white font-bold text-6xl sm:text-7xl md:text-8xl leading-tight tracking-tight text-center">
            Meet<br />The<br />Team
          </h2>
        </div>

        {/* Individual members — absolutely placed using TeamMemberCard */}
        {team.map((member) => (
          <div
            key={member.name}
            className="team-member absolute"
            style={member.position}
          >
            <TeamMemberCard
              name={member.name}
              role={member.role}
              img={member.img}
              width={CARD_W}
              height={CARD_H}
              labelPos={member.labelPos}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
