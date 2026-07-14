import type { Metadata } from 'next';
import { ServicesClient } from '@/components/ServicesClient';

export const metadata: Metadata = {
  title: 'Our Services | Lumer Labs',
  description: "Explore Lumer Labs' digital solutions: custom web and mobile app development, brand identity design, SEO growth strategies, and intelligent AI automation.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
