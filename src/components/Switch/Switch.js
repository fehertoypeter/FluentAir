import React from "react";
import "./Switch.css";

const Switch = ({ id, description, isChecked, onChange }) => {
  return (
    <div className="settings-row">
      <div className="description modified">
        <p>{description}</p>
      </div>
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(e.target.checked)} // Értesíti a szülőt a változásról
          id={id}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
