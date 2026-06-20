"use client";
import { useEffect } from "react";

export default function WebflowInit({ pageId }) {
  useEffect(() => {
    // Update the data-wf-page ID dynamically so Webflow loads the right interactions
    if (pageId) {
      document.documentElement.setAttribute('data-wf-page', pageId);
    }

    // Force Webflow to re-initialize IX2 interactions after React mounts
    if (typeof window !== "undefined" && window.Webflow) {
      try {
        window.Webflow.destroy();
        window.Webflow.ready();
        window.Webflow.require("ix2").init();
      } catch (e) {
        console.warn("Webflow IX2 failed to re-initialize", e);
      }
    }
  }, [pageId]);

  return null;
}
