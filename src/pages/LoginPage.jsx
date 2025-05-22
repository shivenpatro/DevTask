import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    // For now, it will navigate via the Link component
    console.log('Login form submitted');
  };

  return (
    <div className="page-content">
      <div className="login-page-container">
        <h2>Signin to your<br />PopX account</h2>
        <p className="sub-text">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" required />
          </div>
          {/* The button is now part of the form, Link can be removed if navigation is handled by form submission logic */}
          {/* For now, we keep the Link for simple navigation, but ideally, form submission would navigate */}
          <Link to="/account-settings" style={{ textDecoration: 'none' }}>
            <button type="submit" className="btn-login">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
