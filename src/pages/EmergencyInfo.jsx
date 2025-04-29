function EmergencyInfo() {
    return (
      <div className="container mt-5">
        <h2 className="text-center text-danger mb-4">Emergency Assistance</h2>
        <ul className="list-group shadow">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Emergency Hotline:</strong> <span className="text-primary">1990</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Nearest Hospital:</strong> <span className="text-primary">Colombo General Hospital</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Ambulance Service:</strong> <span className="text-primary">110</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Fire Department:</strong> <span className="text-primary">118</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Police Emergency:</strong> <span className="text-primary">119</span>
          </li>
        </ul>
        <div className="mt-5">
          <h4 className="text-success">First Aid Tips</h4>
          <ul className="list-group shadow">
            <li className="list-group-item">For burns: Cool the burn under running water for at least 10 minutes.</li>
            <li className="list-group-item">For bleeding: Apply pressure to the wound with a clean cloth.</li>
            <li className="list-group-item">For choking: Perform the Heimlich maneuver if trained.</li>
          </ul>
        </div>
        <div className="mt-5">
          <h4 className="text-info">Nearby Hospitals</h4>
          <p className="bg-light p-3 rounded shadow">
            Find the nearest hospital using <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">Google Maps</a>.
          </p>
        </div>
        <div className="mt-5">
          <h4 className="text-warning">Emergency Preparedness</h4>
          <ul className="list-group shadow">
            <li className="list-group-item">Keep a first aid kit at home and in your car.</li>
            <li className="list-group-item">Have emergency contact numbers saved on your phone.</li>
            <li className="list-group-item">Know the evacuation routes in your area.</li>
          </ul>
        </div>
      </div>
    );
}

export default EmergencyInfo;
