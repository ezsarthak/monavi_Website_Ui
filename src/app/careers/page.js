import React from "react";
import WebflowInit from "@/components/webflow/WebflowInit";
import WebflowPageId from "@/components/webflow/WebflowPageId";

// Careers Sections
import CareersHero from "@/components/sections/careers/CareersHero";
import WhyJoinMonavi from "@/components/sections/careers/WhyJoinMonavi";
import LifeAtMonavi from "@/components/sections/careers/LifeAtMonavi";
import CareersBenefits from "@/components/sections/careers/CareersBenefits";
import OpenPositions from "@/components/sections/careers/OpenPositions";
import HiringProcess from "@/components/sections/careers/HiringProcess";
import CareersTestimonials from "@/components/sections/careers/CareersTestimonials";
import CareersFaq from "@/components/sections/careers/CareersFaq";
import CareersCta from "@/components/sections/careers/CareersCta";

export const metadata = {
  title: "Careers | Monavi",
  description: "Join Monavi to build the future of healthcare technology. View open positions and learn about life at Monavi.",
};

export default function CareersPage() {
  return (
    <>
      <WebflowInit pageId="696f01b8614d21a2a06b6ec4" />
      <WebflowPageId pageId="696f01b8614d21a2a06b6ec4" />
      <main style={{ backgroundColor: "#0b192c", minHeight: "100vh" }}>
        <CareersHero />
        <WhyJoinMonavi />
        <LifeAtMonavi />
        <CareersBenefits />
        <OpenPositions />
        <HiringProcess />
        <CareersTestimonials />
        <CareersFaq />
        <CareersCta />
      </main>
    </>
  );
}
