// SettingsPopup.js
import React, { useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./SettingsPopup.css";

const SettingsPopup = ({ isOpen, onClose, children }) => {
  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("popup-overlay")) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={handleOutsideClick}>
      <div className="popup-content">
        <IoIosCloseCircleOutline className="close-button" onClick={onClose}>
          &times;
        </IoIosCloseCircleOutline>
        <h2>Settings</h2>
        {children}
      </div>
    </div>
  );
};

export default SettingsPopup;
