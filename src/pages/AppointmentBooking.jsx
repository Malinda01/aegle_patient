import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function AppointmentBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { patientName, contactNumber, appointmentDate, appointmentTime } = location.state || {};

  useEffect(() => {
    if (patientName && contactNumber && appointmentDate && appointmentTime) {
      // Save appointment details (e.g., to localStorage or an API)
      const appointmentDetails = {
        patientName,
        contactNumber,
        appointmentDate,
        appointmentTime,
      };
      localStorage.setItem('appointmentDetails', JSON.stringify(appointmentDetails));
      console.log('Appointment details saved:', appointmentDetails);
    }
  }, [patientName, contactNumber, appointmentDate, appointmentTime]);

  const handleVideoCall = () => {
    navigate('/video-consultation', { state: { patientName, appointmentDate, appointmentTime } });
  };

  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4" style={{ color: '#007bff' }}>Appointment Confirmed</h2>
      {patientName && contactNumber && appointmentDate && appointmentTime ? (
        <div>
          <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
            Your appointment has been successfully booked. Here are the details:
          </p>
          <div className="card shadow p-4 mt-4">
            <p><strong>Patient Name:</strong> {patientName}</p>
            <p><strong>Contact Number:</strong> {contactNumber}</p>
            <p><strong>Appointment Date:</strong> {appointmentDate}</p>
            <p><strong>Appointment Time:</strong> {appointmentTime}</p>
          </div>
          <div className="mt-4">
            <button className="btn btn-primary me-3">Voice Call</button>
            <button className="btn btn-success" onClick={handleVideoCall}>Video Call</button>
          </div>
        </div>
      ) : (
        <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
          No appointment details available.
        </p>
      )}
    </div>
  );
}

export default AppointmentBooking;
