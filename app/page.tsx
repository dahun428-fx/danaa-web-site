import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MediaSection from "./components/MediaSection";
import ProductHighlightsSection from "./components/ProductHighlightsSection";
import ServiceLinksSection from "./components/ServiceLinksSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductHighlightsSection />
        <ServiceLinksSection />
        <MediaSection />
      </main>
      <Footer />
    </>
  );
}
