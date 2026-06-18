import { HeroSection } from "@/components/sections/hero";
import { ClientTypesSection } from "@/components/sections/client-types";
import { ServicesSection } from "@/components/sections/services";
import { ProjectsSection } from "@/components/sections/projects";
import { CaseStudySection } from "@/components/sections/case-study";
import { WhyMeSection } from "@/components/sections/why-me";
import { ProcessSection } from "@/components/sections/process";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientTypesSection />
      <ServicesSection />
      <ProjectsSection />
      <CaseStudySection />
      <WhyMeSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <AboutSection />
      <ContactSection />
      <FinalCTASection />
    </>
  );
}
