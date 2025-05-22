import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css'; // Import the CSS file

const WelcomePage = () => {
  return (
    <div className="page-content">
      <div className="welcome-page-container">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
        <Link to="/create-account" className="btn btn-primary">
          Create Account
        </Link>
        <Link to="/login" className="btn btn-secondary">
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
