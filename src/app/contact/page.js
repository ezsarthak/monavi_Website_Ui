import React from "react";
import WebflowPageId from "@/components/webflow/WebflowPageId";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import WebflowInit from "@/components/webflow/WebflowInit";


export default function ContactPage() {
  return (
    <>
      <WebflowInit pageId="696f0209b959d237a91abfed" />

      <WebflowPageId pageId="696f0209b959d237a91abfed" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
  [data-wf-bgvideo-fallback-img] {
    display: none;
  }
  @media (prefers-reduced-motion: reduce) {
    [data-wf-bgvideo-fallback-img] {
      position: absolute;
      z-index: -100;
      display: inline-block;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }`,
        }}
        suppressHydrationWarning
      />
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
      </main>
    </>
  );
}
