import React from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CareersCta() {
  return (
    <section style={{ backgroundColor: '#eef4ff', padding: '100px 0' }}>
      <div className="w-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{ textAlign: "center", maxWidth: '600px', margin: '0 auto' }}>
          <RevealOnScroll delay={0} yOffset={30}>
            <h2 className="rt-text-style-h2" style={{ color: '#0a0a0a', marginBottom: '24px' }}>
              Ready To Build Healthcare's Future?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100} yOffset={30}>
            <p style={{ color: '#4a4a4a', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
              Join our mission and build products that impact millions. Explore our open roles and find your fit at MONAVI.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={200} yOffset={30}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a
                data-wf--rt-button--variant="base"
                href="#open-positions"
                className="rt-button rt-overflow-hidden w-inline-block"
              >
                <div className="w-layout-hflex rt-text-button-wrapper rt-button-text">
                  <div className="rt-text-color-white rt-1">Join Monavi</div>
                  <div className="rt-text-color-white rt-change-text rt-2">Join Monavi</div>
                </div>
                <div className="rt-button-overlay" />
              </a>
            </div>
          </RevealOnScroll>
        </div>
        
      </div>
    </section>
  );
}
