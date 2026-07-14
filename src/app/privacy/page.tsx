import type { Metadata } from 'next';
import { PrivacyClient } from '@/components/PrivacyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lumer Labs',
  description: 'Read the privacy policy of Lumer Labs. Learn how we collect, protect, and utilize user information to maintain full transparency.',
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
