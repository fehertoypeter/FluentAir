import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import "./QuestionList.css"; // Ne felejtsd el importálni a CSS-t

const QuestionList = ({
  isVisible,
  toggleSidebar,
  currentQuestions,
  userAnswers,
  currentQuestionIndex,
  navigateToQuestion,
  quizConfig,
  reviewMode, // Új prop a reviewMode állapothoz
}) => {
  const [isCompactView, setIsCompactView] = useState(true);

  const toggleView = () => {
    setIsCompactView((prev) => !prev);
  };

  const getBackgroundColor = (index, isAnswered, isCorrect) => {
    // Ha reviewMode aktív, úgy viselkedjen, mint az "auto_submit" mód
    if (reviewMode || quizConfig.answerRevealMode === "auto_submit") {
      return index === currentQuestionIndex
        ? "var(--question-list-co-bg)"
        : isAnswered
        ? isCorrect
          ? "rgb(110 180 98 / 37%)"
          : "rgb(255 90 96 / 37%)"
        : "var(--question-list-btn-bg)";
    } else if (quizConfig.answerRevealMode === "after_test") {
      return index === currentQuestionIndex
        ? "var(--question-list-co-bg)"
        : isAnswered
        ? "rgb(181, 193, 202)"
        : "var(--question-list-btn-bg)";
    } else {
      return index === currentQuestionIndex
        ? "var(--question-list-co-bg)"
        : "var(--question-list-btn-bg)";
    }
  };

  const getTextColor = (index, isAnswered, isCorrect) => {
    if (reviewMode || quizConfig.answerRevealMode === "auto_submit") {
      return index === currentQuestionIndex
        ? "var(--question-list-co-text)"
        : isAnswered
        ? isCorrect
          ? "rgb(110 180 98)"
          : "rgb(255 90 96)"
        : "var(--question-list-btn-text)";
    } else if (quizConfig.answerRevealMode === "after_test") {
      return index === currentQuestionIndex
        ? "var(--question-list-co-text)"
        : "var(--question-list-btn-text)";
    } else {
      return index === currentQuestionIndex
        ? "var(--question-list-co-text)"
        : "var(--question-list-btn-text)";
    }
  };

  return (
    <>
      <div
        className={`modal-overlay ${isVisible ? "open" : ""}`}
        onClick={toggleSidebar}
      ></div>
      <div className="question-list-container">
        <div className={`question-list ${isVisible ? "open" : ""}`}>
          <div className="header">
            <button className="close-button" onClick={toggleSidebar}>
              <IoCloseOutline />
            </button>
            <h3>Question List</h3>
            <button onClick={toggleView} className="list-toggle-button">
              {isCompactView ? <CiViewList /> : <HiOutlineSquares2X2 />}
            </button>
          </div>
          <div className="question-list-content-container">
            {isCompactView ? (
              <div className="question-list-content">
                {currentQuestions.map((question, index) => {
                  const userAnswer = userAnswers.find(
                    (a) => a.questionId === question.id
                  );
                  const isAnswered = userAnswer !== undefined;
                  const isCorrect =
                    isAnswered && userAnswer.answer === question.answer;

                  return (
                    <div
                      key={index}
                      onClick={() => navigateToQuestion(index)}
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: getBackgroundColor(
                          index,
                          isAnswered,
                          isCorrect
                        ),
                        color: getTextColor(index, isAnswered, isCorrect),
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                    >
                      {index + 1}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {currentQuestions.map((question, index) => {
                  const questionText =
                    question.question || "No question text available";
                  const userAnswer = userAnswers.find(
                    (a) => a.questionId === question.id
                  );
                  const isAnswered = userAnswer !== undefined;
                  const isCorrect =
                    isAnswered && userAnswer.answer === question.answer;

                  return (
                    <div
                      className="question-text"
                      key={index}
                      onClick={() => navigateToQuestion(index)}
                      style={{
                        padding: "10px",
                        backgroundColor: getBackgroundColor(
                          index,
                          isAnswered,
                          isCorrect
                        ),
                        color: getTextColor(index, isAnswered, isCorrect),
                        cursor: "pointer",
                        borderRadius: "4px",
                        textAlign: "left",
                        borderBottom: "2px solid #00000014",
                      }}
                    >
                      {questionText.length > 150
                        ? questionText.substring(0, 150) + "..."
                        : questionText}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionList;
