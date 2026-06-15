import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import PropertiesSection from "@/app/components/PropertiesSection";
import ExpertiseSection from "@/app/components/ExpertiseSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

/**
 * Root page — Agarwal Realtors Complete Landing Page
 *
 * Section order & background colors:
 *   Hero         → Red (full-viewport)
 *   About Us     → Black  (diagonal red→black divider)
 *   Properties   → Red    (diagonal black→red divider)
 *   Expertise    → Black  (diagonal red→black divider)
 *   Contact Us   → Red    (diagonal black→red divider)
 *   Footer       → Black  (diagonal red→black divider)
 */
export default function Home() {
  return (
    <main>
      {/* Fixed navigation bar */}
      <Navbar />

      {/* 1. Full-viewport hero with red-tinted building backdrop */}
      <HeroSection />

      {/* 2. About Us — black bg / red text & accents */}
      <AboutSection />

      {/* 3. Our Properties — red bg / black text & accents */}
      <PropertiesSection />

      {/* 4. Expertise — black bg / red text & accents */}
      <ExpertiseSection />

      {/* 5. Contact Us — red bg / black text & accents */}
      <ContactSection />

      {/* 6. Footer — solid black */}
      <Footer />
    </main>
  );
}
