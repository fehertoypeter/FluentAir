import React, { useState } from "react";
import { MathComponent } from "mathjax-react";
import ExplanationModal from "./ExplanationModal";
import PrivateNote from "./privateNote";
import PrivateCollection from "./privateCollections";
import CommentSection from "./CommentSection/CommentSection";
import { Icons } from "../../assets/icons/icons";
import ImageModal from "./ImageModal/ImageModal";
import { usersCommentsBank } from "../../data/userLocalDatabase";
import "./QuizApp.css";
import "./QuestionViewer.css";

const QuestionViewer = ({
  question,
  userNotesBank,
  userPrivateCollectionsBank,
  questionComments,
  setQuestionComments,
}) => {
  const [isPrivateNoteOpen, setPrivateNoteOpen] = useState(false);
  const [isCommentSectionOpen, setCommentSectionOpen] = useState(false);
  const [isPrivateCollectionOpen, setPrivateCollectionOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const hasNoteForCurrentQuestion = userNotesBank[question.id];
  const NoteIcon = hasNoteForCurrentQuestion
    ? Icons.FaNoteSticky
    : Icons.CiStickyNote;

  const hasPrivateCollectionForCurrentQuestion =
    userPrivateCollectionsBank.some((collection) =>
      collection.items.includes(question.id)
    );
  const CollectionIcon = hasPrivateCollectionForCurrentQuestion
    ? Icons.GoBookmarkFill
    : Icons.GoBookmark;

  const hasCommentsForCurrentQuestion =
    usersCommentsBank[question.id]?.length > 0;
  const CommentIcon = hasCommentsForCurrentQuestion
    ? Icons.ImBubble
    : Icons.SlBubble;

  return (
    <div className="quiz-app-container">
      <div className="viewer-question-infos">
        <p>{question.id}</p>
        <p>{question.subtopic}</p>
      </div>
      <h2>{question.question}</h2>
      {question.equation && (
        <div className="math-equation">
          <MathComponent tex={question.equation} />
        </div>
      )}
      {question.image && <ImageModal imageUrl={question.image} />}
      <div className="answers-container">
        {question.options.map((option, index) => (
          <div
            className="answer-options"
            key={index}
            style={{
              backgroundColor:
                option === question.answer
                  ? "var(--answer-correct)"
                  : "var(--answer-button-bg)",
              borderRadius: "5px",
              transition: "background-color 0.3s, border-color 0.3s",
            }}
          >
            {question.equation ? <MathComponent tex={option} /> : option}
          </div>
        ))}
      </div>

      <div className="floating-bar">
        <div className="left-icons">
          <CollectionIcon
            className="icon"
            size={18}
            style={{
              color: hasPrivateCollectionForCurrentQuestion
                ? "var(--button-checked-bg)"
                : "black",
              strokeWidth: 0.1,
              boxShadow: hasPrivateCollectionForCurrentQuestion
                ? "inset 2px 2px 8px rgba(0, 0, 0, 0.2)"
                : "none",
              transition:
                "color 0.4s ease, box-shadow 0.7s ease, background-color 0.3s ease",
            }}
            onClick={() => setPrivateCollectionOpen(true)}
          />
          <PrivateCollection
            isOpen={isPrivateCollectionOpen}
            onClose={() => setPrivateCollectionOpen(false)}
            questionId={question.id}
          />

          <NoteIcon
            className="icon"
            size={20}
            style={{
              color: hasNoteForCurrentQuestion
                ? "var(--button-checked-bg)"
                : "black",
              strokeWidth: 0.3,
              boxShadow: hasNoteForCurrentQuestion
                ? "inset 2px 2px 8px rgba(0, 0, 0, 0.2)"
                : "none",
              transition:
                "color 0.4s ease, box-shadow 0.7s ease, background-color 0.3s ease",
            }}
            onClick={() => setPrivateNoteOpen(true)}
          />
          <PrivateNote
            isOpen={isPrivateNoteOpen}
            onClose={() => setPrivateNoteOpen(false)}
            questionId={question.id}
            foundIds={Object.keys(userNotesBank)}
          />

          <CommentIcon
            className="icon"
            size={18}
            style={{
              strokeWidth: 0.5,
              color: hasCommentsForCurrentQuestion
                ? "var(--button-checked-bg)"
                : "black",
              boxShadow: hasCommentsForCurrentQuestion
                ? "inset 2px 2px 8px rgba(0, 0, 0, 0.2)"
                : "none",
              transition:
                "color 0.4s ease, box-shadow 0.7s ease, background-color 0.3s ease",
            }}
            onClick={() => setCommentSectionOpen(true)}
          />
          <CommentSection
            isOpen={isCommentSectionOpen}
            onClose={() => setCommentSectionOpen(false)}
            questionId={question.id}
            questionComments={questionComments}
            setQuestionComments={setQuestionComments}
          />
        </div>

        <div className="right-section">
          <button
            className="explanation-button"
            onClick={() => setModalOpen(true)}
          >
            <Icons.BsPatchQuestion size={20} />
            Explanation
          </button>
          <ExplanationModal
            isOpen={isModalOpen}
            content={question.explanation}
            onClose={() => setModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionViewer;
