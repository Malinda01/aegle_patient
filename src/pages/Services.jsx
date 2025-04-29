import React from 'react';

function Services() {
  const services = [
    { title: 'General Consultation', description: 'Get expert advice for your general health concerns.' },
    { title: 'Pediatrics', description: 'Specialized care for infants, children, and adolescents.' },
    { title: 'Cardiology', description: 'Comprehensive heart care and cardiovascular treatments.' },
    { title: 'Dermatology', description: 'Skin care and treatment for various dermatological conditions.' },
    { title: 'Orthopedics', description: 'Diagnosis and treatment of bone and joint disorders.' },
    { title: 'Neurology', description: 'Expert care for brain and nervous system disorders.' },
    { title: 'Psychiatry', description: 'Mental health support and psychiatric treatments.' },
    { title: 'Radiology', description: 'Advanced imaging services for accurate diagnosis.' },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" style={{ color: '#007bff' }}>Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card text-center shadow" style={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              {service.title === 'General Consultation' && (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10202/10202726.png"
                  alt="General Consultation"
                  style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                />
              )}
              {service.title === 'Pediatrics' && (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10154/10154457.png"
                  alt="Pediatrics"
                  style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                />
              )}
              {service.title === 'Cardiology' && (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2504/2504277.png"
                  alt="Cardiology"
                  style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                />
              )}
              {service.title === 'Dermatology' && (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4902/4902972.png"
                  alt="Dermatology"
                  style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                />
              )}
              {service.title === 'Orthopedics' && (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4006/4006233.png"
                  alt="Orthopedics"
                  style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                />
              )}
              {service.title === 'Neurology' && (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3974/3974827.png"
                  alt="Neurology"
                  style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                />
              )}
              {service.title === 'Psychiatry' && (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9133/9133692.png"
                  alt="Psychiatry"
                  style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                />
              )}
              {service.title === 'Radiology' && (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/7399/7399390.png"
                  alt="Radiology"
                  style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                />
              )}
              <h5 className="card-title mb-2">{service.title}</h5>
              <p className="card-text" style={{ fontSize: '0.9rem', color: '#6c757d' }}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
