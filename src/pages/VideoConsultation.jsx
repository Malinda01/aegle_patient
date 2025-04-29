import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function VideoConsultation() {
    const videoRef = useRef(null);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        if (isCameraOn) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                })
                .catch((error) => {
                    console.error('Error accessing camera:', error);
                });
        } else {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach((track) => track.stop());
                videoRef.current.srcObject = null;
            }
        }
    }, [isCameraOn]);

    const toggleCamera = () => {
        setIsCameraOn((prev) => !prev);
    };

    const endCall = () => {
        setIsCameraOn(false); // Turn off the camera
        setCallEnded(true); // Mark the call as ended
        console.log('Call ended');
    };

    const handleSubmitReview = () => {
        if (!review.trim() || rating === 0) {
            alert('Please provide a review and rating.');
            return;
        }
        // Add logic to save the review (e.g., API call)
        alert(`Review submitted: ${review}, Rating: ${rating} stars`);
        setReview('');
        setRating(0);
    };

    return (
        <div className="container mt-5 text-center">
            <h2>Video Consultation</h2>
            <p>Connecting you to the doctor...</p>
            <div className="mt-4">
                <video ref={videoRef} autoPlay playsInline className="border" style={{ width: '100%', maxWidth: '600px' }}></video>
            </div>
            {!callEnded ? (
                <>
                    <button className="btn btn-primary mt-3" onClick={toggleCamera}>
                        {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
                    </button>
                    <button className="btn btn-danger mt-3 ms-2" onClick={endCall}>
                        End Call
                    </button>
                </>
            ) : (
                <>
                    <h3 className="mt-4">Review Your Doctor</h3>
                    <textarea
                        className="form-control mb-3"
                        rows="4"
                        placeholder="Write your review here..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    ></textarea>
                    <div className="mb-3">
                        <label className="form-label">Rating:</label>
                        <select
                            className="form-select"
                            value={rating}
                            onChange={(e) => setRating(Number(e.target.value))}
                        >
                            <option value="0">Select Rating</option>
                            <option value="1">1 Star</option>
                            <option value="2">2 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="5">5 Stars</option>
                        </select>
                    </div>
                    <button className="btn btn-success" onClick={handleSubmitReview}>
                        Submit Review
                    </button>
                    <Link to="/" className="btn btn-secondary mt-3 ms-2">
                        Return Home
                    </Link>
                </>
            )}
        </div>
    );
}

export default VideoConsultation;
