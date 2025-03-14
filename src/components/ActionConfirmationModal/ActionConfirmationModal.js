import React from "react";
import PropTypes from "prop-types";
import { Icons } from "../../assets/images/icons/icons";
import "./ActionConfirmationModal.css";

const ActionConfirmationPopup = ({
  show,
  onOverlayClick,
  question,
  buttons,
}) => {
  if (!show) return null;

  return (
    <div className="action-confirmation-popup-overlay" onClick={onOverlayClick}>
      <div
        className="action-confirmation-popup-content"
        onClick={(e) => e.stopPropagation()} // Prevent click from propagating to overlay
      >
        <div className="action-confirmation-popup-content-header">
          <Icons.HiOutlineXMark
            size={24}
            className="action-confirmation-popup-close-icon"
            onClick={onOverlayClick}
            style={{
              strokeWidth: 2,
            }}
          />
        </div>

        <p>{question}</p>
        <div className="button-group">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className={button.className || ""}
            >
              <div className="action-confirmation-popup-content-button-group-icon">
                {button.icon && button.icon}
              </div>
              <div className="action-confirmation-popup-content-button-group-text">
                <p>{button.text}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

ActionConfirmationPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  onOverlayClick: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      icon: PropTypes.node,
      className: PropTypes.string,
    })
  ).isRequired,
};

export default ActionConfirmationPopup;
