import React, { useState } from "react";
import { CommentList } from "./CommentList";
import { Icons } from "../../../assets/icons/icons";
import { v4 as uuidv4 } from "uuid";
import { usersCommentsBank } from "../../../data/userLocalDatabase";
import "./CommentSection.css";

export const CommentSection = ({
  isOpen,
  onClose,
  questionId,
  questionComments,
  setQuestionComments,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedComment, setEditedComment] = useState("");

  const toggleCommentSection = () => {
    setIsExpanded((prev) => !prev);
    setReplyingTo(null);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const saveComment = () => {
    if (newComment.trim() === "") {
      alert("A komment mező nem lehet üres!");
      return;
    }

    const comment = {
      id: uuidv4(),
      author: "Péter",
      avatar: "https://i.pravatar.cc/150?img=3",
      content: newComment,
      timestamp: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
      liked: false,
      disliked: false,
      replies: [],
      edited: false,
    };

    if (replyingTo) {
      usersCommentsBank[questionId] = usersCommentsBank[questionId].map((c) => {
        if (c.id === replyingTo) {
          return {
            ...c,
            replies: [
              ...c.replies,
              {
                ...comment,
                id: uuidv4(),
              },
            ],
          };
        }
        return c;
      });
    } else {
      usersCommentsBank[questionId] = [
        ...(usersCommentsBank[questionId] || []),
        comment,
      ];
    }

    setNewComment("");
    setIsExpanded(false);
    setReplyingTo(null);
  };

  const deleteComment = (
    commentId,
    isReply = false,
    parentCommentId = null
  ) => {
    if (isReply) {
      usersCommentsBank[questionId] = usersCommentsBank[questionId].map((c) => {
        if (c.id === parentCommentId) {
          return {
            ...c,
            replies: c.replies.filter((r) => r.id !== commentId),
          };
        }
        return c;
      });
    } else {
      usersCommentsBank[questionId] = usersCommentsBank[questionId].filter(
        (c) => c.id !== commentId
      );
    }

    setQuestionComments({ ...usersCommentsBank });
  };

  const handleReply = (commentId) => {
    setReplyingTo(commentId);
    setIsExpanded(true);
  };

  const handleEdit = (commentId, content) => {
    setEditingCommentId(commentId);
    setEditedComment(content);
  };

  const saveEdit = (commentId, isReply = false, parentCommentId = null) => {
    const updateComment = (comment) => ({
      ...comment,
      content: editedComment,
      edited: true,
    });

    if (isReply) {
      usersCommentsBank[questionId] = usersCommentsBank[questionId].map((c) => {
        if (c.id === parentCommentId) {
          return {
            ...c,
            replies: c.replies.map((r) =>
              r.id === commentId ? updateComment(r) : r
            ),
          };
        }
        return c;
      });
    } else {
      usersCommentsBank[questionId] = usersCommentsBank[questionId].map((c) =>
        c.id === commentId ? updateComment(c) : c
      );
    }

    setQuestionComments({ ...usersCommentsBank });
    setEditingCommentId(null);
    setEditedComment("");
  };

  const handleLike = (commentId, isReply = false, replyId = null) => {
    const updatedComments = { ...usersCommentsBank }; // Másold át a usersCommentsBank-ot
    if (!updatedComments[questionId]) {
      updatedComments[questionId] = []; // Ha nem létezik, inicializáld üres tömbbel
    }
    const comments = updatedComments[questionId];

    const updateLikes = (comment) => {
      const updatedLikes = comment.likes + (comment.liked ? -1 : 1);
      const updatedDislikes = comment.disliked
        ? comment.dislikes - 1
        : comment.dislikes;
      return {
        ...comment,
        likes: updatedLikes,
        dislikes: updatedDislikes,
        liked: !comment.liked,
        disliked: false,
      };
    };

    if (isReply) {
      updatedComments[questionId] = comments.map((c) => {
        if (c.id === commentId) {
          return {
            ...c,
            replies: c.replies.map((r) =>
              r.id === replyId ? updateLikes(r) : r
            ),
          };
        }
        return c;
      });
    } else {
      updatedComments[questionId] = comments.map((c) =>
        c.id === commentId ? updateLikes(c) : c
      );
    }

    // Frissítsd a usersCommentsBank-ot
    usersCommentsBank[questionId] = updatedComments[questionId];
    setQuestionComments({ ...updatedComments }); // Frissítsd a state-et
  };

  const handleDislike = (commentId, isReply = false, replyId = null) => {
    const updatedComments = { ...usersCommentsBank };
    if (!updatedComments[questionId]) {
      updatedComments[questionId] = [];
    }
    const comments = updatedComments[questionId];

    const updateDislikes = (comment) => {
      const updatedDislikes = comment.dislikes + (comment.disliked ? -1 : 1);
      const updatedLikes = comment.liked ? comment.likes - 1 : comment.likes;
      return {
        ...comment,
        dislikes: updatedDislikes,
        likes: updatedLikes,
        disliked: !comment.disliked,
        liked: false,
      };
    };

    if (isReply) {
      updatedComments[questionId] = comments.map((c) => {
        if (c.id === commentId) {
          return {
            ...c,
            replies: c.replies.map((r) =>
              r.id === replyId ? updateDislikes(r) : r
            ),
          };
        }
        return c;
      });
    } else {
      updatedComments[questionId] = comments.map((c) =>
        c.id === commentId ? updateDislikes(c) : c
      );
    }

    usersCommentsBank[questionId] = updatedComments[questionId];
    setQuestionComments({ ...updatedComments });
  };

  const comments = usersCommentsBank[questionId] || [];

  return (
    <>
      <div
        className={`modal-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`comment-section-container ${isOpen ? "open" : ""}`}>
        <div className="comment-section-header">
          <h3 className="comment-section-title">
            Comments (
            {comments.reduce(
              (total, comment) => total + comment.replies.length,
              0
            ) + comments.length}
            )
          </h3>
          <div className="comment-section-avatars">
            {comments.map((commenter, index) => (
              <img
                key={commenter.id}
                src={commenter.avatar}
                alt={commenter.author}
                className="comment-section-avatar"
                style={{ zIndex: comments.length - index }}
                title={commenter.author}
              />
            ))}
          </div>
        </div>
        <div
          className={`comment-section-inner ${
            isExpanded ? "expanded" : "collapsed"
          }`}
        >
          <CommentList
            comments={comments}
            onReply={handleReply}
            onLike={handleLike}
            onDislike={handleDislike}
            onDelete={deleteComment}
            onEdit={handleEdit}
            editingCommentId={editingCommentId}
            editedComment={editedComment}
            setEditedComment={setEditedComment}
            saveEdit={saveEdit}
          />
        </div>
        <div
          className={`comment-section-footer ${
            isExpanded ? "expanded" : "collapsed"
          }`}
        >
          <>
            <textarea
              className="comment-form-textarea"
              placeholder={
                replyingTo ? "Write a Reply..." : "Write a Comment..."
              }
              rows={2}
              value={newComment}
              onChange={handleCommentChange}
            />
            {isExpanded && (
              <button className="write-comment-button" onClick={saveComment}>
                {replyingTo ? "Post Reply" : "Post Comment"}
              </button>
            )}
            {isExpanded && (
              <button
                className="write-comment-close-button"
                onClick={toggleCommentSection}
              >
                <Icons.HiOutlineXMark />
              </button>
            )}
          </>

          {!isExpanded && (
            <button
              className="write-comment-button"
              onClick={toggleCommentSection}
            >
              Write a comment
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CommentSection;
