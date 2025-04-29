import { Link } from 'react-router-dom';

function AppointmentBooking() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-5" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="text-center">
          <h2>Appointment Confirmed!</h2>
          <p>Your appointment has been successfully booked.</p>
          <div className="mt-4">
            <h4>Appointment Details</h4>
            <p><strong>Doctor:</strong> Dr. Anura Perera</p>
            <p><strong>Date:</strong> 25th September 2023</p>
            <p><strong>Time:</strong> 10:00 AM</p>
          </div>
          <Link className="btn btn-primary mt-3" to="/consult">Start Video Consultation</Link>
          <Link className="btn btn-secondary mt-3 ms-2" to="/">Return to Home</Link>
        </div>
      </div>
    </div>
  );
}

fetch('/api/appointments')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch appointments');
    }
    return response.json();
  })
  .catch((error) => {
    console.error('Error fetching appointments:', error);
  });

export default AppointmentBooking;
