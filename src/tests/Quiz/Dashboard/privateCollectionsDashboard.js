import React, { useState } from "react";
import { Icons } from "../../../assets/icons/icons";
import QuestionViewer from "../QuestionViewer";
import EmptyState from "../../../components/EmptyState/EmptyState";
import "./privateCollectionDashboard.css";

const PrivateCollectionsDashboard = ({
  setPracticeDashboard,
  setPrivateCollectionDashboard,
  isDetailVisible,
  userPrivateCollectionsBank,
  setActiveCollection,
  activeCollection,
  getQuestionsByCollection,
  handleCardClick,
  activeQuestion,
  handleCloseDetails,
  isClosing,
  userNotesBank,
  questionComments,
  setQuestionComments,
}) => {
  const [isCollectionCardsVisible, setCollectionCardsVisible] = useState(false);
  const [isPrivateCollections, setPrivateCollections] = useState(true);

  return (
    <div className="private-collections-dashboard-container">
      <div className="quiz-settings-topbar">
        <Icons.HiMiniArrowLongLeft
          className="back-to-quiz-dashboard-button circlehover"
          onClick={() => {
            setPracticeDashboard(true);
            setPrivateCollectionDashboard(false);
            setCollectionCardsVisible(false);
          }}
        />
      </div>
      <div
        className={`pnd-sc-collection ${
          isCollectionCardsVisible ? "active" : ""
        } ${!isPrivateCollections ? "collection-inactive" : ""}`}
      >
        <div className="private-collections-list-container">
          <h2>Private Collections</h2>
          {userPrivateCollectionsBank.length === 0 ? (
            <EmptyState type="emptyCollections" />
          ) : (
            userPrivateCollectionsBank.map((collection, index) => (
              <div
                key={index}
                className="collection-item"
                onClick={() => {
                  setActiveCollection(collection);
                  setCollectionCardsVisible(true);
                }}
              >
                <div className="collection-itemleft-block">
                  <Icons.GoBookmarkFill
                    size={22}
                    style={{ color: collection.color }}
                  />
                  <p className="collection-item-name">{collection.name}</p>
                  <p className="item-counter">({collection.items.length})</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="collection-card-holder">
          {activeCollection ? (
            getQuestionsByCollection(activeCollection).length === 0 ? (
              <EmptyState type="emptyQuestions" />
            ) : (
              getQuestionsByCollection(activeCollection).map((question) => (
                <div
                  key={question.id}
                  className="private-collection-card"
                  onClick={() => {
                    handleCardClick(question.id);
                    setPrivateCollections(false);
                  }}
                >
                  <h2>{question.question}</h2>
                  <div className="private-card-details">
                    <p>{question.id}</p>
                    <p>{question.subtopic}</p>
                  </div>
                </div>
              ))
            )
          ) : null}
        </div>
      </div>
      {isDetailVisible && activeQuestion && (
        <div className="quiz-settings-topbar-private-collection">
          <Icons.HiMiniArrowLongLeft
            className="back-to-quiz-dashboard-button circlehover"
            onClick={() => {
              handleCloseDetails();
              setPrivateCollections(true);
            }}
          />
        </div>
      )}
      {isDetailVisible && activeQuestion && (
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

export default PrivateCollectionsDashboard;
