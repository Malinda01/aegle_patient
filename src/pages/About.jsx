import React from 'react';

function About() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4" style={{ color: '#007bff' }}>About Us</h1>
      <div className="card shadow p-4">
        <h2 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>🩺 About Aegle</h2>
        <p style={{ fontSize: '1rem', color: '#6c757d', lineHeight: '1.6' }}>
          Aegle is a free, digital healthcare platform developed by Team CodeSparks with the mission of making quality medical services accessible to every citizen of Sri Lanka, regardless of location or income. Designed with simplicity, security, and inclusivity in mind, Aegle connects patients with licensed doctors for virtual consultations, reducing the need for physical travel, long waiting times, and crowded hospitals.
        </p>
        <p style={{ fontSize: '1rem', color: '#6c757d', lineHeight: '1.6' }}>
          Through features such as real-time doctor availability, multi-language support, video consultations, and secure medical records, Aegle empowers individuals in rural, underserved, and low-income communities to access the healthcare they deserve.
        </p>
        <p style={{ fontSize: '1rem', color: '#6c757d', lineHeight: '1.6' }}>
          We are committed to building a healthier nation by leveraging technology to bridge the gap between patients and healthcare providers—placing universal healthcare literally at your fingertips.
        </p>
      </div>
    </div>
  );
}

export default About;
