/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

export default function Section7_6() {
  return (
    <div
      data-w-id="8655565b-9524-d831-4ca9-59f7a9809ce8"
      className="rt-video-section-wrapper rt-1"
    >
      <section className="rt-video-section">
        <div className="w-layout-vflex rt-video-main-wrapper rt-overflow-hidden">
          <div className="w-layout-vflex rt-video-top-content rt-top-content-gap">
            <div className="rt-sub-text rt-small-tag-gap">Who we are</div>
            <div
              data-w-id="8def050e-7928-92cc-152a-91584c6043e8"
              className="rt-position-relative rt-overflow-hidden rt-top-title-gap"
            >
              <h2 className="rt-gap-off">
                Reduced patient wait times and increased care capacity
                without hiring additional staff
              </h2>
              <div className="rt-absolute-strech rt-event-none rt-tab-none">
                <div className="rt-text-overlay rt-overlay-1" />
                <div className="rt-text-overlay rt-overlay-2" />
                <div className="rt-text-overlay rt-overlay-3" />
              </div>
            </div>
            <a
              data-wf--rt-button--variant="base"
              data-w-id="36ee05a8-1a3a-f1af-b31b-d4bb524a6fd3"
              href="/service"
              className="rt-button rt-overflow-hidden w-inline-block"
            >
              <div className="w-layout-hflex rt-text-button-wrapper rt-button-text">
                <div className="rt-text-color-white rt-1">Discover more</div>
                <div className="rt-text-color-white rt-change-text rt-2">
                  Discover more
                </div>
              </div>
              <div className="rt-button-overlay" />
            </a>
          </div>
          <div className="rt-videoback" />
          <div className="rt-video rt-overflow-hidden rt-border-radius-10">
            <Image width={800} height={600}  src="/images/monavi/patient_mobile_app_1781317975329.webp" className="w-background-video" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="monavi-image" />
          </div>
        </div>
      </section>
    </div>
  );
}
