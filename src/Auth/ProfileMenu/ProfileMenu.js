import React, { useState, useEffect, useRef } from "react";
import "./ProfileMenu.css";
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle";
import DefaultProfilePic from "../../assets/images/Profile/profile-picture.jpg";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const ProfileMenu = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [userPhoto, setUserPhoto] = useState(DefaultProfilePic);
  const [userName, setUserName] = useState("");
  const menuRef = useRef(null);
  const profilePicRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
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

  // Load current user info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserPhoto(user.photoURL || DefaultProfilePic);
        setUserName(user.displayName || "");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/sign-in");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="profile-menu-container">
      <div className="profile-picture" onClick={toggleMenu} ref={profilePicRef}>
        <img
          src={userPhoto}
          alt="Profile"
          className="profile-picture-img"
          title={userName}
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
        <button className="menu-button" onClick={handleLogout}>
          <FiLogOut className="menu-icon" />
          Logout
        </button>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default ProfileMenu;
