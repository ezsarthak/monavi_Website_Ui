"use client";
import React, { useState } from "react";

export default function CareersFaq() {
  const faqs = [
    {
      q: "Is remote work available?",
      a: "Yes! Most of our roles are either fully remote or hybrid. We care about the impact you make, not where you sit."
    },
    {
      q: "What is the hiring process?",
      a: "Application Review → Recruiter Screen → Technical/Task Round → Final Culture Fit Discussion."
    },
    {
      q: "Do you hire interns?",
      a: "Absolutely. We actively hire interns year-round across Engineering, Product, and Marketing."
    },
    {
      q: "What technologies do you use?",
      a: "React/Next.js, Node.js, Python, and Flutter for mobile applications."
    },
    {
      q: "What is the work culture like?",
      a: "High-autonomy, high-accountability. We move fast, communicate transparently, and maintain a flat hierarchy."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section style={{ backgroundColor: '#fdfdfd', padding: '100px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="w-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 className="rt-text-style-h2" style={{ color: '#0a0a0a' }}>Common Questions</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', overflow: 'hidden' }}>
                <button 
                  onClick={() => toggle(i)}
                  style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <span style={{ color: '#0f4c81', fontWeight: 'bold' }}>0{i+1}</span>
                    <span className="rt-text-style-h6" style={{ color: '#1a1a1a', margin: 0 }}>{faq.q}</span>
                  </div>
                  <div style={{ position: 'relative', width: '20px', height: '20px' }}>
                    <div style={{ position: 'absolute', top: '9px', left: 0, width: '20px', height: '2px', backgroundColor: '#1a1a1a' }} />
                    <div style={{ position: 'absolute', top: '9px', left: 0, width: '20px', height: '2px', backgroundColor: '#1a1a1a', transform: isOpen ? 'rotate(0deg)' : 'rotate(90deg)', transition: 'transform 0.3s ease' }} />
                  </div>
                </button>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateRows: isOpen ? '1fr' : '0fr', 
                  transition: 'grid-template-rows 0.3s ease-in-out',
                }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ 
                      padding: '0 24px 24px 24px', 
                      opacity: isOpen ? 1 : 0, 
                      transition: 'opacity 0.3s ease-in-out',
                      visibility: isOpen ? 'visible' : 'hidden'
                    }}>
                      <div style={{ paddingTop: '16px', borderTop: '1px solid #eaeaea' }}>
                        <p style={{ color: '#4a4a4a', lineHeight: '1.6', margin: 0 }}>
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
