import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import CommentSection from "../CommentSection/CommentSection";
import { Icons } from "../../../assets/icons/icons";

dayjs.extend(relativeTime);

const PublicCommentsDashboard = ({
  usersCommentsBank,
  setPracticeDashboard,
  setPublicCommentDashboard,
}) => {
  const [showAll, setShowAll] = useState(true);
  const [visibleComments, setVisibleComments] = useState(10);
  const [isCommentSectionOpen, setCommentSectionOpen] = useState(false);
  const [selectedQuestionWithComments, setSelectedQuestionWithComments] =
    useState(null);
  const [questionComments, setQuestionComments] = useState(usersCommentsBank);

  const allComments = Object.keys(usersCommentsBank)
    .flatMap((questionId) => {
      return usersCommentsBank[questionId].flatMap((comment) => {
        const commentWithQuestion = { ...comment, questionId, type: "comment" };
        const repliesWithQuestion = comment.replies.map((reply) => ({
          ...reply,
          questionId,
          type: "reply",
          parentCommentId: comment.id,
        }));
        return [commentWithQuestion, ...repliesWithQuestion];
      });
    })
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  const myComments = allComments.filter((item) => item.author === "Péter");

  const displayedComments = showAll
    ? allComments.slice(0, visibleComments)
    : myComments.slice(0, visibleComments);

  const handleShowMore = () => {
    setVisibleComments((prev) => prev + 10);
  };

  const handleLike = (commentId, isReply = false, replyId = null) => {
    const questionId = selectedQuestionWithComments?.id;
    if (!questionId) return;

    const updatedComments = { ...usersCommentsBank };
    const comments = updatedComments[questionId] || [];

    const updateLikes = (comment) => ({
      ...comment,
      likes: comment.likes + (comment.liked ? -1 : 1),
      dislikes: comment.disliked ? comment.dislikes - 1 : comment.dislikes,
      liked: !comment.liked,
      disliked: false,
    });

    updatedComments[questionId] = comments.map((c) =>
      isReply && c.id === commentId
        ? {
            ...c,
            replies: c.replies.map((r) =>
              r.id === replyId ? updateLikes(r) : r
            ),
          }
        : c.id === commentId
        ? updateLikes(c)
        : c
    );

    setQuestionComments({ ...updatedComments });
  };

  const handleDislike = (commentId, isReply = false, replyId = null) => {
    const questionId = selectedQuestionWithComments?.id;
    if (!questionId) return;

    const updatedComments = { ...usersCommentsBank };
    const comments = updatedComments[questionId] || [];

    const updateDislikes = (comment) => ({
      ...comment,
      dislikes: comment.dislikes + (comment.disliked ? -1 : 1),
      likes: comment.liked ? comment.likes - 1 : comment.likes,
      disliked: !comment.disliked,
      liked: false,
    });

    updatedComments[questionId] = comments.map((c) =>
      isReply && c.id === commentId
        ? {
            ...c,
            replies: c.replies.map((r) =>
              r.id === replyId ? updateDislikes(r) : r
            ),
          }
        : c.id === commentId
        ? updateDislikes(c)
        : c
    );

    setQuestionComments({ ...updatedComments });
  };

  const deleteComment = (
    commentId,
    isReply = false,
    parentCommentId = null
  ) => {
    const questionId = selectedQuestionWithComments?.id;
    if (!questionId) return;

    if (isReply) {
      usersCommentsBank[questionId] = usersCommentsBank[questionId].map((c) =>
        c.id === parentCommentId
          ? { ...c, replies: c.replies.filter((r) => r.id !== commentId) }
          : c
      );
    } else {
      usersCommentsBank[questionId] = usersCommentsBank[questionId].filter(
        (c) => c.id !== commentId
      );
    }

    setQuestionComments({ ...usersCommentsBank });
  };

  return (
    <div className="public-comments-dashboard-container">
      <div className="quiz-settings-topbar">
        <Icons.HiMiniArrowLongLeft
          className="back-to-quiz-dashboard-button circlehover"
          onClick={() => {
            setPracticeDashboard(true);
            setPublicCommentDashboard(false);
          }}
        />
      </div>
      <div className="comment-dashboard-container">
        <div className="container-left">
          <div className="filter-buttons">
            <button onClick={() => setShowAll(true)}>Összes</button>
            <button onClick={() => setShowAll(false)}>Saját</button>
          </div>
          {displayedComments.map((item) => (
            <div
              key={item.id}
              className="comment-question-card"
              onClick={() => {
                setCommentSectionOpen(true);
                setSelectedQuestionWithComments({
                  id: item.questionId,
                });
              }}
            >
              <div className="comment-item-card">
                <div className="comment-item-card-header">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="comment-avatar"
                  />
                  <div className="comment-content">
                    <h3>{item.author}: </h3>
                    <p>{item.content}</p>
                  </div>
                </div>
                <p className="comment-timestamp">
                  {dayjs(item.timestamp).fromNow()}
                </p>
              </div>
            </div>
          ))}
          {(showAll ? allComments.length : myComments.length) >
            visibleComments && (
            <button onClick={handleShowMore} className="show-more-button">
              Show more
            </button>
          )}
        </div>
        <div className="container-right">
          {isCommentSectionOpen && selectedQuestionWithComments && (
            <CommentSection
              isOpen={isCommentSectionOpen}
              onClose={() => setCommentSectionOpen(false)}
              questionId={selectedQuestionWithComments.id}
              questionComments={questionComments}
              setQuestionComments={setQuestionComments}
              onLike={handleLike}
              onDislike={handleDislike}
              onDelete={deleteComment}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicCommentsDashboard;
