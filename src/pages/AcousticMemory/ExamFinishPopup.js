import React from "react";
import { FaFlagCheckered } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import "./ExamFinishPopup.css"; // Popup stílusok

const ExamFinishPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="exam-finish-popup-overlay">
      <div className="exam-finish-popup">
        <div className="exam-finish-popup-header">
          <p>Do you want to finish the exam?</p>
        </div>

        <div className="exam-finish-popup-buttons">
          <button onClick={onConfirm} className="confirm-button">
            <FaFlagCheckered />
            <p>Yes, finish and see the result</p>
          </button>
          <button onClick={onCancel} className="cancel-button">
            <FaXmark />
            <p>No, continue the exam</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamFinishPopup;
