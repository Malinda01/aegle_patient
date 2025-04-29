import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingDetails() {
  const [formData, setFormData] = useState({
    patientName: '',
    contactNumber: '',
    appointmentDate: '',
    appointmentTime: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.patientName || !formData.contactNumber || !formData.appointmentDate || !formData.appointmentTime) {
      alert('Please fill in all fields.');
      return;
    }
    alert('Appointment booked successfully!');
    console.log('Booking Details:', formData);
    // Add logic to save booking details (e.g., API call)
    setFormData({
      patientName: '',
      contactNumber: '',
      appointmentDate: '',
      appointmentTime: '',
    });
    navigate('/appointment-booking', { state: formData }); // Pass formData to AppointmentBooking
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" style={{ color: '#007bff' }}>Book Appointment</h2>
      <form onSubmit={handleSubmit} className="card shadow p-4">
        <div className="mb-3">
          <label className="form-label">Patient Name</label>
          <input
            type="text"
            className="form-control"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            type="text"
            className="form-control"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter your contact number"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Appointment Date</label>
          <input
            type="date"
            className="form-control"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Appointment Time</label>
          <input
            type="time"
            className="form-control"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingDetails;
