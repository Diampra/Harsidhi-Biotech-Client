import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HighlightsSection } from "@/components/home/HighlightsSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { TrustSection } from "@/components/home/TrustSection";
import { DealerCTA } from "@/components/home/DealerCTA";
import { TestimonialSection } from "@/components/home/TestimonialSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
      <FeaturedProducts />
      <TrustSection />
      <DealerCTA />
      <TestimonialSection />
    </Layout>
  );
};

export default Index;
