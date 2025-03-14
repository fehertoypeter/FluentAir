import React, { useState, useEffect } from "react";
import "./CustomSwitch.css";

const CustomSwitch = ({
  setting,
  onChange,
  isExamActive,
  onPopupRequest,
  resetInput,
}) => {
  const [isActive, setIsActive] = useState(setting.value);

  // Az állapotot frissítjük, ha a setting változik
  useEffect(() => {
    setIsActive(setting.value);
  }, [setting.value]);

  const handleToggle = () => {
    resetInput();
    // Ha az exam aktív, kérjük a popup megjelenítését
    if (isExamActive) {
      onPopupRequest(); // Meghívjuk a szülő komponensben lévő popup megjelenítésére szolgáló függvényt

      return; // Megállítjuk a toggle végrehajtását
    }

    // Ha nem aktív az exam, akkor folytatódik a toggle
    const newValue = !isActive;
    setIsActive(newValue);
    onChange(setting.id, newValue); // Átadjuk a változást a szülő komponensnek
  };

  return (
    <div className="custom-switch" onClick={handleToggle}>
      <div
        className={`switch-option ${!isActive ? "active" : ""}`}
        style={{
          backgroundColor: !isActive ? "white" : "transparent",
        }}
      >
        Practice
      </div>
      <div
        className={`switch-option ${isActive ? "active" : ""}`}
        style={{
          backgroundColor: isActive ? "white" : "transparent",
        }}
      >
        Exam
      </div>
    </div>
  );
};

export default CustomSwitch;
