import React from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CareersBenefits() {
  return (
    <section style={{ backgroundColor: '#ffffff', paddingBottom: '100px' }}>
      <div className="w-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <RevealOnScroll delay={0} yOffset={30}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="rt-text-style-h2" style={{ color: '#0a0a0a', marginBottom: '16px' }}>
              Our Benefits
            </h2>
          </div>
        </RevealOnScroll>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          <RevealOnScroll delay={100} yOffset={40}>
            <div className="monavi-hover-card" style={{ backgroundColor: '#fdfdfd', border: '1px solid #eaeaea', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
              <div style={{ width: '64px', height: '64px', backgroundColor: '#eef4ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Image src="/fonts/icon_digital_prescriptions.svg" width={32} height={32} alt="Innovation" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(85%) saturate(3000%) hue-rotate(200deg) brightness(90%) contrast(100%)' }} />
              </div>
              <h3 className="rt-text-style-h5" style={{ color: '#0a0a0a', marginBottom: '16px', fontWeight: 'bold' }}>
                Healthcare Innovation
              </h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', margin: 0 }}>
                Work with cutting-edge AI and seamless software to solve some of healthcare's oldest problems.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200} yOffset={40}>
            <div className="monavi-hover-card" style={{ backgroundColor: '#fdfdfd', border: '1px solid #eaeaea', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
              <div style={{ width: '64px', height: '64px', backgroundColor: '#eef4ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Image src="/fonts/orthopedic_care.svg" width={32} height={32} alt="Flexible" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(85%) saturate(3000%) hue-rotate(200deg) brightness(90%) contrast(100%)' }} />
              </div>
              <h3 className="rt-text-style-h5" style={{ color: '#0a0a0a', marginBottom: '16px', fontWeight: 'bold' }}>
                Flexible Work
              </h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', margin: 0 }}>
                We care about results, not hours. Enjoy a flexible schedule that respects your work-life harmony.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300} yOffset={40}>
            <div className="monavi-hover-card" style={{ backgroundColor: '#fdfdfd', border: '1px solid #eaeaea', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
              <div style={{ width: '64px', height: '64px', backgroundColor: '#eef4ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Image src="/fonts/neurology_care.svg" width={32} height={32} alt="Learning" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(85%) saturate(3000%) hue-rotate(200deg) brightness(90%) contrast(100%)' }} />
              </div>
              <h3 className="rt-text-style-h5" style={{ color: '#0a0a0a', marginBottom: '16px', fontWeight: 'bold' }}>
                Continuous Learning
              </h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', margin: 0 }}>
                Continuous learning is built into our DNA. Get access to resources, courses, and brilliant mentors.
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
