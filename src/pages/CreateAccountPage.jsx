import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CreateAccountPage.css'; // Import the CSS file

const CreateAccountPage = () => {
  const [isAgency, setIsAgency] = useState(null); // 'yes' or 'no'
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle account creation logic here
    console.log('Create Account form submitted', { isAgency });
    // Navigate to account settings page upon successful creation
    navigate('/account-settings'); 
  };

  return (
    <div className="page-content">
      <div className="create-account-page">
        <div className="create-account-form-content">
          <h2>Create your<br />PopX account</h2>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name<span className="required-asterisk">*</span></label>
            <input type="text" id="fullName" placeholder="Enter full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone number<span className="required-asterisk">*</span></label>
            <input type="tel" id="phoneNumber" placeholder="Enter phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address<span className="required-asterisk">*</span></label>
            <input type="email" id="email" placeholder="Enter email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password<span className="required-asterisk">*</span></label>
            <input type="password" id="password" placeholder="Enter password" required />
          </div>
          <div className="form-group">
            <label htmlFor="companyName">Company name</label>
            <input type="text" id="companyName" placeholder="Enter company name" />
          </div>

            <div className="radio-group">
              <p>Are you an Agency?<span className="required-asterisk">*</span></p>
              <div className="radio-option-group">
                <label className="radio-option" htmlFor="agencyYes">
                  <input 
                    type="radio" 
                    id="agencyYes" 
                    name="agency" 
                    value="yes" 
                    checked={isAgency === 'yes'}
                    onChange={() => setIsAgency('yes')}
                  required 
                  />
                  <span className="radio-label-text">Yes</span>
                </label>
                <label className="radio-option" htmlFor="agencyNo">
                  <input 
                    type="radio" 
                    id="agencyNo" 
                    name="agency" 
                    value="no" 
                    checked={isAgency === 'no'}
                    onChange={() => setIsAgency('no')}
                    required
                  />
                  <span className="radio-label-text">No</span>
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="btn-create-account-container">
          {/* The button is outside the form to be at the bottom, form submission handled by form's onSubmit */}
          {/* For actual submission, button type="submit" and form="formId" can be used, or JS handles it. */}
          {/* Here, we'll trigger form submission via a click handler on this button if needed, or ensure it's type="submit" for the form above. */}
          {/* For simplicity, let's assume the form tag wraps this too, or we handle submission differently. */}
          {/* The current CSS pushes this container to the bottom. The button inside will trigger the form's onSubmit. */}
          <button type="submit" form="createAccountForm" className="btn-create-account">Create Account</button>
        </div>
      </div>
    </div>
  );
};

// Add id to form to link button
const CreateAccountPageWithFormId = () => {
  const [isAgency, setIsAgency] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Create Account form submitted', { isAgency });
    navigate('/account-settings');
  };

  return (
    <div className="page-content">
      <div className="create-account-page">
        <form id="createAccountForm" onSubmit={handleSubmit} className="create-account-form-content">
          <h2>Create your<br />PopX account</h2>
          <div className="form-group">
            <label htmlFor="fullName">Full Name<span className="required-asterisk">*</span></label>
            <input type="text" id="fullName" placeholder="Enter full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone number<span className="required-asterisk">*</span></label>
            <input type="tel" id="phoneNumber" placeholder="Enter phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address<span className="required-asterisk">*</span></label>
            <input type="email" id="email" placeholder="Enter email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password<span className="required-asterisk">*</span></label>
            <input type="password" id="password" placeholder="Enter password" required />
          </div>
          <div className="form-group">
            <label htmlFor="companyName">Company name</label>
            <input type="text" id="companyName" placeholder="Enter company name" />
          </div>
          <div className="radio-group">
            <p>Are you an Agency?<span className="required-asterisk">*</span></p>
            <div className="radio-option-group">
              <label className="radio-option" htmlFor="agencyYes">
                <input 
                  type="radio" 
                  id="agencyYes" 
                  name="agency" 
                  value="yes" 
                  checked={isAgency === 'yes'}
                  onChange={() => setIsAgency('yes')}
                  required 
                />
                <span className="radio-label-text">Yes</span>
              </label>
              <label className="radio-option" htmlFor="agencyNo">
                <input 
                  type="radio" 
                  id="agencyNo" 
                  name="agency" 
                  value="no" 
                  checked={isAgency === 'no'}
                  onChange={() => setIsAgency('no')}
                  required
                />
                <span className="radio-label-text">No</span>
              </label>
            </div>
          </div>
        </form>
        <div className="btn-create-account-container">
          <button type="submit" form="createAccountForm" className="btn-create-account">Create Account</button>
        </div>
      </div>
    </div>
  );
};


export default CreateAccountPageWithFormId;
