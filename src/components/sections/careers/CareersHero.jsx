import React from "react";
import Image from "next/image";

export default function CareersHero() {
  return (
    <section style={{ backgroundColor: '#ffffff', paddingTop: '300px', paddingBottom: '100px', overflow: 'hidden' }}>
      <div className="w-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto',paddingTop: '50px' }}>
          <h1 className="rt-text-style-h1" style={{ color: '#0a0a0a', marginBottom: '24px', fontSize: '56px', lineHeight: '1.1', fontWeight: 'bold' }}>
            Build The Future Of Healthcare
          </h1>
          <p style={{ color: '#4a4a4a', fontSize: '20px', lineHeight: '1.5', marginBottom: '40px' }}>
            Join us in transforming healthcare through technology. Help us create products that improve patient care and empower healthcare providers.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a
              data-wf--rt-button--variant="base"
              href="#open-positions"
              className="rt-button rt-overflow-hidden w-inline-block"
            >
              <div className="w-layout-hflex rt-text-button-wrapper rt-button-text">
                <div className="rt-text-color-white rt-1">View Open Positions</div>
                <div className="rt-text-color-white rt-change-text rt-2">View Open Positions</div>
              </div>
              <div className="rt-button-overlay" />
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', paddingBottom: '0px', alignItems: 'center' }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', aspectRatio: '3/4' }}>
            <Image src="/monavi/doctor_dashboard.webp" width={300} height={400} alt="Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', aspectRatio: '3/4', transform: 'translateY(-24px)' }}>
            <Image src="/monavi/recep.webp" width={300} height={400} alt="Receptionist" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', aspectRatio: '3/4' }}>
            <Image src="/monavi/followup.webp" width={300} height={400} alt="Doctor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', aspectRatio: '3/4', transform: 'translateY(-24px)' }}>
            <Image src="/monavi/patient.webp" width={300} height={400} alt="Patient" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          </div>
        </div>

      </div>
    </section>
  );
}
