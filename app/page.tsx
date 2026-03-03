import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ZorrowAIAssistant } from '@/components/zorrow-ai-assistant';
import { HeroSection } from '@/components/hero-section';
import { ImpactStatsSection } from '@/components/impact-stats-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { TransparencySection } from '@/components/transparency-section';
import { AIFeatureSection } from '@/components/ai-feature-section';
import { CTASection } from '@/components/cta-section';


export const metadata = {
  title: 'ZORROW IMPACT - Technology Empowering Humanity',
  description: 'Discover trusted charities, track your impact, and change the world. Join thousands of donors making a real difference.',
};

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <ImpactStatsSection />
      <HowItWorksSection />
      <TransparencySection />
      <AIFeatureSection />
      <CTASection />
      <Footer />
      <ZorrowAIAssistant />
    </main>
  );
}
