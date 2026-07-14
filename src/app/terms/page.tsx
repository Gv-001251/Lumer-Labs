import type { Metadata } from 'next';
import { TermsClient } from '@/components/TermsClient';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Lumer Labs',
  description: 'Review the terms and conditions governing the relationship between Lumer Labs and clients using our digital development and consulting services.',
};

export default function TermsPage() {
  return <TermsClient />;
}
