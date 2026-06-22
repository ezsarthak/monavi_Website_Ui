import React from "react";
import Image from "next/image";

export default function LifeAtMonavi() {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '100px 0' }}>
      <div className="w-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#eef4ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#0f4c81', fontWeight: 'bold' }}>1</span>
              </div>
              <span style={{ color: '#0f4c81', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Culture</span>
            </div>
            
            <h2 className="rt-text-style-h2" style={{ color: '#0a0a0a', marginBottom: '24px', lineHeight: '1.2' }}>
              Collaborative Startup Environment
            </h2>
            
            <p style={{ color: '#4a4a4a', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
              Our culture is built on transparency and a relentless focus on the patient experience. The best work happens when people feel trusted, inspired, and connected. We actively encourage cross-functional collaboration and bold ideas.
            </p>
          </div>

          <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
            <Image 
              src="/monavi/life_culture.png"
              loading="lazy"
              width={600}
              height={400}
              alt="Culture at Monavi"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
