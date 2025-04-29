import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  // Check if the current page is Login, Register, or WelcomePage
  const isSimplifiedHeader = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register';

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow d-flex justify-content-center align-items-center" style={{ padding: '0.25rem 1rem' }}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="navbar-brand d-flex align-items-center" onClick={() => handleNavigation('/')}>
          <img 
            src="https://cdn-icons-png.flaticon.com/128/6512/6512351.png" 
            alt="Logo" 
            className="me-2 rounded-circle"
            style={{ height: '100%' }} // Ensure the logo fits the header height
          />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>Aegle</span>
        </div>
        {!isSimplifiedHeader && (
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button onClick={() => handleNavigation('/home')} className="btn btn-link text-white nav-link">
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => handleNavigation('/about')} className="btn btn-link text-white nav-link">
                  About
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => handleNavigation('/services')} className="btn btn-link text-white nav-link">
                  Services
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => handleNavigation('/profile')} className="btn btn-link text-white nav-link">
                  Account
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => handleNavigation('/prescription')} className="btn btn-link text-white nav-link">
                  Prescription
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => handleNavigation('/notifications')} className="btn btn-link text-white nav-link">
                  Notifications
                </button>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn btn-link text-white nav-link dropdown-toggle"
                  onClick={toggleLanguageDropdown}
                >
                  Language
                </button>
                {showLanguageDropdown && (
                  <ul className="dropdown-menu show">
                    <li>
                      <button className="dropdown-item">Sinhala</button>
                    </li>
                    <li>
                      <button className="dropdown-item">English</button>
                    </li>
                    <li>
                      <button className="dropdown-item">Tamil</button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
