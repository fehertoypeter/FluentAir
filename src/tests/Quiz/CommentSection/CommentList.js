import React, { useState, useRef, useEffect } from "react";
import { Icons } from "../../../assets/icons/icons";
import { BsFillSendCheckFill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

import "./CommentList.css";
import { formatTimestamp } from "../../../utils/formatTimeStamp";

export const CommentList = ({
  comments,
  onReply,
  onLike,
  onDislike,
  onDelete,
  onEdit,
  editingCommentId,
  editedComment,
  setEditedComment,
  saveEdit,
}) => {
  const [activeCommentOptions, setActiveCommentOptions] = useState(null);
  const [activeReplyOptions, setActiveReplyOptions] = useState(null);
  const [expandedComments, setExpandedComments] = useState({});
  const [expandedReplies, setExpandedReplies] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const commentRefs = useRef({});
  const replyRefs = useRef({});
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [editedComment]);

  const toggleCommentOptions = (commentId) => {
    setActiveCommentOptions((prev) => (prev === commentId ? null : commentId));
    setActiveReplyOptions(null); // Inaktiváljuk a reply opciókat
    setIsEditing(false);
    handleCancel();
  };

  const toggleReplyOptions = (replyId, parentCommentId) => {
    const uniqueId = `${parentCommentId}-${replyId}`;
    setActiveReplyOptions((prev) => (prev === uniqueId ? null : uniqueId));
    setActiveCommentOptions(null); // Inaktiváljuk a comment opciókat
    setIsEditing(false);
    handleCancel();
  };

  const toggleExpandComment = (commentId) => {
    const commentElement = commentRefs.current[commentId];
    if (!commentElement) return;

    if (expandedComments[commentId]) {
      commentElement.classList.remove("expanded");
      setExpandedComments((prev) => ({
        ...prev,
        [commentId]: false,
      }));
    } else {
      commentElement.classList.add("expanded");
      setExpandedComments((prev) => ({
        ...prev,
        [commentId]: true,
      }));
    }
  };

  const toggleExpandReply = (replyId, parentCommentId) => {
    const uniqueId = `${parentCommentId}-${replyId}`;
    const replyElement = replyRefs.current[uniqueId];
    if (replyElement) {
      if (expandedReplies[uniqueId]) {
        replyElement.classList.remove("expanded");
        setExpandedReplies((prev) => ({
          ...prev,
          [uniqueId]: false,
        }));
      } else {
        replyElement.classList.add("expanded");
        setExpandedReplies((prev) => ({
          ...prev,
          [uniqueId]: true,
        }));
      }
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const handleEditClick = (commentId, content) => {
    if (isEditing) {
      handleSaveEdit(editingCommentId);
    }
    setIsEditing(true);
    onEdit(commentId, content);
  };

  const handleSaveEdit = (
    commentId,
    isReply = false,
    parentCommentId = null
  ) => {
    saveEdit(commentId, isReply, parentCommentId);
    setIsEditing(false);
  };

  const handleDeleteClick = (
    commentId,
    isReply = false,
    parentCommentId = null
  ) => {
    onDelete(commentId, isReply, parentCommentId);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedComment("");
    onEdit(null, "");
  };

  return (
    <div className="comment-list-container">
      {comments.map((comment) => {
        const isCommentExpanded = expandedComments[comment.id];
        const commentText = isCommentExpanded
          ? comment.content
          : truncateText(comment.content, 150);

        return (
          <div key={comment.id} className="comment-item">
            <div className="comment-content">
              <div className="comment-header">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <div className="comment-avatar-container">
                      <img
                        src={comment.avatar}
                        alt={comment.author}
                        className="comment-avatar"
                      />
                      <h3 className="comment-author">
                        {comment.author}
                        {comment.edited && (
                          <span className="edited-label"> (edited)</span>
                        )}
                      </h3>
                    </div>
                    <span className="comment-timestamp">
                      {formatTimestamp(comment.timestamp)}
                    </span>
                  </div>
                  {editingCommentId === comment.id ? (
                    <textarea
                      ref={textareaRef}
                      className="edit-comment-textarea"
                      value={editedComment}
                      onChange={(e) => setEditedComment(e.target.value)}
                    />
                  ) : (
                    <p
                      ref={(el) => (commentRefs.current[comment.id] = el)}
                      className={`comment-text ${
                        isCommentExpanded ? "expanded" : ""
                      }`}
                    >
                      {commentText}
                    </p>
                  )}

                  <div className="comment-actions">
                    {comment.content.length > 150 && (
                      <button
                        className="show-more-button"
                        onClick={() => toggleExpandComment(comment.id)}
                      >
                        {isCommentExpanded ? "Show Less" : "Show More"}
                      </button>
                    )}
                    <button
                      className="comment-action-button"
                      onClick={() => onLike(comment.id)}
                    >
                      {comment.liked ? (
                        <Icons.BsHandThumbsUpFill className="w-4 h-4 mr-1.5" />
                      ) : (
                        <Icons.BsHandThumbsUp className="w-4 h-4 mr-1.5" />
                      )}
                      <span className="likes-number-amount">
                        {comment.likes}
                      </span>
                    </button>
                    <button
                      className="comment-action-button"
                      onClick={() => onDislike(comment.id)}
                    >
                      {comment.disliked ? (
                        <Icons.BsHandThumbsDownFill className="w-4 h-4 mr-1.5" />
                      ) : (
                        <Icons.BsHandThumbsDown className="w-4 h-4 mr-1.5" />
                      )}
                      <span className="likes-number-amount">
                        {comment.dislikes}
                      </span>
                    </button>
                    <button
                      className="comment-reply-button"
                      onClick={() => onReply(comment.id)}
                    >
                      <Icons.GoReply className="w-4 h-4 mr-1.5" />
                      <span className="text-sm font-medium">Reply</span>
                    </button>
                    <div
                      className={`relative ${
                        activeCommentOptions === comment.id ? "expanded" : ""
                      }`}
                    >
                      <button
                        className="comment-options-button"
                        onClick={() => toggleCommentOptions(comment.id)}
                        aria-expanded={activeCommentOptions === comment.id}
                        aria-controls={`comment-options-dropdown-${comment.id}`}
                      >
                        <Icons.HiOutlineDotsHorizontal className="w-4 h-4" />
                      </button>
                      {activeCommentOptions === comment.id && (
                        <div
                          id={`comment-options-dropdown-${comment.id}`}
                          className={`comment-options-dropdown ${
                            activeCommentOptions === comment.id
                              ? "expanded"
                              : ""
                          }`}
                        >
                          <button
                            className="comment-edit-button"
                            onClick={() =>
                              isEditing
                                ? handleSaveEdit(comment.id)
                                : handleEditClick(comment.id, comment.content)
                            }
                          >
                            {isEditing ? (
                              <BsFillSendCheckFill />
                            ) : (
                              <Icons.HiOutlinePencil />
                            )}
                          </button>
                          <button
                            className="comment-delete-button"
                            onClick={() =>
                              isEditing
                                ? handleCancel()
                                : handleDeleteClick(comment.id)
                            }
                          >
                            {isEditing ? (
                              <ImCancelCircle />
                            ) : (
                              <Icons.HiOutlineTrash />
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {comment.replies?.map((reply) => {
              const uniqueId = `${comment.id}-${reply.id}`;
              const isReplyExpanded = expandedReplies[uniqueId];
              const replyText = isReplyExpanded
                ? reply.content
                : truncateText(reply.content, 150);

              return (
                <div key={reply.id} className="reply-item">
                  <div className="comment-header">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <div className="comment-avatar-container">
                          <img
                            src={reply.avatar}
                            alt={reply.author}
                            className="comment-avatar"
                          />
                          <h3 className="comment-author">
                            {reply.author}
                            {reply.edited && (
                              <span className="edited-label"> (edited)</span>
                            )}
                          </h3>
                        </div>
                        <span className="comment-timestamp">
                          {formatTimestamp(reply.timestamp)}
                        </span>
                      </div>
                      {editingCommentId === reply.id ? (
                        <textarea
                          ref={textareaRef}
                          className="edit-comment-textarea"
                          value={editedComment}
                          onChange={(e) => setEditedComment(e.target.value)}
                        />
                      ) : (
                        <p
                          ref={(el) => (replyRefs.current[uniqueId] = el)}
                          className={`reply-text ${
                            isReplyExpanded ? "expanded" : ""
                          }`}
                        >
                          {replyText}
                        </p>
                      )}

                      <div className="comment-actions">
                        {reply.content.length > 150 && (
                          <button
                            className="show-more-button"
                            onClick={() =>
                              toggleExpandReply(reply.id, comment.id)
                            }
                          >
                            {isReplyExpanded ? "Show Less" : "Show More"}
                          </button>
                        )}
                        <button
                          className="comment-action-button"
                          onClick={() => onLike(comment.id, true, reply.id)}
                        >
                          {reply.liked ? (
                            <Icons.BsHandThumbsUpFill />
                          ) : (
                            <Icons.BsHandThumbsUp />
                          )}
                          <span className="likes-number-amount">
                            {reply.likes}
                          </span>
                        </button>
                        <button
                          className="comment-action-button"
                          onClick={() => onDislike(comment.id, true, reply.id)}
                        >
                          {reply.disliked ? (
                            <Icons.BsHandThumbsDownFill />
                          ) : (
                            <Icons.BsHandThumbsDown />
                          )}
                          <span className="likes-number-amount">
                            {reply.dislikes}
                          </span>
                        </button>
                        <button
                          className="comment-reply-button"
                          onClick={() => onReply(comment.id)}
                        >
                          <Icons.GoReply />
                          <span className="text-sm font-medium">Reply</span>
                        </button>
                        <div
                          className={`relative ${
                            activeReplyOptions === uniqueId ? "expanded" : ""
                          }`}
                        >
                          <button
                            className="comment-options-button"
                            onClick={() =>
                              toggleReplyOptions(reply.id, comment.id)
                            }
                            aria-expanded={activeReplyOptions === uniqueId}
                            aria-controls={`reply-options-dropdown-${uniqueId}`}
                          >
                            <Icons.HiOutlineDotsHorizontal className="w-4 h-4" />
                          </button>
                          {activeReplyOptions === uniqueId && (
                            <div
                              id={`reply-options-dropdown-${uniqueId}`}
                              className={`comment-options-dropdown ${
                                activeReplyOptions === uniqueId
                                  ? "expanded"
                                  : ""
                              }`}
                            >
                              <button
                                className="comment-edit-button"
                                onClick={() =>
                                  isEditing
                                    ? handleSaveEdit(reply.id, true, comment.id)
                                    : handleEditClick(reply.id, reply.content)
                                }
                              >
                                {isEditing ? (
                                  <BsFillSendCheckFill />
                                ) : (
                                  <Icons.HiOutlinePencil />
                                )}
                              </button>
                              <button
                                className="comment-delete-button"
                                onClick={() =>
                                  isEditing
                                    ? handleCancel()
                                    : handleDeleteClick(
                                        reply.id,
                                        true,
                                        comment.id
                                      )
                                }
                              >
                                {isEditing ? (
                                  <ImCancelCircle />
                                ) : (
                                  <Icons.HiOutlineTrash />
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
