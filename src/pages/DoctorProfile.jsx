import React from 'react';
import { Link } from 'react-router-dom';

function DoctorProfile() {
  // Assuming doctor ID is passed as a route parameter

  // Example doctor data (replace with API call or dynamic data)
  const doctor = {
    id: 1,
    name: 'Dr. Anura Perera',
    specialty: 'Cardiologist',
    experience: '15 years',
    bio: 'Dr. Anura Perera is a highly experienced cardiologist specializing in heart health and cardiovascular treatments. He has been practicing for over 15 years and is known for his compassionate care.',
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">{doctor.name}</h2>
        <p><strong>Specialty:</strong> {doctor.specialty}</p>
        <p><strong>Experience:</strong> {doctor.experience}</p>
        <p><strong>Bio:</strong> {doctor.bio}</p>
        <div className="text-center mt-4">
          <Link className="btn btn-primary" to="/doctors">Back to Doctor List</Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
