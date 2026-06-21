import React from "react";
import WebflowPageId from "@/components/webflow/WebflowPageId";
import TeamHero from "@/components/sections/team/TeamHero";
import TeamStats from "@/components/sections/team/TeamStats";
import TeamGrid from "@/components/sections/team/TeamGrid";
import WebflowInit from "@/components/webflow/WebflowInit";


export default function SpecialistsPage() {
  return (
    <>
      <WebflowInit pageId="696f01e79ad6d1ea44b3411e" />
      <WebflowPageId pageId="696f01e79ad6d1ea44b3411e" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (min-width:992px) {
              html.w-mod-js:not(.w-mod-ix) [data-w-id="bf4c5f67-e372-26db-6419-7bba171d04b8"] {
                -webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              }
            }
            
            /* Custom Scroll Animations for Team Page */
            .rt-team-hero-section [data-w-id],
            .rt-teams-details [data-w-id],
            .rt-team-member-details-main [data-w-id] {
              opacity: 0;
              transform: translateY(30px);
              transition: opacity 0.8s ease-out, transform 0.8s ease-out;
              will-change: opacity, transform;
            }
            .rt-team-hero-section [data-w-id].is-visible,
            .rt-teams-details [data-w-id].is-visible,
            .rt-team-member-details-main [data-w-id].is-visible {
              opacity: 1 !important;
              transform: translateY(0) !important;
            }
            
            /* Stagger team grid items */
            .rt-team-member-details-main .w-dyn-item:nth-child(1) [data-w-id] { transition-delay: 0ms; }
            .rt-team-member-details-main .w-dyn-item:nth-child(2) [data-w-id] { transition-delay: 100ms; }
            .rt-team-member-details-main .w-dyn-item:nth-child(3) [data-w-id] { transition-delay: 200ms; }
            .rt-team-member-details-main .w-dyn-item:nth-child(4) [data-w-id] { transition-delay: 300ms; }
            .rt-team-member-details-main .w-dyn-item:nth-child(5) [data-w-id] { transition-delay: 0ms; }
            .rt-team-member-details-main .w-dyn-item:nth-child(6) [data-w-id] { transition-delay: 100ms; }
            .rt-team-member-details-main .w-dyn-item:nth-child(7) [data-w-id] { transition-delay: 200ms; }
            .rt-team-member-details-main .w-dyn-item:nth-child(8) [data-w-id] { transition-delay: 300ms; }
            .rt-team-member-details-main .w-dyn-item:nth-child(9) [data-w-id] { transition-delay: 0ms; }
            .rt-team-member-details-main .w-dyn-item:nth-child(10) [data-w-id] { transition-delay: 100ms; }
            .rt-team-member-details-main .w-dyn-item:nth-child(11) [data-w-id] { transition-delay: 200ms; }
            .rt-team-member-details-main .w-dyn-item:nth-child(12) [data-w-id] { transition-delay: 300ms; }
          `,
        }}
        suppressHydrationWarning
      />
      <main>
        <TeamHero />
        <TeamStats />
        <TeamGrid />
      </main>
    </>
  );
}
