import React from "react";
import Image from "next/image";

export default function CtaBanner() {
  return (
    <section
      data-w-id="e222f65b-1ac4-52cd-4a2e-7bc57f9d0c8d"
      className="rt-cta"
    >
      <div className="w-layout-blockcontainer rt-container-large-v2 w-container">
        <div className="w-layout-hflex rt-cta-main-wrapper rt-position-relative">
          <div className="rt-cta-image-wrapper rt-one">
            <Image 
              src="/images/monavi/receptionist_using_software.webp"
              loading="lazy"
              width={175}
              height={174}
              alt="Receptionist Software"
            />
          </div>
          <div className="rt-cta-image-wrapper rt-two">
            <Image 
              src="/images/monavi/doctor_digital_prescription.webp"
              loading="lazy"
              width={129}
              height={128}
              alt="Smlie Photo"
            />
          </div>
          <div className="rt-cta-image-wrapper rt-three">
            <div className="rt-position-relative">
              <div className="rt-image-inner-wrap">
                <Image 
                  src="/images/monavi/patient_mobile_app.webp"
                  loading="lazy"
                  width={114}
                  height={113}
                  alt="Patient photo"
                />
              </div>
              <div className="rt-psotion-absolute rt-one">
                <Image 
                  src="/fonts/ticker_icon.svg"
                  loading="lazy"
                  width={52}
                  height={51}
                  alt=""
                />
              </div>
              <div className="rt-psotion-absolute rt-two">
                <Image 
                  src="/fonts/comma.svg"
                  loading="lazy"
                  width={25}
                  height={25}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="rt-cta-image-wrapper rt-four">
            <div className="rt-position-relative">
              <div className="rt-image-inner-wrap">
                <Image 
                  src="/images/monavi/hero_dashboard_mockup.webp"
                  loading="lazy"
                  width={133}
                  height={132}
                  alt="Women Three"
                />
              </div>
              <div className="rt-psotion-absolute rt-three">
                <Image 
                  src="/fonts/ticker_two.svg"
                  loading="lazy"
                  width={52}
                  height={51}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="rt-cta-image-wrapper rt-five">
            <div className="rt-position-relative">
              <div className="rt-image-inner-wrap">
                <Image 
                  src="/images/monavi/receptionist_using_software.webp"
                  loading="lazy"
                  width={175}
                  height={174}
                  alt="Women Two"
                />
              </div>
              <div className="rt-psotion-absolute rt-four">
                <Image 
                  src="/fonts/star_icon.svg"
                  loading="lazy"
                  width={25}
                  height={25}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="rt-cta-image-wrapper rt-six">
            <Image 
              src="/images/monavi/doctor_digital_prescription.webp"
              loading="lazy"
              width={129}
              height={128}
              alt="Women One"
            />
          </div>
          <div className="w-layout-vflex rt-cta-content-wrapper rt-text-center">
            <h2
              data-w-id="adb5b02f-7cc5-ba67-3ce2-e850a24d6343"
              
              className="rt-gap-off rt-h2-heading-gap"
            >
              Ready to take control of your clinic?
            </h2>
            <p
              data-w-id="8066d17a-7c54-a6ae-ee09-aadf0de7ee6a"
              
              className="rt-gap-off rt-description-gap-v2 rt-secondary-text-color"
            >
              Join hundreds of clinics across India bringing patients back and
              reducing reception chaos.
            </p>
            <div
              data-w-id="cce1664c-eeba-6aaa-200e-d32c1d845fff"
              
            >
              <a
                data-wf--rt-button--variant="base"
                data-w-id="36ee05a8-1a3a-f1af-b31b-d4bb524a6fd3"
                href="/contact"
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
        </div>
      </div>
    </section>
  );
}
