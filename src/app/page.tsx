import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import EcosystemSection from "@/components/EcosystemSection";
import WhyUsSection from "@/components/WhyUsSection";
import ConnectedSection from "@/components/ConnectedSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <EcosystemSection />
        <WhyUsSection />
        <ConnectedSection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
