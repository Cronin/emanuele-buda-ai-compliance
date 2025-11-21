import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Act Compliance in 30 Days | Emanuele Buda',
  description: 'Turn your high-risk AI systems from liability to documented assets. Expert AI Act compliance automation. August 2026 deadline. €35M fines. Only 9 months left.',
  keywords: [
    'AI Act compliance',
    'EU AI Act',
    'high-risk AI systems',
    'AI regulation',
    'compliance automation',
    'AI documentation',
    'risk management',
    'Emanuele Buda',
    'GRC',
    'Tesla',
    'AI Act consultant'
  ],
  authors: [{ name: 'Emanuele Buda' }],
  openGraph: {
    title: 'AI Act Compliance in 30 Days',
    description: 'Turn your high-risk AI systems from liability to documented assets. Expert compliance automation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Act Compliance in 30 Days',
    description: 'Turn your high-risk AI systems from liability to documented assets.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
