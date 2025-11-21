import Hero from '@/components/Hero';
import UrgencyBadge from '@/components/UrgencyBadge';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import CVSection from '@/components/CVSection';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
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
  );
}
