import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'AI Act Compliance Blog | Insights & Updates',
  description: 'Expert insights on AI Act compliance, EU regulation, high-risk AI systems, and compliance automation. Stay updated on AI governance and regulatory updates.',
  alternates: {
    canonical: `https://${siteConfig.domain}/blog`,
  },
  openGraph: {
    type: 'website',
    url: `https://${siteConfig.domain}/blog`,
    title: 'AI Act Compliance Blog | Insights & Updates',
    description: 'Expert insights on AI Act compliance, EU regulation, high-risk AI systems, and compliance automation.',
    images: [
      {
        url: `/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'AI Act Compliance Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Act Compliance Blog | Insights & Updates',
    description: 'Expert insights on AI Act compliance, EU regulation, high-risk AI systems, and compliance automation.',
    images: [`https://${siteConfig.domain}/og-image.jpg`],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
