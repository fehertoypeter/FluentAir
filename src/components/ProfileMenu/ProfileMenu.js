import React, { useState, useEffect, useRef } from "react";
import "./ProfileMenu.css";
import profilePicture from "../../assets/images/Profile/profile-picture.jpg";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";

const ProfileMenu = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null); // Reference to the menu container

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener for outside clicks
    if (isMenuVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuVisible]);

  return (
    <div className="profile-menu-container">
      {/* Profile picture */}
      <div className="profile-picture" onClick={toggleMenu}>
        <img
          src={profilePicture}
          alt="Profile"
          className="profile-picture-img"
        />
      </div>

      {/* Floating menu */}
      {isMenuVisible && (
        <div className="floating-menu" ref={menuRef}>
          <button className="menu-button">
            <FiUser className="menu-icon" />
            Account
          </button>
          <button className="menu-button">
            <FiSettings className="menu-icon" />
            Settings
          </button>
          <button className="menu-button">
            <FiLogOut className="menu-icon" />
            Logout
          </button>
          <DarkModeToggle />
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
