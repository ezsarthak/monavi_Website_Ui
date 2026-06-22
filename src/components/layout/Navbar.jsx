/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div
      data-animation="default"
      className="rt-navbar w-nav"
      data-easing2="ease"
      data-wf--rt-navbar-v1--variant="v2"
      data-easing="ease"
      data-collapse="medium"
      data-w-id="4895d25e-2177-434f-4904-e848d905b315"
      role="banner"
      data-duration={400}
    >
      <div className="rt-navbar-shadow" />
      <div className="rt-container-extra-large w-container">
        <div className="w-layout-hflex rt-navbar-wrapper" style={{ minHeight: '100px', padding: '10px 0' }}>
          <div className="w-layout-hflex rt-brand-logo-wrapper" style={{ width: 'auto', minWidth: 'max-content', paddingRight: '20px' }}>
            <a
              href="/"
              aria-current="page"
              className="rt-brand w-nav-brand w--current"
              style={{ display: 'flex', alignItems: 'center', width: 'auto', minWidth: 'max-content' }}
            >
              <Image 
                width={150} height={56}
                style={{ maxHeight: '56px', width: 'auto', height: 'auto' }}
                alt="MONAVI"
                src="/monavi/monavi_logo.webp"
                priority
              />
              <Image 
                width={150} height={36}
                style={{ maxHeight: '36px', width: 'auto', height: 'auto', marginLeft: '6px' }}
                alt="MONAVI NAME"
                src="/monavi/monavi_name.webp"
                priority
              />
            </a>
          </div>
          <nav
            role="navigation"
            className="rt-nav-menu w-variant-201f62ae-c8ac-7a9f-63c7-96b9c2b43f77 w-nav-menu"
            style={{ paddingLeft: '20px', marginLeft: '0px' }}
          >
            <div className="w-layout-vflex rt-nav-link-main" style={{ alignItems: 'center' }}>
              <div className="w-layout-hflex rt-nav-link-wrapper" style={{ alignItems: 'center', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
                <div className="w-layout-hflex rt-nav-link">
                  <a href="/" className="rt-nav-link-text w-nav-link">
                    Home
                  </a>
                </div>
                <div className="w-layout-hflex rt-nav-link">
                  <a href="/about" className="rt-nav-link-text w-nav-link">
                    About
                  </a>
                </div>
                <div className="w-layout-hflex rt-nav-link" style={{ whiteSpace: 'nowrap' }}>
                  <a href="/service" className="rt-nav-link-text w-nav-link">
                    Service
                  </a>
                </div>
                <div className="w-layout-hflex rt-nav-link" style={{ whiteSpace: 'nowrap' }}>
                  <a href="/service-detail/healthcare" className="rt-nav-link-text w-nav-link">
                    Service detail
                  </a>
                </div>
                <div className="w-layout-hflex rt-nav-link" style={{ whiteSpace: 'nowrap' }}>
                  <a href="/appointment-schedule" className="rt-nav-link-text w-nav-link">
                    Appointment schedule
                  </a>
                </div>
                <div className="w-layout-hflex rt-nav-link" style={{ whiteSpace: 'nowrap' }}>
                  <a href="/team" className="rt-nav-link-text w-nav-link">
                    Team
                  </a>
                </div>
                <div className="w-layout-hflex rt-nav-link" style={{ whiteSpace: 'nowrap' }}>
                  <a href="/careers" className="rt-nav-link-text w-nav-link">
                    Careers
                  </a>
                </div>
                <div className="w-layout-hflex rt-nav-link rt-nav-link-last-gap">
                  <a href="/contact" className="rt-nav-link-text w-nav-link">
                    Contact
                  </a>
                </div>
              </div>
              <div
                data-w-id="4895d25e-2177-434f-4904-e848d905b34d"
                className="w-layout-hflex rt-phone"
                style={{ alignItems: 'center' }}
              >
                <div className="w-layout-vflex rt-phone-number-wrapper">
                  <div className="rt-secondary-text-color rt-line-height rt-call-me-hover w-variant-201f62ae-c8ac-7a9f-63c7-96b9c2b43f77">
                    Contact Sales
                  </div>
                  <a
                    href="tel:+919269458322"
                    className="rt-line-height rt-font-weight-semi-bold rt-call-link w-variant-201f62ae-c8ac-7a9f-63c7-96b9c2b43f77"
                  >
                    +91 9269458322
                  </a>
                </div>
                <div>
                  <Image 
                    width={29}
                    height={28}
                    alt="Call Icon"
                    src="/fonts/call_icon.svg"
                    loading="lazy"
                    data-w-id="4895d25e-2177-434f-4904-e848d905b354"
                  />
                </div>
              </div>
              <div className="w-layout-vflex rt-menu-tab-botom-content">
                <div className="w-layout-hflex rt-bottom-button-wrapper">
                  <div className="w-layout-vflex rt-bottom-inner-wrapper">
                    <a
                      data-wf--rt-button--variant="base"
                      data-w-id="36ee05a8-1a3a-f1af-b31b-d4bb524a6fd3"
                      href="/appointment-schedule"
                      className="rt-button rt-overflow-hidden w-inline-block"
                    >
                      <div className="w-layout-hflex rt-text-button-wrapper rt-button-text">
                        <div className="rt-text-color-white rt-1">
                          Book a Demo
                        </div>
                        <div className="rt-text-color-white rt-change-text rt-2">
                          Book a Demo
                        </div>
                      </div>
                      <div className="rt-button-overlay" />
                    </a>
                  </div>
                </div>
                <div className="w-layout-vflex rt-nav-bottom-content">
                  <div className="w-layout-hflex rt-nav-botton-social-icon-wrapper">
                    <a
                      href="https://www.linkedin.com/company/monavimed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rt-social-icon w-inline-block"
                    >
                      <div className="w-layout-hflex rt-nav-social-icon" style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/monavimed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rt-social-icon w-inline-block"
                    >
                      <div className="w-layout-hflex rt-nav-social-icon" style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </div>
                    </a>
                    <a
                      href="https://x.com/MonaviMed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rt-social-icon w-inline-block"
                    >
                      <div className="w-layout-hflex rt-nav-social-icon" style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-layout-vflex rt-nav-contact-box">
                  <div className="rt-nav-cc-text">
                    &copy; 2026 MONAVI. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div
            id="w-node-_4895d25e-2177-434f-4904-e848d905b355-d905b315"
            className="w-layout-hflex rt-navbar-button"
          >
            <div className="rt-tab-display-off">
              <a
                data-wf--rt-button--variant="base"
                data-w-id="36ee05a8-1a3a-f1af-b31b-d4bb524a6fd3"
                href="/appointment-schedule"
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
            <div
              data-w-id="4895d25e-2177-434f-4904-e848d905b358"
              className="rt-mobile-list-botton w-nav-button"
            >
              <div className="w-layout-vflex rt-nav-open-mobile-button">
                <div className="rt-hamburger-line rt-1" />
                <div className="rt-hamburger-line rt-2" />
                <div className="rt-hamburger-line rt-text-color-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
