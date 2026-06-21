"use client";

import { useEffect } from "react";

export default function BookingInterceptor() {
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Find the closest anchor or button
      const target = e.target.closest("a, button, div.rt-button, div.rt-button-v5");
      if (!target) return;

      const text = target.textContent?.toLowerCase() || "";
      const isBookingButton = 
        text.includes("book demo") || 
        text.includes("book a demo") || 
        text.includes("get started") ||
        text.includes("book appointment");

      if (isBookingButton) {
        e.preventDefault();
        e.stopPropagation();
        window.dispatchEvent(new Event("open-booking-modal"));
      }
    };

    // Attach to document body
    document.body.addEventListener("click", handleGlobalClick, { capture: true });
    
    return () => {
      document.body.removeEventListener("click", handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
}
