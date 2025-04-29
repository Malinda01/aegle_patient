import React, { useState } from 'react';

function Prescription() {
  const [prescription, setPrescription] = useState('');
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (!prescription.trim()) {
      alert('Please enter prescription details.');
      return;
    }
    setGenerated(true);
    alert('Prescription generated successfully!');
  };

  const handleReset = () => {
    setPrescription('');
    setGenerated(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-center mb-4">Prescription</h2>
        {!generated ? (
          <>
            <textarea
              className="form-control mb-3"
              rows="6"
              placeholder="Enter prescription details here..."
              value={prescription}
              onChange={(e) => setPrescription(e.target.value)}
            ></textarea>
            <button className="btn btn-primary w-100" onClick={handleGenerate}>
              Generate Prescription
            </button>
          </>
        ) : (
          <>
            <h5 className="text-success">Prescription:</h5>
            <p className="border p-3 rounded">{prescription}</p>
            <button className="btn btn-secondary w-100 mt-3" onClick={handleReset}>
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Prescription;
