import React, { useState, useEffect } from "react";
import { Icons } from "../../assets/images/icons/icons";
import { userNotesBank } from "./userNotesBank";
import ActionConfirmationPopup from "../../components/ActionConfirmationModal/ActionConfirmationModal";
import "./privateNote.css";

const PrivateNote = ({ isOpen, questionId, onClose }) => {
  const [currentNote, setCurrentNote] = useState("");
  const [activePopup, setActivePopup] = useState(null);
  const [isModified, setIsModified] = useState(false);
  const charLimit = 2000;

  useEffect(() => {
    if (isOpen) {
      setCurrentNote(userNotesBank[questionId] || "");
      setIsModified(false);
    }
  }, [isOpen, questionId]);

  const handleSaveNote = () => {
    userNotesBank[questionId] = currentNote;
    console.log("Saved Notes:", userNotesBank);
    setActivePopup(null);
    onClose();
  };

  const handleDeleteNote = () => {
    delete userNotesBank[questionId];
    setCurrentNote("");
    setActivePopup(null);
    onClose();
  };

  const handleTextChange = (e) => {
    if (e.target.value.length <= charLimit) {
      setCurrentNote(e.target.value);
      setIsModified(true);
    }
  };

  const handleOverlayClick = () => {
    if (isModified) {
      setActivePopup("saveNote");
    } else {
      onClose();
    }
  };

  const popupsConfig = {
    saveNote: {
      question: "Do you want to save your note?",
      buttons: [
        {
          text: "Save the note",
          onClick: handleSaveNote,
          icon: <Icons.CiSaveDown1 size={26} style={{ strokeWidth: 0.6 }} />,
        },
        {
          text: "Discard and leave",
          onClick: () => {
            setActivePopup(null);
            onClose();
          },
          icon: <Icons.HiOutlineXMark size={20} style={{ strokeWidth: 2 }} />,
        },
      ],
    },
    deleteNote: {
      question: "Are you sure you want to delete this note?",
      buttons: [
        {
          text: "Yes, delete",
          onClick: handleDeleteNote,
          icon: <Icons.GoTrash size={20} />,
        },
        {
          text: "No, cancel",
          onClick: () => setActivePopup(null),
          icon: <Icons.HiOutlineXMark size={20} style={{ strokeWidth: 2 }} />,
        },
      ],
    },
  };

  const hasSavedNote = !!userNotesBank[questionId];

  return (
    <>
      <div
        className={`modal-overlay ${isOpen ? "open" : ""}`}
        onClick={handleOverlayClick}
      ></div>
      <div className={`private-note-container ${isOpen ? "open" : ""}`}>
        <div className="header">
          <div className="header-left-container">
            <h3>Private Note</h3>
            {hasSavedNote && (
              <div
                className="trash-icon"
                style={{ opacity: isModified ? 0.5 : 1 }}
                onClick={() => setActivePopup("deleteNote")}
              >
                <Icons.GoTrash />
              </div>
            )}
          </div>

          <button className="modal-close-button" onClick={onClose}>
            <Icons.IoCloseOutline />
          </button>
        </div>
        <div className="private-note-content">
          <textarea
            className="note-textarea"
            value={currentNote}
            onChange={handleTextChange}
            placeholder="You can put here your notes..."
          />
        </div>
        <div className="char-counter">
          {charLimit - currentNote.length} / {charLimit}
        </div>
        <div className="private-note-footer">
          <button className="save-note-button" onClick={handleSaveNote}>
            Save Note
          </button>
        </div>
      </div>

      {activePopup && (
        <ActionConfirmationPopup
          show={true}
          onOverlayClick={() => setActivePopup(null)}
          question={popupsConfig[activePopup].question}
          buttons={popupsConfig[activePopup].buttons}
        />
      )}
    </>
  );
};

export default PrivateNote;
