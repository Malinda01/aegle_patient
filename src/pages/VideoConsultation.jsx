import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function VideoConsultation() {
  const location = useLocation();
  const { patientName, appointmentDate, appointmentTime } = location.state || {};
  const [cameraOn, setCameraOn] = useState(false);
  const [micOn, setMicOn] = useState(false);
  const [callStarted, setCallStarted] = useState(false);
  const videoRef = useRef(null);

  const toggleCamera = async () => {
    if (!cameraOn) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setCameraOn(true);
      } catch (error) {
        alert('Unable to access the camera. Please check your device settings.');
        console.error('Camera error:', error);
      }
    } else {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setCameraOn(false);
    }
  };

  const toggleMic = () => {
    setMicOn(!micOn);
    alert(micOn ? 'Microphone turned off' : 'Microphone turned on');
  };

  const toggleCall = () => {
    setCallStarted(!callStarted);
    alert(callStarted ? 'Call ended' : 'Call started');
  };

  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4" style={{ color: '#007bff' }}>Video Consultation</h2>
      {patientName && appointmentDate && appointmentTime ? (
        <div>
          <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
            You are now in a video consultation session. Here are the details:
          </p>
          <div className="card shadow p-4 mt-4">
            <p><strong>Patient Name:</strong> {patientName}</p>
            <p><strong>Appointment Date:</strong> {appointmentDate}</p>
            <p><strong>Appointment Time:</strong> {appointmentTime}</p>
          </div>
          <div className="mt-4">
            <video
              ref={videoRef}
              style={{
                width: '100%',
                maxHeight: '300px',
                marginBottom: '1rem',
                display: cameraOn ? 'block' : 'none', // Hide video when the camera is off
              }}
            ></video>
            {!cameraOn && (
              <img
                src="https://i.pinimg.com/236x/68/98/85/689885ed7557e313bc0261f1c8b51c6b.jpg"
                alt="Camera Off"
                style={{ width: '100%', maxHeight: '300px', marginBottom: '1rem' }}
              />
            )}
            <button
              className={`btn ${callStarted ? 'btn-danger' : 'btn-success'} me-3`}
              onClick={toggleCall}
            >
              {callStarted ? 'End Call' : 'Start Call'}
            </button>
            <button className={`btn ${cameraOn ? 'btn-danger' : 'btn-primary'} me-3`} onClick={toggleCamera}>
              {cameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
            </button>
            <button className={`btn ${micOn ? 'btn-danger' : 'btn-success'}`} onClick={toggleMic}>
              {micOn ? 'Turn Off Microphone' : 'Turn On Microphone'}
            </button>
          </div>
        </div>
      ) : (
        <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
          No consultation details available.
        </p>
      )}
    </div>
  );
}

export default VideoConsultation;
