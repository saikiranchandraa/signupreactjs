import React, { useState } from 'react';
import './App.css'; // Import your CSS file



function SignUp() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (!validateName(formData.firstName)) {
      alert('Please enter a valid first name.');
      return;
    }

    if (!validateName(formData.lastName)) {
      alert('Please enter a valid last name.');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validateMobile(formData.mobile)) {
      alert('Please enter a valid mobile number.');
      return;
    }

    if (!validatePassword(formData.password)) {
      alert('Password should be at least 8 characters long.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // If all validations pass, you can perform further actions here
    // For demonstration purposes, display a success message
    alert('Sign up successful!');
  };

  // Validation functions (same as in the previous code)
  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobile) => /^\d{10}$/.test(mobile);
  const validatePassword = (password) => password.length >= 8;

  return (
    
    <div className="container">
      
    
      <div className="background">

      <div className="card">

        <div className="logo">
          {/* <img src={Image} alt="Your Logo" /> */}
          <h1 className='heading-app'>Friender</h1>
          <p className="app-caption">Connect with friends, follow passions, sign up now!</p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              id="mobile"
              placeholder="Mobile Number"
              required
              value={formData.mobile}
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <p className="login-link">
            Already have an account? <a href="path_to_login_page">Log in</a>
          </p>
        </div>
      </div>
      </div>
    </div>
    
  );


  }
export default SignUp;

