import React from "react";
import "./NumericInputPad.css";

let isClickable = true; // Globális változó, amely vezérli a gombok kattinthatóságát

// Függvény a kattinthatóság állapotának beállításához
export const numericInputPadClickable = (state) => {
  isClickable = state;
};

const NumericInputPad = ({ inputRef, onInputChange }) => {
  const handleButtonClick = (digit) => {
    if (inputRef.current && isClickable) {
      inputRef.current.value += digit;
      onInputChange(inputRef.current.value); // Update the state directly
    }
  };

  const handleClearInput = () => {
    if (inputRef.current && isClickable) {
      inputRef.current.value = inputRef.current.value.slice(0, -1);
      onInputChange(inputRef.current.value); // Update the state directly
    }
  };

  return (
    <div id="input-buttons" className="unloaded">
      {Array.from({ length: 9 }, (_, index) => (
        <button
          key={index + 1}
          className="input-button"
          data-digit={index + 1}
          onClick={() => handleButtonClick(index + 1)}
          disabled={!isClickable} // Disable button if not clickable
        >
          {index + 1}
        </button>
      ))}
      <button
        className="input-button wide-button"
        data-digit="0"
        onClick={() => handleButtonClick(0)}
        disabled={!isClickable} // Disable the '0' button
      >
        0
      </button>
      <button
        id="clearInput"
        className="input-button clear-button"
        onClick={handleClearInput}
        disabled={!isClickable} // Disable the 'C' button
      >
        C
      </button>
    </div>
  );
};

export default NumericInputPad;
