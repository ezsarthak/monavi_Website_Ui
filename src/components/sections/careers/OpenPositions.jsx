"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function OpenPositions() {
  const jobs = [
    { 
      id: 1, 
      title: "Flutter Developer Intern", 
      department: "Engineering", 
      type: "Internship", 
      location: "Remote", 
      exp: "Fresher",
      about: "We are looking for a passionate Flutter Developer Intern to join our mobile team. You will work closely with senior engineers to build and maintain high-performance, cross-platform healthcare applications used by clinics and patients.",
      responsibilities: [
        "Translate UI/UX designs into responsive Flutter code.",
        "Collaborate with backend developers to integrate RESTful APIs.",
        "Write clean, maintainable, and well-documented Dart code.",
        "Participate in code reviews and agile sprint planning."
      ],
      requirements: [
        "Strong understanding of Dart and the Flutter framework.",
        "Familiarity with state management (Provider, Riverpod, or BLoC).",
        "Basic understanding of native Android/iOS development is a plus.",
        "Strong problem-solving skills and eagerness to learn."
      ]
    },
    { 
      id: 2, 
      title: "Backend Developer Intern", 
      department: "Engineering", 
      type: "Internship", 
      location: "Remote", 
      exp: "Fresher",
      about: "Join our core infrastructure team as a Backend Developer Intern. You'll help build the secure, scalable APIs that power our entire healthcare platform, handling patient data safely and efficiently.",
      responsibilities: [
        "Develop and maintain robust backend services using Node.js/Python.",
        "Optimize database queries and ensure high performance.",
        "Assist in writing unit and integration tests.",
        "Monitor system performance and help troubleshoot bugs."
      ],
      requirements: [
        "Proficiency in Node.js or Python and their modern frameworks.",
        "Experience with relational databases (PostgreSQL) or NoSQL (MongoDB).",
        "Understanding of RESTful API design principles.",
        "A solid grasp of data structures and algorithms."
      ]
    },
    { 
      id: 3, 
      title: "UI/UX Designer", 
      department: "Design", 
      type: "Full-time", 
      location: "Hybrid", 
      exp: "2-4 Years",
      about: "We are seeking an experienced UI/UX Designer to craft beautiful, intuitive, and accessible interfaces for healthcare professionals and patients. Your designs will directly impact how care is delivered.",
      responsibilities: [
        "Lead the end-to-end design process from wireframing to high-fidelity prototyping.",
        "Conduct user research to understand the needs of doctors and patients.",
        "Maintain and evolve our internal design system.",
        "Work closely with engineering to ensure pixel-perfect implementation."
      ],
      requirements: [
        "2-4 years of product design experience (SaaS or Healthcare preferred).",
        "Expert proficiency in Figma.",
        "A strong portfolio demonstrating complex problem-solving and visual design skills.",
        "Excellent communication skills to present and defend design decisions."
      ]
    },
    { 
      id: 4, 
      title: "Marketing Intern", 
      department: "Marketing", 
      type: "Internship", 
      location: "Remote", 
      exp: "Fresher",
      about: "Help us tell the MONAVI story. As a Marketing Intern, you will assist in crafting campaigns, managing our social presence, and generating inbound leads from clinics and hospitals.",
      responsibilities: [
        "Assist in creating content for social media, blogs, and newsletters.",
        "Conduct market research to identify trends in the healthcare SaaS space.",
        "Help manage and optimize SEO and SEM campaigns.",
        "Track marketing metrics and compile weekly performance reports."
      ],
      requirements: [
        "Currently pursuing or recently completed a degree in Marketing, Communications, or related field.",
        "Strong copywriting and storytelling skills.",
        "Familiarity with social media platforms and analytics tools.",
        "A creative mindset with a highly organized approach."
      ]
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resumeLink: "",
    portfolioLink: "",
    coverLetter: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsApplying(false);
      setIsSuccess(false);
      setErrorMsg("");
      setFormData({ name: "", email: "", phone: "", resumeLink: "", portfolioLink: "", coverLetter: "" });
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedJob]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_JOB_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMsg("EmailJS configuration is missing. Please add the keys to .env.local");
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      job_title: selectedJob.title,
      applicant_name: formData.name,
      applicant_email: formData.email,
      applicant_phone: formData.phone,
      resume_link: formData.resumeLink,
      portfolio_link: formData.portfolioLink,
      message: formData.coverLetter,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        setIsSubmitting(false);
        setIsSuccess(true);
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.error("EmailJS Error:", err);
        setErrorMsg("Something went wrong. Please try again later.");
      });
  };

  return (
    <section id="open-positions" style={{ backgroundColor: '#ffffff', padding: '100px 0', position: 'relative' }}>
      <div className="w-container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 className="rt-text-style-h2" style={{ color: '#0a0a0a', marginBottom: '16px' }}>
            Open Positions
          </h2>
          <p style={{ color: '#666', fontSize: '18px' }}>Join us and do the best work of your life.</p>
        </div>

        {/* Job List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {jobs.map((job) => (
            <div 
              key={job.id} 
              onClick={() => setSelectedJob(job)}
              style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                backgroundColor: '#ffffff', 
                border: '1px solid #eaeaea', 
                borderRadius: '12px', 
                padding: '24px 32px', 
                boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0f4c81';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(15, 76, 129, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#eaeaea';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.02)';
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 style={{ color: '#0a0a0a', fontSize: '20px', fontWeight: 'bold', margin: 0 }}>
                  {job.title}
                </h3>
                <div style={{ display: 'flex', gap: '16px', color: '#666', fontSize: '14px', alignItems: 'center' }}>
                  <span style={{ fontWeight: '500', color: '#0f4c81' }}>{job.department}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#ccc' }} />
                  <span>{job.location}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#ccc' }} />
                  <span>{job.type}</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ color: '#1a1a1a', fontWeight: '500', fontSize: '15px', backgroundColor: '#f5f5f5', padding: '6px 12px', borderRadius: '20px' }}>
                  {job.exp}
                </div>
                <div style={{ color: '#0f4c81', fontWeight: 'bold', fontSize: '16px' }}>
                  View &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Modal */}
      {selectedJob && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }} onClick={() => setSelectedJob(null)}>
          <div 
            style={{
              backgroundColor: '#ffffff',
              width: '100%',
              maxWidth: '1000px', /* Increased width */
              maxHeight: '90vh',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Modal Header */}
            <div style={{ padding: '32px 40px', borderBottom: '1px solid #eaeaea', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', backgroundColor: '#fdfdfd' }}>
              <div>
                <h2 style={{ color: '#0a0a0a', fontSize: '32px', fontWeight: 'bold', marginBottom: '12px', marginTop: 0 }}>
                  {selectedJob.title}
                </h2>
                <div style={{ display: 'flex', gap: '16px', color: '#666', fontSize: '15px', alignItems: 'center' }}>
                  <span style={{ fontWeight: '500', color: '#0f4c81' }}>{selectedJob.department}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#ccc' }} />
                  <span>{selectedJob.location}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#ccc' }} />
                  <span>{selectedJob.type}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#ccc' }} />
                  <span>{selectedJob.exp}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedJob(null)}
                style={{ background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer', color: '#999', padding: '0 8px' }}
              >
                &times;
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div style={{ padding: '40px', overflowY: 'auto', flex: 1 }}>
              
              {!isApplying && !isSuccess && (
                <>
                  <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ color: '#0a0a0a', fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>About The Role</h3>
                    <p style={{ color: '#4a4a4a', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                      {selectedJob.about}
                    </p>
                  </div>

                  <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ color: '#0a0a0a', fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Key Responsibilities</h3>
                    <ul style={{ color: '#4a4a4a', fontSize: '16px', lineHeight: '1.6', margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {selectedJob.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 style={{ color: '#0a0a0a', fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Requirements</h3>
                    <ul style={{ color: '#4a4a4a', fontSize: '16px', lineHeight: '1.6', margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {selectedJob.requirements.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {isApplying && !isSuccess && (
                <div>
                  <div style={{ marginBottom: '30px' }}>
                    <button 
                      onClick={() => setIsApplying(false)} 
                      style={{ background: 'none', border: 'none', color: '#0f4c81', fontSize: '15px', cursor: 'pointer', padding: 0, fontWeight: '500', marginBottom: '16px' }}
                    >
                      &larr; Back to Job Description
                    </button>
                    <h3 style={{ color: '#0a0a0a', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Submit Your Application</h3>
                  </div>

                  <form id="application-form" onSubmit={handleSubmitApplication} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ color: '#1a1a1a', fontWeight: '500', fontSize: '14px' }}>Full Name *</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleInputChange} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', outline: 'none' }} placeholder="John Doe" />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ color: '#1a1a1a', fontWeight: '500', fontSize: '14px' }}>Email Address *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleInputChange} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', outline: 'none' }} placeholder="john@example.com" />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ color: '#1a1a1a', fontWeight: '500', fontSize: '14px' }}>Phone Number *</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', outline: 'none' }} placeholder="+91 98765 43210" />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ color: '#1a1a1a', fontWeight: '500', fontSize: '14px' }}>Portfolio / LinkedIn URL</label>
                        <input type="url" name="portfolioLink" value={formData.portfolioLink} onChange={handleInputChange} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', outline: 'none' }} placeholder="https://linkedin.com/in/..." />
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ color: '#1a1a1a', fontWeight: '500', fontSize: '14px' }}>Resume Link (Google Drive, Dropbox, etc.) *</label>
                      <input required type="url" name="resumeLink" value={formData.resumeLink} onChange={handleInputChange} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', outline: 'none' }} placeholder="Link to your resume/CV" />
                      <span style={{ fontSize: '12px', color: '#666' }}>Please ensure the link is publicly accessible.</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ color: '#1a1a1a', fontWeight: '500', fontSize: '14px' }}>Cover Letter / Additional Information</label>
                      <textarea name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', outline: 'none', minHeight: '120px', resize: 'vertical' }} placeholder="Why are you a great fit for this role?" />
                    </div>

                    {errorMsg && (
                      <div style={{ color: '#d93025', fontSize: '14px', padding: '12px', backgroundColor: '#fce8e6', borderRadius: '8px' }}>
                        {errorMsg}
                      </div>
                    )}

                  </form>
                </div>
              )}

              {isSuccess && (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#eef4ff', color: '#0f4c81', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', margin: '0 auto 24px auto' }}>
                    ✓
                  </div>
                  <h3 style={{ color: '#0a0a0a', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Application Submitted!</h3>
                  <p style={{ color: '#4a4a4a', fontSize: '16px', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto' }}>
                    Thank you for applying for the {selectedJob.title} position. Our team will review your application and get back to you shortly.
                  </p>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div style={{ padding: '24px 40px', borderTop: '1px solid #eaeaea', backgroundColor: '#fdfdfd', display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
              <button 
                onClick={() => setSelectedJob(null)}
                style={{ 
                  backgroundColor: 'transparent', 
                  color: '#4a4a4a', 
                  padding: '16px 32px', 
                  borderRadius: '30px', 
                  border: '1px solid #eaeaea',
                  fontWeight: 'bold', 
                  fontSize: '16px',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
              
              {!isApplying && !isSuccess && (
                <button
                  onClick={() => setIsApplying(true)}
                  style={{ 
                    backgroundColor: '#0f4c81', 
                    color: '#fff', 
                    padding: '16px 40px', 
                    borderRadius: '30px', 
                    border: 'none',
                    fontWeight: 'bold', 
                    fontSize: '16px',
                    boxShadow: '0 4px 15px rgba(15, 76, 129, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  Apply Now &rarr;
                </button>
              )}

              {isApplying && !isSuccess && (
                <button
                  type="submit"
                  form="application-form"
                  disabled={isSubmitting}
                  style={{ 
                    backgroundColor: isSubmitting ? '#a0c0db' : '#0f4c81', 
                    color: '#fff', 
                    padding: '16px 40px', 
                    borderRadius: '30px', 
                    border: 'none',
                    fontWeight: 'bold', 
                    fontSize: '16px',
                    boxShadow: '0 4px 15px rgba(15, 76, 129, 0.3)',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
