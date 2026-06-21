import dynamic from 'next/dynamic';
import React from "react";
import WebflowPageId from "@/components/webflow/WebflowPageId";
import HeroSection from "@/components/sections/home/HeroSection";
import AboutPreview from "@/components/sections/home/AboutPreview";

const ServicesShowcase = dynamic(() => import("@/components/sections/home/ServicesShowcase"));
const StatsSection = dynamic(() => import("@/components/sections/home/StatsSection"));
const TestimonialsIntro = dynamic(() => import("@/components/sections/home/TestimonialsIntro"));
const WhoWeAre = dynamic(() => import("@/components/sections/home/WhoWeAre"));
const WhoWeAreBanner = dynamic(() => import("@/components/sections/home/WhoWeAreBanner"));
const SpecialtiesGrid = dynamic(() => import("@/components/sections/home/SpecialtiesGrid"));
const LogoMarquee = dynamic(() => import("@/components/sections/home/LogoMarquee"));
const CtaBanner = dynamic(() => import("@/components/sections/home/CtaBanner"));
const TestimonialsCarousel = dynamic(() => import("@/components/sections/home/TestimonialsCarousel"));

import WebflowInit from "@/components/webflow/WebflowInit";

export default function Home() {
  return (
    <>
      <WebflowInit pageId="696f017570bc35c55e7849ad" />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesShowcase />
        <StatsSection />

        <TestimonialsIntro />
        <WhoWeAre />
        <WhoWeAreBanner />

        <SpecialtiesGrid />
        <LogoMarquee />

        <CtaBanner />
        <TestimonialsCarousel />

      </main>
    </>
  );
}
