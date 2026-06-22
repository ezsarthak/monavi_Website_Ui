import React from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CareersTestimonials() {
  return (
    <section style={{ backgroundColor: '#f9f9f9', padding: '100px 0' }}>
      <div className="w-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <RevealOnScroll delay={0} yOffset={30}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="rt-text-style-h2" style={{ color: '#0a0a0a' }}>Hear From Our Team</h2>
          </div>
        </RevealOnScroll>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>

          <RevealOnScroll delay={100} yOffset={40}>
            <div className="monavi-hover-card" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #eee', transition: 'all 0.3s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{ width: '80px', height: '100px', minWidth: '80px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                  <Image 
                    src={"/team/" + encodeURIComponent("Keshav Garg(CEO)_v2.jpeg").replace(/%28/g, '(').replace(/%29/g, ')').replace(/%20/g, ' ')}
                    width={160}
                    height={200}
                    alt="Keshav Garg"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                <div>
                  <div style={{ color: '#0a0a0a', fontWeight: 'bold', fontSize: '18px' }}>Keshav Garg</div>
                  <div style={{ color: '#666', fontSize: '14px' }}>CEO</div>
                </div>
              </div>
              <p style={{ color: '#4a4a4a', fontStyle: 'italic', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                "If you want to take extreme ownership and build products that genuinely impact patient lives, this is the place to be. We are solving real problems every day."
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200} yOffset={40}>
            <div className="monavi-hover-card" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #eee', transition: 'all 0.3s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{ width: '80px', height: '100px', minWidth: '80px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                  <Image 
                    src={"/team/" + encodeURIComponent("Sarthak Patil(CTO)_v2.jpeg").replace(/%28/g, '(').replace(/%29/g, ')').replace(/%20/g, ' ')}
                    width={160}
                    height={200}
                    alt="Sarthak Patil"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                <div>
                  <div style={{ color: '#0a0a0a', fontWeight: 'bold', fontSize: '18px' }}>Sarthak Patil</div>
                  <div style={{ color: '#666', fontSize: '14px' }}>CTO</div>
                </div>
              </div>
              <p style={{ color: '#4a4a4a', fontStyle: 'italic', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                "The engineering challenges here are incredibly unique. We're integrating modern tech stacks with complex healthcare systems, pushing the boundaries of what's possible."
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300} yOffset={40}>
            <div className="monavi-hover-card" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #eee', transition: 'all 0.3s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{ width: '80px', height: '100px', minWidth: '80px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                  <Image 
                    src={"/team/" + encodeURIComponent("Shreyash Joshi(CMO)_v2.jpeg").replace(/%28/g, '(').replace(/%29/g, ')').replace(/%20/g, ' ')}
                    width={160}
                    height={200}
                    alt="Shreyash Joshi"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                <div>
                  <div style={{ color: '#0a0a0a', fontWeight: 'bold', fontSize: '18px' }}>Shreyash Joshi</div>
                  <div style={{ color: '#666', fontSize: '14px' }}>CMO</div>
                </div>
              </div>
              <p style={{ color: '#4a4a4a', fontStyle: 'italic', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                "What I love most is the speed of execution. We go from idea to deployment rapidly. The marketing challenges are equally thrilling as we scale our brand."
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={400} yOffset={40}>
            <div className="monavi-hover-card" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #eee', transition: 'all 0.3s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{ width: '80px', height: '100px', minWidth: '80px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                  <Image 
                    src={"/team/" + encodeURIComponent("Jayashis Barua(CFO)_v2.jpeg").replace(/%28/g, '(').replace(/%29/g, ')').replace(/%20/g, ' ')}
                    width={160}
                    height={200}
                    alt="Jayashis Barua"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                <div>
                  <div style={{ color: '#0a0a0a', fontWeight: 'bold', fontSize: '18px' }}>Jayashis Barua</div>
                  <div style={{ color: '#666', fontSize: '14px' }}>CFO</div>
                </div>
              </div>
              <p style={{ color: '#4a4a4a', fontStyle: 'italic', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                "Building a sustainable business in healthcare requires precision and vision. At MONAVI, we align our financial strategy perfectly with our goal to modernize clinics globally."
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
