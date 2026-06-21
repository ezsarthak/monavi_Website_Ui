"use client";
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    
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
        message: formData.message,
        form_type: "Contact Form"
      },
      publicKey
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: "", phone: "", message: "" });
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      setStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="rt-contact-details-v4">
      <div className="w-layout-blockcontainer rt-container-medium-v2 w-container">
        <div className="w-layout-hflex rt-contact-details-content-v2">
          <div className="w-layout-hflex rt-session-image-v2 rt-overflow-hidden rt-border-radius-10">
            <Image 
              className="rt-move-image rt-image-position-left"
              src="/monavi/doctor_dashboard.webp"
              width={630}
              height={700}
              alt="pulseon free session image"
              sizes="(max-width: 767px) 100vw, 630px"
              loading="lazy"
            />
          </div>
          <div className="w-layout-vflex rt-contact-details-text-box-v2 rt-overflow-hidden">
            <div className="rt-h2-gap">
              <div>
                <h2 className="rt-gap-none">Get a Free Demo</h2>
              </div>
            </div>
            <div className="rt-contact-paragraph">
              <p className="rt-contact-details-paragraph-v3 rt-gap-off rt-mobile-text-center">
                Caring for your health with compassion your trusted partner in
                better health where healing begins with a smile
              </p>
            </div>
            <div className="w-layout-vflex rt-contact-info-box-wrapper rt-change">
              <div className="rt-contact-form-block w-form">
                <form onSubmit={handleSubmit} className="rt-contact-form-v2">
                  <div className="rt-position-relative">
                    <input
                      className="rt-text-field-v1 w-input"
                      maxLength={256}
                      name="name"
                      placeholder="Enter your name*"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    <div className="w-layout-hflex rt-form-inner-logo">
                      <Image 
                        width={20} height={20} alt="pulseon contact user"
                        src="/assets/b4684e8495831860cfd932d4349f8612_pulseon-contact-user.svg" loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className="rt-position-relative">
                    <input
                      className="rt-text-field-v1 w-input"
                      maxLength={256}
                      name="phone"
                      placeholder="Phone number*"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    <div className="w-layout-hflex rt-form-inner-logo">
                      <Image 
                        width={20} height={20} alt="pulseon phone icon"
                        src="/assets/9f5d55a067f2e0ec4f5c2887fde698bc_pulseon-phone-icon.svg" loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className="rt-position-relative">
                    <textarea
                      name="message"
                      maxLength={5000}
                      placeholder="Type message..."
                      className="rt-textarea-v2 w-input"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    <div className="w-layout-hflex rt-form-inner-logo">
                      <Image 
                        width={20} height={20} alt="pulseon message icon"
                        src="/assets/f20a4d72990c44cccf512adf0883d7ec_pulseon-message-icon.svg" loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className="w-layout-vflex rt-contact-button-wrapper">
                    <div className="rt-position-relative">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rt-button rt-overflow-hidden w-inline-block"
                        style={{ width: '100%', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer', background: isSubmitting ? '#6b7280' : '' }}
                      >
                        <div className="w-layout-hflex rt-text-button-wrapper rt-button-text">
                          <div className="rt-text-color-white rt-1">
                            {isSubmitting ? 'Sending...' : 'Submit message'}
                          </div>
                          <div className="rt-text-color-white rt-change-text rt-2">
                            {isSubmitting ? 'Sending...' : 'Submit message'}
                          </div>
                        </div>
                        <div className="rt-button-overlay" />
                      </button>
                    </div>
                  </div>
                </form>
                {status === 'success' && (
                  <div className="rt-success-message w-form-done" style={{ display: 'block', marginTop: '10px' }}>
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                )}
                {status === 'error' && (
                  <div className="rt-error-message w-form-fail" style={{ display: 'block', marginTop: '10px' }}>
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
