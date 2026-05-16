// components/ContactButton.tsx
import { forwardRef } from 'react';

interface ContactButtonProps {
  href?: string;
  label?: string;
}

const ContactButton = forwardRef<HTMLAnchorElement, ContactButtonProps>(
  ({ href = '#!', label = 'Contact' }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/100 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 mt-4 cursor-pointer"
      >
        {label}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
          <g id="Arrow-Insert">
            <path id="Union" fill="currentColor" d="M18 7H9.41406l9.29294 9.293 -1.414 1.414L8 8.41406V17H6V6l0.00488 -0.10254C6.05621 5.39333 6.48232 5 7 5h11z" strokeWidth="1" />
          </g>
        </svg>
      </a>
    );
  }
);

ContactButton.displayName = 'ContactButton';
export default ContactButton;