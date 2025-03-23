import React from "react";
import Masonry from "react-masonry-css";
import { Icons } from "../../../assets/icons/icons";
import EmptyState from "../../../components/EmptyState/EmptyState";
import QuestionViewer from "../QuestionViewer";

const PrivateNotesDashboard = ({
  isDetailVisible,
  setPracticeDashboard,
  setPrivateNoteDasboard,
  searchTerm,
  setSearchTerm,
  filteredNotes,
  getQuestionById,
  handleCardClick,
  activeQuestion,
  activeNote,
  handleCloseDetails,
  isClosing,
  userNotesBank,
  userPrivateCollectionsBank,
  questionComments,
  setQuestionComments,
}) => {
  return (
    <div className="private-notes-dashboard-container">
      <div
        className={`quiz-settings-topbar ${isDetailVisible ? "inactive" : ""}`}
      >
        <Icons.HiMiniArrowLongLeft
          className="back-to-quiz-dashboard-button circlehover"
          onClick={() => {
            setPracticeDashboard(true);
            setPrivateNoteDasboard(false);
          }}
        />
      </div>
      <div className={`pnd-sc ${isDetailVisible ? "inactive" : ""}`}>
        <div className="private-notes-search-container">
          <h2>Private Notes</h2>
          <p>Search your notes by keywords, ID, or topic.</p>
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="note-card-holder">
          {filteredNotes.length === 0 ? (
            <EmptyState type="emptyNote" />
          ) : (
            <Masonry
              breakpointCols={3}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {filteredNotes.map(([id, note]) => {
                const question = getQuestionById(id);
                if (!question) return null;
                const truncatedNote =
                  note.length > 150 ? `${note.slice(0, 150)}...` : note;
                return (
                  <div
                    key={id}
                    className="private-note-card"
                    onClick={() => handleCardClick(id)}
                  >
                    <h2>{question.subtopic}</h2>
                    <h3>{truncatedNote}</h3>
                    <div className="question-details">
                      <p>{question.id}</p>
                    </div>
                  </div>
                );
              })}
            </Masonry>
          )}
        </div>
      </div>
      {isDetailVisible && activeQuestion && activeNote && (
        <div className="quiz-settings-topbar-private-note">
          <Icons.HiMiniArrowLongLeft
            className="back-to-quiz-dashboard-button circlehover"
            onClick={() => handleCloseDetails()}
          />
        </div>
      )}
      {isDetailVisible && activeQuestion && activeNote && (
        <div
          className={`detail-overlay ${isClosing ? "slide-out" : "slide-in"}`}
        >
          <QuestionViewer
            question={activeQuestion}
            userNotesBank={userNotesBank}
            userPrivateCollectionsBank={userPrivateCollectionsBank}
            questionComments={questionComments}
            setQuestionComments={setQuestionComments}
          />
        </div>
      )}
    </div>
  );
};

export default PrivateNotesDashboard;
