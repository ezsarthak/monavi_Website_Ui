import React from "react";
import Image from "next/image";

export default function TeamStats() {
  return (
    <section className="rt-teams-details">
      <div className="w-layout-blockcontainer rt-container-medium-v2 w-container">
        <div className="w-layout-vflex rt-teams-details-main-wrapper">
          <div className="w-layout-hflex rt-teams-details-top-content rt-top-content-gap">
            <div className="w-layout-vflex rt-teams-details-top-left rt-position-relative rt-border-radius-10">
              <Image 
                src="/monavi/team_img.png"
                width={520}
                height={593}
                alt="Team image"
                
                sizes="(max-width: 767px) 100vw, 520px"
                data-w-id="7d4cd875-8d95-4092-b994-4b3bf6a3084e"
                loading="lazy"
              />
              <div
                data-w-id="9be24066-4711-ad89-9e8a-aad2f3e2a6d0"
                
                className="w-layout-hflex rt-pricing-details-top-left-overlap"
              >
                <div className="w-layout-vflex rt-pricing-dot-wrapper">
                  <Image 
                    src="/assets/696f017270bc35c55e784979_69843c033b43e683d28c0804_dot_20_1_.svg"
                    loading="lazy"
                    width={16}
                    height={16}
                    alt="Pricing dot"
                  />
                </div>
                <div className="rt-text-color-deep-indigo rt-tag-line-height">
                  99.9% uptime guaranteed
                </div>
              </div>
            </div>
            <div className="w-layout-vflex rt-teams-details-top-right rt-mobile-text-center">
              <h2
                data-w-id="f8d64b39-b3e0-5f81-dce9-65f59c5cc233"
                
                className="rt-gap-off rt-h2-heading-gap rt-pricing-details-heading"
              >
                Dedicated to transforming healthcare
              </h2>
              <p
                data-w-id="51638350-f806-61fb-35b4-fc57e38d5432"
                
                className="rt-gap-off rt-description-gap rt-secondary-text-color"
              >
                Our dedicated team of engineers, designers, and healthcare
                experts are committed to building the most reliable and
                efficient clinic flow system in the world.
              </p>
              <div
                data-w-id="af0494d2-57de-009d-d40c-eb18dc954b0a"
                
                className="rt-pricing-details-line rt-pricing-details-line-gap"
              />
              <div
                data-w-id="8662f297-a0fe-82b4-1ce9-c265c6f2c5b3"
                
                className="rt-team-member-description"
              >
                Monavi,&nbsp;&nbsp;&nbsp;
                <span className="rt-secondary-text-color">
                  The Team
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
