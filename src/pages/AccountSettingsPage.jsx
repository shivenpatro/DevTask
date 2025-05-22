import React from 'react';
import './AccountSettingsPage.css'; // Import the CSS file

const AccountSettingsPage = () => {
  // Using a generic Gravatar mystery person placeholder
  const profileImageUrl = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=70'; 

  return (
    <div className="page-content">
      <div className="account-settings-container"> {/* Renamed for clarity, or keep account-settings-page */}
        <div className="account-settings-header">
          <h2>Account Settings</h2>
        </div>
        <div className="account-settings-content-area">
          <div className="main-content-above-lower-divider"> {/* New wrapper */}
            <div className="profile-section">
              <div className="profile-image-container">
                <img src={profileImageUrl} alt="Profile" className="profile-pic" />
                <div className="camera-icon">
                  {/* The ::before pseudo-element in CSS will add the camera emoji */}
                </div>
              </div>
              <div className="profile-info">
                <p className="user-name">Marry Doe</p>
                <p className="user-email">Marry@Gmail.Com</p>
              </div>
            </div>

            <p className="info-text">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>

            <hr className="divider" /> {/* First divider */}
          </div>

          {/* Placeholder for any other settings or logout button */}
          {/* Second divider, pushed to bottom by margin-top: auto if parent is flex column */}
          <hr className="divider" style={{ marginTop: 'auto' }} /> 
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
