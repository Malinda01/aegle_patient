import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register'); // Navigate to the Register page
  };

  const handleLogin = () => {
    navigate('/login'); // Navigate to the Login page
  };

  return (
    <div
      className="d-flex justify-content-center align-items-start vh-100"
      style={{
        backgroundImage: 'url("https://via.placeholder.com/1920x1080")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '6rem', // Increase padding to move it slightly further down
      }}
    >
      <div className="welcome-page container text-center p-5 shadow rounded bg-white" style={{ maxWidth: '800px', padding: '3rem' }}>
        <h1 className="mb-4" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#007bff' }}>Welcome to Aegle</h1>
        <p className="mb-4" style={{ fontSize: '1.5rem', color: '#6c757d' }}>
          Your universal healthcare solution. Access healthcare services at your fingertips.
        </p>
        <div className="d-flex justify-content-center">
          <button onClick={handleRegister} className="btn btn-primary btn-lg me-3">
            Register
          </button>
          <button onClick={handleLogin} className="btn btn-secondary btn-lg me-3">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
