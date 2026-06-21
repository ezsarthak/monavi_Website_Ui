"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    time: "",
    date: ""
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("EmailJS configuration is missing. Please add the keys to .env.local");
      setIsSubmitting(false);
      return;
    }

    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        phone_number: formData.phone,
        clinic_address: formData.address,
        date_slot: formData.date,
        time_slot: formData.time,
        form_type: "Demo Booking"
      },
      publicKey
    )
    .then(() => {
      alert("Booking request submitted successfully! We will contact you soon.");
      setIsOpen(false);
      setFormData({ name: "", phone: "", address: "", time: "", date: "" });
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      alert("Something went wrong. Please try again.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(15, 36, 59, 0.85)",
      zIndex: 999999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      backdropFilter: "blur(4px)"
    }}>
      <div style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "40px",
        width: "100%",
        maxWidth: "500px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        position: "relative"
      }}>
        <button 
          onClick={() => setIsOpen(false)}
          disabled={isSubmitting}
          style={{
            position: "absolute",
            top: "20px", right: "20px",
            background: "none", border: "none",
            fontSize: "28px", cursor: "pointer",
            color: "#6b7280",
            lineHeight: 1
          }}
        >
          &times;
        </button>
        
        <h3 style={{ margin: "0 0 10px 0", color: "#0f243b", fontSize: "24px", fontWeight: "bold" }}>
          Book a Demo
        </h3>
        <p style={{ margin: "0 0 25px 0", color: "#6b7280", fontSize: "15px" }}>
          Fill out the details below and we will schedule your personalized clinic flow demo.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "5px", color: "#0f243b", fontWeight: "600", fontSize: "14px" }}>Full Name</label>
            <input required type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} placeholder="Dr. John Doe" disabled={isSubmitting} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "5px", color: "#0f243b", fontWeight: "600", fontSize: "14px" }}>Phone Number</label>
            <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="+91 00000 00000" disabled={isSubmitting} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "5px", color: "#0f243b", fontWeight: "600", fontSize: "14px" }}>Clinic Address</label>
            <textarea required name="address" value={formData.address} onChange={handleChange} style={{...inputStyle, height: "80px", resize: "vertical"}} placeholder="Full address of your clinic" disabled={isSubmitting} />
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: "block", marginBottom: "5px", color: "#0f243b", fontWeight: "600", fontSize: "14px" }}>Date Slot</label>
              <input required type="date" name="date" value={formData.date} onChange={handleChange} style={inputStyle} disabled={isSubmitting} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: "block", marginBottom: "5px", color: "#0f243b", fontWeight: "600", fontSize: "14px" }}>Preferred Time</label>
              <input required type="time" name="time" value={formData.time} onChange={handleChange} style={inputStyle} disabled={isSubmitting} />
            </div>
          </div>
          
          <button type="submit" disabled={isSubmitting} style={{
            marginTop: "10px",
            backgroundColor: isSubmitting ? "#6b7280" : "#00d2ad",
            color: "#ffffff",
            padding: "16px",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            transition: "background-color 0.2s"
          }}>
            {isSubmitting ? "Sending..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 15px",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  backgroundColor: "#f9fafb",
  fontSize: "15px",
  color: "#0f243b",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit"
};
