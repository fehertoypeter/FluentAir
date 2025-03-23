import React, { useState, useEffect, useRef } from "react";
import "./ProfileMenu.css";
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle";
import DefaultProfilePic from "../../assets/images/Profile/profile-picture.jpg";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const profilePicRef = useRef(null); // Új ref a profilképre
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    // Bezárjuk a menüt, ha a kattintás a menün vagy a profilképen kívül történt
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !profilePicRef.current.contains(event.target)
    ) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    if (isMenuVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuVisible]);

  return (
    <div className="profile-menu-container">
      <div className="profile-picture" onClick={toggleMenu} ref={profilePicRef}>
        <img
          src={false || DefaultProfilePic}
          alt="Profile"
          className="profile-picture-img"
        />
      </div>

      <div
        ref={menuRef}
        className={`floating-menu ${isMenuVisible ? "visible" : ""}`}
      >
        <button className="menu-button" onClick={() => navigate("/account")}>
          <FiUser className="menu-icon" />
          Account
        </button>
        <button className="menu-button" onClick={() => navigate("/settings")}>
          <FiSettings className="menu-icon" />
          Settings
        </button>
        <button className="menu-button" onClick={() => navigate("/sign-in")}>
          <FiLogOut className="menu-icon" />
          Logout
        </button>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default ProfileMenu;
