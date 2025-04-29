import { useState } from 'react';
import { Link } from 'react-router-dom';

function DoctorList() {
  const [searchTerm, setSearchTerm] = useState('');

  const doctors = [
    { name: 'Dr. Anura Perera', specialty: 'Cardiologist' },
    { name: 'Dr. Nimal Silva', specialty: 'Dermatologist' },
    { name: 'Dr. Chamila Fernando', specialty: 'Pediatrician' },
    { name: 'Dr. Ravi Jayawardena', specialty: 'Neurologist' },
    { name: 'Dr. Priya Karunaratne', specialty: 'Orthopedic Surgeon' },
    { name: 'Dr. Sunil Wijesinghe', specialty: 'General Physician' },
    { name: 'Dr. Malini Abeysekera', specialty: 'Gynecologist' },
    { name: 'Dr. Kavinda Senanayake', specialty: 'Endocrinologist' },
    { name: 'Dr. Tharushi Wickramasinghe', specialty: 'Psychiatrist' },
  ];

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Available Doctors</h2>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by doctor's name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="row">
        {filteredDoctors.map((doctor, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow">
              <div className="card-body text-center">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text text-muted">{doctor.specialty}</p>
                <Link className="btn btn-success w-100" to="/book">Book Appointment</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
