import React, { useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main Street, Springfield',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add logic to save profile details (e.g., API call)
    alert('Profile updated successfully!');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-center mb-4">Profile</h2>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            className="form-control"
            name="address"
            value={profile.address}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="text-center">
          {isEditing ? (
            <button className="btn btn-success me-2" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="btn btn-primary me-2" onClick={handleEditToggle}>
              Edit
            </button>
          )}
          {isEditing && (
            <button className="btn btn-secondary" onClick={handleEditToggle}>
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
