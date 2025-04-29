import { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!formData.fullName || !formData.email || !formData.password) {
      alert('Please fill in all fields.');
      return;
    }
    // Add logic to handle registration (e.g., API call)
    console.log('Registration successful:', formData);
    alert('Registration successful!');
    setFormData({ fullName: '', email: '', password: '' }); // Clear form
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-5" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-center mb-5">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
