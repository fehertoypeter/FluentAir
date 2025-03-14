import React from "react";
import "./CommentForm.css";

export const CommentForm = () => {
  return (
    <div className="comment-form-container">
      <textarea
        className="comment-form-textarea"
        placeholder="Write a comment..."
        rows={3}
      />
      <div className="comment-form-button-container">
        <button className="comment-form-button">Post Comment</button>
      </div>
    </div>
  );
};
