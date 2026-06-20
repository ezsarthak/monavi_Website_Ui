import React from "react";
import Image from "next/image";

export default function HeroSection_0() {
  return (
    <section className="monavi-hero-section">
      {/* Background Image covering right side & overall aesthetic */}
      <img 
        src="/monavi/new_bg.png" 
        alt="Hero Background" 
        className="monavi-hero-bg" 
      />

      <div className="monavi-hero-container">
        {/* Left Column Content */}
        <div className="monavi-hero-content" data-w-id="hero-content">
          <h1 className="monavi-hero-title">
            Bring Patients Back.<br />Reduce Clinic Chaos.
          </h1>
          <p className="monavi-hero-subtitle">
            A complete, integrated platform for seamless clinical operations, data-driven insights, and automated patient communication. Built for efficiency.
          </p>
          <div className="monavi-hero-buttons">
            <a href="/contact" className="monavi-btn-primary">
              Book a Demo
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="/pricing" className="monavi-btn-secondary">
              Get started free
            </a>
          </div>
        </div>

        {/* Overlapping Feature Cards Row */}
        <div className="monavi-feature-cards-wrapper" data-w-id="hero-cards">
          <div className="monavi-feature-card">
            <div className="monavi-feature-icon">
              <img src="/fonts/696f50a3d546f3f075cd75c1_Ticker_Icon.svg" alt="Icon" width={22} height={22} style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(90%) saturate(2800%) hue-rotate(188deg) brightness(88%) contrast(98%)' }} />
            </div>
            <div className="monavi-feature-title">Queue<br/>Tracking</div>
          </div>

          <div className="monavi-feature-card">
            <div className="monavi-feature-icon">
              <img src="/fonts/69a143e0877eeaaad829b74f_Group_1597885272.svg" alt="Icon" width={22} height={22} style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(90%) saturate(2800%) hue-rotate(188deg) brightness(88%) contrast(98%)' }} />
            </div>
            <div className="monavi-feature-title">Digital<br/>Prescriptions</div>
          </div>

          <div className="monavi-feature-card">
            <div className="monavi-feature-icon">
              <img src="/fonts/69a143e0bfa82469f14fae39_Group_1597885431_1_.svg" alt="Icon" width={22} height={22} style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(90%) saturate(2800%) hue-rotate(188deg) brightness(88%) contrast(98%)' }} />
            </div>
            <div className="monavi-feature-title">Follow-up<br/>Reminders</div>
          </div>

          <div className="monavi-feature-card">
            <div className="monavi-feature-icon">
              {/* WhatsApp / Messaging Icon using inline SVG to ensure it's colored nicely */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <div className="monavi-feature-title">WhatsApp<br/>Updates</div>
          </div>

        </div>
      </div>
    </section>
  );
}
