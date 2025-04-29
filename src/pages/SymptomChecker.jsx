import React, { useState } from 'react';

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState('');

  const handleCheckSymptoms = () => {
    if (!symptoms.trim()) {
      alert('Please enter your symptoms.');
      return;
    }
    // Simulate AI response (replace with actual API call)
    setResult('Based on your symptoms, you may want to consult a doctor for further evaluation.');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-5" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-center mb-4">Symptom Checker</h2>
        <textarea
          className="form-control mb-3"
          rows="5"
          placeholder="Describe your symptoms here..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        ></textarea>
        <button className="btn btn-primary w-100 mb-3" onClick={handleCheckSymptoms}>
          Check Symptoms
        </button>
        {result && <div className="alert alert-info mt-3">{result}</div>}
      </div>
    </div>
  );
}

export default SymptomChecker;
