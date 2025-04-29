import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

function Header({ patientName, notificationsCount, loggedIn }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow d-flex justify-content-center align-items-center" style={{ padding: '0.25rem 1rem' }}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="https://cdn-icons-png.flaticon.com/128/2382/2382443.png" 
            alt="Logo" 
            className="me-2 rounded-circle"
          />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>Aegle</span>
        </Link>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">Services</Link>
            </li>
            {loggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/profile">Account</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/prescription">Prescription</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white position-relative" to="/notifications">
                    Notifications
                    {notificationsCount > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {notificationsCount}
                      </span>
                    )}
                  </Link>
                </li>
              </>
            )}
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="languageDropdown" className="text-white">
                Language
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>සිංහල (Sinhala)</Dropdown.Item>
                <Dropdown.Item>தமிழ் (Tamil)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
        {patientName && (
          <span className="navbar-text text-white ms-3">
            Welcome, {patientName}
          </span>
        )}
      </div>
    </nav>
  );
}

export default Header;
