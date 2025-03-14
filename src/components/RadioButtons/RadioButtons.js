import React from "react";
import "./RadioButtons.css";

const RadioButtons = ({ values, selectedValue, onChange, description }) => {
  return (
    <div className="radio-buttons-container">
      {description && <span className="radio-description">{description}</span>}
      <div className="radioContainer">
        {values.map((value, index) => (
          <label
            key={index}
            className={`radioButton ${
              selectedValue === value ? "selected" : ""
            } ${
              index === 0 ? "first" : index === values.length - 1 ? "last" : ""
            }`}
          >
            <input
              type="radio"
              name="radioGroup"
              value={value}
              checked={selectedValue === value}
              onChange={() => onChange(value)}
            />
            {value}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtons;
