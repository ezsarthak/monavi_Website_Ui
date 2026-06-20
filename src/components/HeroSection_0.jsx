import React from "react";
import Image from "next/image";

export default function HeroSection_0() {
  return (
<<<<<<< HEAD
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
=======
    <section className="rt-hero rt-overflow-hidden rt-position-relative">
      <div className="rt-home-one-background-image-wrapper-v2">
        <Image 
          src="/monavi/bg.webp"
          alt="BANNER"
          width={1920}
          height={1080}
          priority={true}
          style={{ width: '100%', height: 'auto', objectFit: 'contain', transform: 'translateY(110px)' }}
        />
      </div>
      <div className="w-layout-blockcontainer rt-container-extra-large w-container" style={{ marginTop: '-50px' }}>
        <div className="w-layout-hflex rt-hero-main-wrapper">
          <div className="w-layout-vflex rt-hero-left-content">
            <div className="w-layout-vflex rt-hero-left-top-wrapper" style={{ marginTop: '40px' }}>
              <h1
                className="rt-gap-off rt-hero-heading-gap"
                style={{ color: '#334155', fontSize: '2.5rem', lineHeight: '1.2' }}
              >
                Bring Patients Back. Reduce Clinic Chaos.
              </h1>
              <div className="rt-hero-description-max-width rt-hero-description-gap">
                <div
                  className="rt-hero-description-max-width rt-text-style-h6"
                  style={{ color: '#64748b', fontSize: '1.125rem', fontWeight: '400' }}
                >
                  The smart clinic system to manage appointments, automate follow-ups, and boost patient retention.
                </div>
              </div>
              <div
              >
                <a
                  data-wf--rt-button--variant="base"
                  href="/service"
                  className="rt-button rt-overflow-hidden w-inline-block"
                >
                  <div className="w-layout-hflex rt-text-button-wrapper rt-button-text">
                    <div className="rt-text-color-white rt-1">Book a Demo</div>
                    <div className="rt-text-color-white rt-change-text rt-2">
                      Book a Demo
                    </div>
                  </div>
                  <div className="rt-button-overlay" />
                </a>
              </div>
            </div>
            <div className="w-layout-vflex rt-hero-left-bottom-wrapper rt-mobile-potrait-display-off" style={{ marginTop: '40px' }}>
              <div className="w-layout-hflex rt-hero-left-bottom">
                <div
                  className="w-layout-hflex rt-hero-bottom-button"
                  style={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '8px' }}
                >
                  <div className="w-layout-hflex rt-bottom-button-icon-wrapper">
                    <div className="w-layout-vflex rt-icon-wrapper">
                      <Image 
                        src="/fonts/69a143e06d269cdcb6e0d162_Group_16_2.svg"
                        loading="lazy"
                        width={19}
                        height={18}
                        alt="Hero banner icons"
                        className="rt-hero-icon"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </div>
                  <div className="rt-button-text" style={{ color: '#f8fafc', fontSize: '0.9rem', fontWeight: '500' }}>
                    Appointment Management
                  </div>
                </div>
                <div
                  className="w-layout-hflex rt-hero-bottom-button"
                  style={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '8px' }}
                >
                  <div className="w-layout-hflex rt-bottom-button-icon-wrapper">
                    <div className="w-layout-vflex rt-icon-wrapper">
                      <Image 
                        src="/fonts/69a143e09df366f2a0a37963_Group_1597885431.svg"
                        loading="lazy"
                        width={19}
                        height={16}
                        alt="Hero banner icons"
                        className="rt-hero-icon"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </div>
                  <div className="rt-button-text" style={{ color: '#f8fafc', fontSize: '0.9rem', fontWeight: '500' }}>
                    Queue Tracking
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex rt-hero-left-bottom">
                <div
                  className="w-layout-hflex rt-hero-bottom-button"
                  style={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '8px' }}
                >
                  <div className="w-layout-hflex rt-bottom-button-icon-wrapper">
                    <div className="w-layout-vflex rt-icon-wrapper">
                      <Image 
                        src="/fonts/69a143e0877eeaaad829b74f_Group_1597885272.svg"
                        loading="lazy"
                        width={19}
                        height={15}
                        alt="Hero banner icons"
                        className="rt-hero-icon"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </div>
                  <div className="rt-button-text" style={{ color: '#f8fafc', fontSize: '0.9rem', fontWeight: '500' }}>
                    Digital Prescriptions
                  </div>
                </div>
                <div
                  className="w-layout-hflex rt-hero-bottom-button"
                  style={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '8px' }}
                >
                  <div className="w-layout-hflex rt-bottom-button-icon-wrapper">
                    <div className="w-layout-vflex rt-icon-wrapper">
                      <Image 
                        src="/fonts/69a143e0bfa82469f14fae39_Group_1597885431_1.svg"
                        loading="lazy"
                        width={18}
                        height={19}
                        alt="Hero banner icons"
                        className="rt-hero-icon"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </div>
                  <div className="rt-button-text" style={{ color: '#f8fafc', fontSize: '0.9rem', fontWeight: '500' }}>
                    Follow-up Reminders
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-layout-vflex rt-hero-right-content">

            <a
              href="#about-us"
              className="rt-scroll-button-wrapper rt-position-relative rt-mobile-potrait-display-off w-inline-block"
            >
              <Image 
                src="/fonts/697854b5b7e195383d30a67f_Group_1597885275.svg"
                loading="lazy"
                width={135}
                height={135}
                alt="Text Rounded"
                style={{
                  WebkitTransform:
                    "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                  transform:
                    "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                  filter: 'brightness(0) opacity(0.8)'
                }}
                className="rt-rotate-image"
              />
              <div className="w-layout-vflex rt-scroll-button-arrow-wrapper">
                <div className="rt-hero-scroll-icon-wrapper">
                  <Image 
                    src="/fonts/697854b5cbc03af41f48e1f0_Circle_Text.svg"
                    loading="lazy"
                    width={28}
                    height={28}
                    alt="Long Down Arrow"
                    className="rt-long-down-arrow"
                    style={{ filter: 'brightness(0) opacity(0.8)' }}
                  />
                </div>
              </div>
>>>>>>> a706319a8e4cb24c7cfc628342201e466a0fec67
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
