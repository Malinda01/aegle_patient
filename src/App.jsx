import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DoctorList from './pages/DoctorList';
import AppointmentBooking from './pages/AppointmentBooking'; // Import AppointmentBooking
import VideoConsultation from './pages/VideoConsultation'; // Import VideoConsultation
import PatientRecords from './pages/PatientRecords';
import EmergencyInfo from './pages/EmergencyInfo';
import AboutUs from './pages/AboutUs';
import WelcomePage from './components/WelcomePage';
import DoctorProfile from './pages/DoctorProfile';
import Profile from './pages/Profile';
import Prescription from './pages/Prescription';
import Notification from './pages/Notification';
import SymptomChecker from './pages/SymptomChecker';
import Services from './pages/Services';
import About from './pages/About'; // Import About
import Account from './pages/Account'; // Import Account
import Language from './pages/Language'; // Import Language
import BookingDetails from './pages/BookingDetails'; // Import BookingDetails

function App() {
  const [patientName, setPatientName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (name) => {
    setPatientName(name);
    setLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
            </div>
          </div>
        </nav>
        <div className="content">
          <Header patientName={patientName} loggedIn={loggedIn} />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/doctors" element={<DoctorList />} />
            <Route path="/book" element={<BookingDetails />} /> {/* Ensure this route exists */}
            <Route path="/consult" element={<VideoConsultation />} />
            <Route path="/video-consultation" element={<VideoConsultation />} /> {/* Add VideoConsultation route */}
            <Route path="/records" element={<PatientRecords />} />
            <Route path="/emergency" element={<EmergencyInfo />} />
            <Route path="/about" element={<About />} /> {/* Add About route */}
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/prescription" element={<Prescription />} /> {/* Add Prescription route */}
            <Route path="/notifications" element={<Notification />} /> {/* Add Notifications route */}
            <Route path="/symptom-checker" element={<SymptomChecker />} />
            <Route path="/services" element={<Services />} />
            <Route path="/account" element={<Account />} /> {/* Add Account route */}
            <Route path="/language" element={<Language />} /> {/* Add Language route */}
            <Route path="/appointment-booking" element={<AppointmentBooking />} /> {/* Add AppointmentBooking route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
