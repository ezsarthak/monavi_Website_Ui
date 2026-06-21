"use client";

import { useEffect } from "react";

export default function WebflowPageId({ pageId }) {
  useEffect(() => {
    // Native Intersection Observer to replace laggy Webflow IX2
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Optional: stop observing once visible
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% visible
      }
    );

    // Initial check
    const observeElements = () => {
      const animatedElements = document.querySelectorAll("[data-w-id]:not(.is-observed)");
      animatedElements.forEach((el) => {
        el.classList.add("is-observed");
        observer.observe(el);
      });
    };

    observeElements();

    // Watch for dynamically added elements (Server Components streaming in)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
