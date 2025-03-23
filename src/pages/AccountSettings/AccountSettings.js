import React from "react";
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle";
import "./AccountSettings.css";

const AccountSettings = () => {
  return (
    <div className="profile-settings">
      {/* Személyes adatok */}
      <div className="section">
        <h2>Personal Information</h2>
        <div className="settings-container">
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="interface-settings">
          <h2>Interface</h2>
          <div className="toggle-group-container">
            <div className="toggle-group">
              <label>Dark Mode</label>
              <div className="filter-button-container">
                <DarkModeToggle />
              </div>
            </div>

            <div className="toggle-group">
              <label>Language</label>
              <div className="filter-button-container">
                <button className="language-filter-button">EN</button>
                <button className="language-filter-button">HU</button>
              </div>
            </div>
          </div>
        </div>
        <div className="subscription-settings">
          <h2>Subscription</h2>
          <div className="subscription-settings-container">
            <p>
              Current Package: <strong>Free Plan</strong>
            </p>
            <button className="subscribe-button">Buy Subscription</button>
          </div>
        </div>

        <div className="section danger-zone">
          <h2>Danger Zone</h2>

          <div className="danger-actions">
            <div className="danger-zone-container">
              <p>
                To reset all your progress, please click on the button below.
              </p>
              <button className="danger-button">Delete All Study Data</button>
            </div>
            <div className="danger-zone-container">
              <p>Permanently delete your account.</p>
              <button className="danger-button">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
