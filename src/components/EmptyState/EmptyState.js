import React from "react";
import { Icons } from "../../assets/icons/icons";
import "./EmptyState.css";

// Előre definiált típusok
const emptyStateTypes = {
  emptyNote: {
    icon: Icons.CiFileOn,
    title: "You currently have no notes.",
    description:
      "You can add notes to test tasks by clicking the comment icon in the bottom left panel.",
  },
  emptyComment: {
    icon: Icons.CiChat1,
    title: "No comments yet.",
    description:
      "Be the first to leave a comment by clicking the comment icon below.",
  },
  emptyCollections: {
    icon: Icons.GoBookmark,
    title: "No Collections yet.",
    description: "Start organizing your items by creating a new collection.",
  },
  emptyQuestions: {
    icon: Icons.CiCircleQuestion,
    title: "No questions added yet.",
    description:
      "You can add new questions by clicking the 'Add Question' button.",
  },
};

const EmptyState = ({ type }) => {
  const {
    icon: Icon,
    title,
    description,
  } = emptyStateTypes[type] || emptyStateTypes.emptyNote;

  return (
    <div className="no-notes-message">
      <div className="empty-state">
        <Icon />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EmptyState;
