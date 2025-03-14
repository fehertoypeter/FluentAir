import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./ExplanationModal.css";
import { MathComponent } from "mathjax-react";
import ImageModal from "./ImageModal/ImageModal";

const ExplanationModal = ({ isOpen, content, onClose }) => {
  // Az explanation array feldolgozása
  const renderContent = content.map((item, index) => {
    if (item.type === "math") {
      return <MathComponent key={index} tex={item.content} />;
    } else if (item.type === "text") {
      return (
        <p key={index} dangerouslySetInnerHTML={{ __html: item.content }} />
      );
    } else if (item.type === "image" && item.content) {
      return <ImageModal key={index} imageUrl={item.content} />;
    }
    return null;
  });

  return (
    <>
      <div
        className={`modal-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`modal-container ${isOpen ? "open" : ""}`}>
        <div className="header">
          <h3>Explanation</h3>
          <button className="modal-close-button" onClick={onClose}>
            <IoCloseOutline />
          </button>
        </div>
        <div className="modal-content">{renderContent}</div>
      </div>
    </>
  );
};

export default ExplanationModal;
