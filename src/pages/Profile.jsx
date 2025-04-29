import React, { useState } from 'react';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main Street, Colombo, Sri Lanka',
    dateOfBirth: '1990-01-01',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
    // Add logic to save the updated profile data (e.g., API call)
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4" style={{ color: '#007bff' }}>Profile</h1>
      <div className="card shadow p-4">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          {isEditing ? (
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={profileData.fullName}
              onChange={handleChange}
            />
          ) : (
            <p>{profileData.fullName}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          {isEditing ? (
            <input
              type="email"
              className="form-control"
              name="email"
              value={profileData.email}
              onChange={handleChange}
            />
          ) : (
            <p>{profileData.email}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          {isEditing ? (
            <input
              type="text"
              className="form-control"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
            />
          ) : (
            <p>{profileData.phone}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          {isEditing ? (
            <textarea
              className="form-control"
              name="address"
              value={profileData.address}
              onChange={handleChange}
            ></textarea>
          ) : (
            <p>{profileData.address}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          {isEditing ? (
            <input
              type="date"
              className="form-control"
              name="dateOfBirth"
              value={profileData.dateOfBirth}
              onChange={handleChange}
            />
          ) : (
            <p>{profileData.dateOfBirth}</p>
          )}
        </div>
        <div className="d-flex justify-content-end">
          {isEditing ? (
            <button className="btn btn-success me-2" onClick={handleSave}>
              Save
            </button>
          ) : null}
          <button className="btn btn-primary" onClick={handleEditToggle}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
