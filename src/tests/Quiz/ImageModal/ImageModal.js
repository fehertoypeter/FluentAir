import React, { useState } from "react";
import "./ImageModal.css"; // Stílusok a komponenshez

const ImageModal = ({ imageUrl }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  if (!imageUrl) return null;

  return (
    <div className="image-modal-container">
      <img
        src={imageUrl}
        alt="Question"
        className="thumbnail"
        onClick={() => setModalOpen(true)}
      />
      {isModalOpen && (
        <div
          className="image-modal-overlay"
          onClick={() => setModalOpen(false)}
        >
          <div className="image-modal-content">
            <span
              className="image-modal-close-button"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </span>
            <img src={imageUrl} alt="Question" className="full-size-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
