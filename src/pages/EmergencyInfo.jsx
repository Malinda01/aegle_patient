function EmergencyInfo() {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-danger mb-4" style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>Emergency Assistance</h2>
      <ul className="list-group shadow mb-5">
        <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
          <strong>Emergency Hotline:</strong> <span className="text-primary" style={{ fontSize: '1.2rem' }}>1990</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
          <strong>Nearest Hospital:</strong> <span className="text-primary" style={{ fontSize: '1.2rem' }}>Colombo General Hospital</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
          <strong>Ambulance Service:</strong> <span className="text-primary" style={{ fontSize: '1.2rem' }}>110</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
          <strong>Fire Department:</strong> <span className="text-primary" style={{ fontSize: '1.2rem' }}>118</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
          <strong>Police Emergency:</strong> <span className="text-primary" style={{ fontSize: '1.2rem' }}>119</span>
        </li>
      </ul>
      <div className="mt-5">
        <h4 className="text-success" style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>First Aid Tips</h4>
        <ul className="list-group shadow">
          <li className="list-group-item bg-light">For burns: Cool the burn under running water for at least 10 minutes.</li>
          <li className="list-group-item bg-light">For bleeding: Apply pressure to the wound with a clean cloth.</li>
          <li className="list-group-item bg-light">For choking: Perform the Heimlich maneuver if trained.</li>
        </ul>
      </div>
      <div className="mt-5">
        <h4 className="text-info" style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>Nearby Hospitals</h4>
        <p className="bg-light p-3 rounded shadow">
          Find the nearest hospital using <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary" style={{ fontWeight: 'bold' }}>Google Maps</a>.
        </p>
      </div>
      <div className="mt-5">
        <h4 className="text-warning" style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>Emergency Preparedness</h4>
        <ul className="list-group shadow">
          <li className="list-group-item bg-light">Keep a first aid kit at home and in your car.</li>
          <li className="list-group-item bg-light">Have emergency contact numbers saved on your phone.</li>
          <li className="list-group-item bg-light">Know the evacuation routes in your area.</li>
        </ul>
      </div>
    </div>
  );
}

export default EmergencyInfo;
