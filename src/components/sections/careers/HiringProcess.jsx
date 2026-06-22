import React from "react";

export default function HiringProcess() {
  return (
    <section style={{ backgroundColor: '#fdfdfd', padding: '100px 0', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
      <div className="w-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 className="rt-text-style-h2" style={{ color: '#0a0a0a', marginBottom: '16px' }}>
            Our Hiring Process
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          
          <div style={{ display: 'flex', gap: '30px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#0f4c81', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', zIndex: 2 }}>
                1
              </div>
              <div style={{ width: '2px', height: '100px', backgroundColor: '#e5e5e5', marginTop: '10px', marginBottom: '10px' }} />
            </div>
            <div style={{ paddingBottom: '60px' }}>
              <h3 className="rt-text-style-h4" style={{ color: '#0a0a0a', marginBottom: '12px', fontWeight: 'bold' }}>Application Review</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', margin: 0, fontSize: '18px' }}>
                Submit your resume and portfolio. We review every application personally to look for a strong match with our values and requirements.
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '30px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#0f4c81', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', zIndex: 2 }}>
                2
              </div>
              <div style={{ width: '2px', height: '100px', backgroundColor: '#e5e5e5', marginTop: '10px', marginBottom: '10px' }} />
            </div>
            <div style={{ paddingBottom: '60px' }}>
              <h3 className="rt-text-style-h4" style={{ color: '#0a0a0a', marginBottom: '12px', fontWeight: 'bold' }}>Initial Screening</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', margin: 0, fontSize: '18px' }}>
                A 30-minute chat with our recruiter to discuss your background, expectations, and give you a chance to learn more about MONAVI.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '30px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#0f4c81', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', zIndex: 2 }}>
                3
              </div>
            </div>
            <div>
              <h3 className="rt-text-style-h4" style={{ color: '#0a0a0a', marginBottom: '12px', fontWeight: 'bold' }}>Technical / Final Interview</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', margin: 0, fontSize: '18px' }}>
                Showcase your skills through a task or live session, followed by a final discussion with the team to ensure mutual culture fit.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
