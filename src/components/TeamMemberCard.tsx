import { useState } from 'react';

type LabelPos = 'above-left' | 'below-left' | 'right-below' | 'left-above' | 'right-above';

interface TeamMemberCardProps {
  name: string;
  role: string;
  img?: string | null;
  width?: number;
  height?: number;
  labelPos?: LabelPos;
}

export default function TeamMemberCard({
  name,
  role,
  img = null,
  width = 150,
  height = 210,
  labelPos = 'above-left',
}: TeamMemberCardProps) {
  const [hovered, setHovered] = useState(false);

  const photoCard = (
    <div
      className="rounded-2xl overflow-hidden flex-shrink-0 transition-all duration-500 ease-out"
      style={{
        width,
        height,
        background: 'rgba(15,25,35,0.85)',
        // Subtle lift + glow on hover
        transform: hovered ? 'translateY(-4px)' : 'translateY(0px)',
        boxShadow: hovered
          ? '0 20px 40px rgba(13, 122, 114, 0.35)'
          : '0 4px 16px rgba(0,0,0,0.3)',
      }}
    >
      {img ? (
        <img src={img} alt={name} className="w-full h-full object-cover object-top" />
      ) : (
        <div className="w-full h-full bg-[#0d7a72]" />
      )}
    </div>
  );

  const textBlock = (
    <div
      className="flex flex-col items-start gap-1 min-w-[80px] transition-all duration-500 ease-out"
      style={{
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'translateY(0px)' : 'translateY(8px)',
        pointerEvents: hovered ? 'auto' : 'none',
      }}
    >
      <span className="text-white font-medium text-sm tracking-wide whitespace-nowrap">
        {name}
      </span>
      {/* Animated underline */}
      <div
        className="h-px bg-white/50 transition-all duration-500 ease-out"
        style={{
          width: hovered ? '100%' : '0%',
          transitionDelay: hovered ? '150ms' : '0ms',
        }}
      />
      <span className="text-white/70 text-xs font-light whitespace-nowrap">{role}</span>
    </div>
  );

  const wrapper = (className: string, children: React.ReactNode) => (
    <div
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );

  switch (labelPos) {
    case 'above-left':
      return wrapper('flex flex-col items-start gap-2 cursor-pointer', <>
        {textBlock}
        {photoCard}
      </>);

    case 'below-left':
      return wrapper('flex flex-col items-start gap-2 cursor-pointer', <>
        {photoCard}
        {textBlock}
      </>);

    case 'right-below':
      return wrapper('flex flex-row items-end gap-3 cursor-pointer', <>
        {photoCard}
        {textBlock}
      </>);

    case 'left-above':
      return wrapper('flex flex-col items-start gap-2 cursor-pointer', <>
        {textBlock}
        {photoCard}
      </>);

    case 'right-above':
      return wrapper('flex flex-col items-end gap-2 cursor-pointer', <>
        {textBlock}
        {photoCard}
      </>);

    default:
      return null;
  }
}