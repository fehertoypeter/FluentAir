import React from "react";
import "./Input.css"; // Importáljuk a CSS-t

const Input = ({ value, onChange, id, placeholder, description }) => {
  return (
    <div className="settings-row modified mt30">
      <div>
        <div className="inputBox">
          <input
            type="text"
            id={id}
            value={value}
            onChange={onChange}
            required
          />
          <span>{placeholder}</span>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Input;
