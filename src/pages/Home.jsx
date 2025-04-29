import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Home() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setSelectedFiles([...e.target.files]);
    };

    const handleUpload = () => {
        if (selectedFiles.length === 0) {
            alert('Please select files to upload.');
            return;
        }
        // Add logic to handle file upload (e.g., API call)
        alert('Files uploaded successfully!');
        setSelectedFiles([]); // Clear the selected files after upload
    };

    const handleSendMessage = () => {
        if (!message.trim()) {
            alert('Please enter a message.');
            return;
        }
        // Add logic to send the message (e.g., API call)
        alert(`Message sent: ${message}`);
        setMessage(''); // Clear the message input after sending
    };

    return (
        <div className="container text-center mt-5 mb-5"> {/* Added mb-5 for bottom margin */}
            <h1>Welcome to Aegle</h1>
            <p>Universal Healthcare at Your Fingertips</p>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <img 
                            src="https://i.pinimg.com/736x/de/20/37/de20372a7a222a686f9c57da676eeec3.jpg" 
                            alt="Find Doctors" 
                            className="card-img-top"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Find Doctors</h5>
                            <p className="card-text">
                                Easily search for healthcare professionals based on specialty, location, and availability. 
                                Connect with trusted doctors to get the care you need.
                            </p>
                            <Link className="btn btn-primary" to="/doctors">Find Doctors</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <img 
                            src="https://i.pinimg.com/236x/5e/94/d4/5e94d4738c3ad8b52a1b60fb6f136ada.jpg" 
                            alt="Emergency Info" 
                            className="card-img-top"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Emergency Info</h5>
                            <p className="card-text">
                                Quickly access critical emergency contact numbers, first aid tips, and nearby hospital locations. 
                                Be prepared for any situation with our comprehensive resources.
                            </p>
                            <Link className="btn btn-secondary" to="/emergency">Emergency Info</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">Send Documentations</h5>
                            <p className="card-text">
                                Upload images or PDFs to share important medical documents with your healthcare provider.
                            </p>
                            <input
                                type="file"
                                className="form-control mb-3"
                                multiple
                                accept=".jpg,.jpeg,.png,.pdf"
                                onChange={handleFileChange}
                            />
                            <button className="btn btn-primary" onClick={handleUpload}>
                                Upload Files
                            </button>
                            {selectedFiles.length > 0 && (
                                <div className="mt-3">
                                    <h6>Selected Files:</h6>
                                    <ul className="list-group">
                                        {selectedFiles.map((file, index) => (
                                            <li key={index} className="list-group-item">
                                                {file.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">Send a Message</h5>
                            <p className="card-text">
                                Use the form below to send a message to your healthcare provider.
                            </p>
                            <textarea
                                className="form-control mb-3"
                                rows="4"
                                placeholder="Type your message here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <button className="btn btn-success" onClick={handleSendMessage}>
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
