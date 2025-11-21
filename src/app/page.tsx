import Hero from '@/components/Hero';
import UrgencyBadge from '@/components/UrgencyBadge';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import CVSection from '@/components/CVSection';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: `https://${siteConfig.domain}`,
  },
};

export default function Home() {
  // JSON-LD Schema Markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": `https://${siteConfig.domain}`,
    "logo": `https://${siteConfig.domain}/logo.png`,
    "image": `https://${siteConfig.domain}/og-image.jpg`,
    "founder": {
      "@type": "Person",
      "name": siteConfig.author.name,
      "jobTitle": siteConfig.author.title,
      "email": siteConfig.author.email,
      "telephone": siteConfig.author.phone,
      "url": siteConfig.author.linkedin,
      "alumniOf": "Tesla",
      "knowsAbout": [
        "AI Act Compliance",
        "GRC (Governance, Risk & Compliance)",
        "Information Security",
        "ISO 27001",
        "Project Management",
        "High-Risk AI Systems"
      ],
      "hasCredential": siteConfig.author.credentials.map(cred => ({
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": cred
      }))
    },
    "areaServed": {
      "@type": "Place",
      "name": "European Union"
    },
    "serviceType": siteConfig.services.primary,
    "provider": {
      "@type": "Person",
      "name": siteConfig.author.name
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": siteConfig.services.primary,
    "name": "AI Act Compliance Automation",
    "description": siteConfig.services.description,
    "provider": {
      "@type": "ProfessionalService",
      "name": siteConfig.name,
      "url": `https://${siteConfig.domain}`
    },
    "areaServed": {
      "@type": "Place",
      "name": "European Union"
    },
    "offers": {
      "@type": "Offer",
      "price": "50000",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "50000",
        "priceCurrency": "EUR",
        "billingDuration": "P30D"
      },
      "description": siteConfig.services.deliverable,
      "availability": "https://schema.org/InStock",
      "url": `https://${siteConfig.domain}`,
      "itemOffered": {
        "@type": "Service",
        "name": siteConfig.services.primary,
        "description": siteConfig.services.features.join(', ')
      }
    },
    "termsOfService": `https://${siteConfig.domain}/#terms`
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.author.name,
    "jobTitle": siteConfig.author.title,
    "description": `${siteConfig.author.experience}. Expert in AI Act compliance, GRC, and information security.`,
    "email": siteConfig.author.email,
    "telephone": siteConfig.author.phone,
    "url": `https://${siteConfig.domain}`,
    "image": `https://${siteConfig.domain}/emanuele-buda-photo.jpg`,
    "sameAs": [
      siteConfig.author.linkedin,
      siteConfig.social.linkedin
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Tesla"
    },
    "worksFor": {
      "@type": "Organization",
      "name": siteConfig.name
    },
    "knowsAbout": [
      "EU AI Act",
      "AI Compliance",
      "High-Risk AI Systems",
      "GRC",
      "ISO 27001",
      "CISM",
      "Information Security",
      "Risk Management",
      "Compliance Automation"
    ],
    "hasCredential": siteConfig.author.credentials.map(cred => ({
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": cred
    }))
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <main className="min-h-screen bg-white">
        <Hero />
        <UrgencyBadge />
        <ProblemSection />
        <SolutionSection />
        <CVSection />
        <Pricing />
        <FAQ />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
