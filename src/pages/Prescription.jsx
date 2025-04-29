import React, { useState } from 'react';

function Prescription() {
  const [prescriptions] = useState([
    {
      id: 1,
      date: '2023-10-01',
      doctor: 'Dr. Jane Smith',
      medications: [
        'Paracetamol 500mg - Take 1 tablet every 6 hours',
        'Amoxicillin 250mg - Take 1 capsule every 8 hours',
      ],
      notes: 'Drink plenty of water and rest well.',
    },
    {
      id: 2,
      date: '2023-09-15',
      doctor: 'Dr. John Doe',
      medications: [
        'Ibuprofen 200mg - Take 1 tablet every 8 hours',
        'Vitamin C 500mg - Take 1 tablet daily',
      ],
      notes: 'Avoid heavy physical activity for a week.',
    },
  ]);

  return (
    <div className="container py-5">
      <h1 className="mb-4" style={{ color: '#007bff' }}>Prescriptions</h1>
      {prescriptions.map((prescription) => (
        <div key={prescription.id} className="card shadow p-4 mb-4">
          <h2 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
            Prescription #{prescription.id}
          </h2>
          <p><strong>Date:</strong> {prescription.date}</p>
          <p><strong>Doctor:</strong> {prescription.doctor}</p>
          <p><strong>Medications:</strong></p>
          <ul>
            {prescription.medications.map((medication, index) => (
              <li key={index}>{medication}</li>
            ))}
          </ul>
          <p><strong>Doctor's Notes:</strong> {prescription.notes}</p>
        </div>
      ))}
    </div>
  );
}

export default Prescription;
