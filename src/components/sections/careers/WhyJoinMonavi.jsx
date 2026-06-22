import React from "react";
import Image from "next/image";

export default function WhyJoinMonavi() {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '100px 0' }}>
      <div className="w-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 className="rt-text-style-h2" style={{ color: '#0a0a0a', marginBottom: '16px' }}>
            Why Join Monavi
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          <div style={{ backgroundColor: '#fdfdfd', border: '1px solid #eaeaea', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
            <div style={{ width: '64px', height: '64px', backgroundColor: '#eef4ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Image src="/fonts/ticker_icon.svg" width={32} height={32} alt="Impact" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(85%) saturate(3000%) hue-rotate(200deg) brightness(90%) contrast(100%)' }} />
            </div>
            <h3 className="rt-text-style-h5" style={{ color: '#0a0a0a', marginBottom: '16px', fontWeight: 'bold' }}>
              Real Impact
            </h3>
            <p style={{ color: '#4a4a4a', lineHeight: '1.6', margin: 0 }}>
              Build tools that directly improve patient outcomes and save doctors valuable time every single day.
            </p>
          </div>

          <div style={{ backgroundColor: '#fdfdfd', border: '1px solid #eaeaea', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
            <div style={{ width: '64px', height: '64px', backgroundColor: '#eef4ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Image src="/fonts/icon_followup_reminders.svg" width={32} height={32} alt="Growth" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(85%) saturate(3000%) hue-rotate(200deg) brightness(90%) contrast(100%)' }} />
            </div>
            <h3 className="rt-text-style-h5" style={{ color: '#0a0a0a', marginBottom: '16px', fontWeight: 'bold' }}>
              Fast Growth
            </h3>
            <p style={{ color: '#4a4a4a', lineHeight: '1.6', margin: 0 }}>
              Join a rapidly scaling startup. Your career trajectory here moves as fast as our product cycles.
            </p>
          </div>

          <div style={{ backgroundColor: '#fdfdfd', border: '1px solid #eaeaea', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
            <div style={{ width: '64px', height: '64px', backgroundColor: '#eef4ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Image src="/fonts/darmatology_icon.svg" width={32} height={32} alt="Ownership" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(85%) saturate(3000%) hue-rotate(200deg) brightness(90%) contrast(100%)' }} />
            </div>
            <h3 className="rt-text-style-h5" style={{ color: '#0a0a0a', marginBottom: '16px', fontWeight: 'bold' }}>
              Ownership Culture
            </h3>
            <p style={{ color: '#4a4a4a', lineHeight: '1.6', margin: 0 }}>
              Take charge of your projects. We believe in high autonomy, low bureaucracy, and deep accountability.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
