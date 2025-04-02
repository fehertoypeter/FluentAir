import React from "react";
import { Icons } from "../../assets/icons/icons";
import "./customExamCard.css";

const CustomExamCard = ({ exam, startTestWithQuestions }) => {
  return (
    <div className="custom-exam-card">
      <div className="exam-header">
        <h3>{exam.title}</h3>
      </div>

      <div className="exam-details">
        <p>{exam.description}</p>
        {exam.config.timeLimit && (
          <div className="exam-timer">
            <Icons.CiTimer size={18} />
            <p>
              <span>{exam.config.timeLimit} minutes</span>
            </p>
          </div>
        )}
        <div className="exam-stats">
          <Icons.CiCircleQuestion size={18} />
          <p>
            <span>{exam.questionIds.length} questions</span>
          </p>
        </div>
      </div>

      <button
        className="start-exam-button"
        onClick={() => startTestWithQuestions(exam.questionIds, exam.config)}
      >
        <Icons.CiPlay1 size={18} />
        Start Exam
      </button>
    </div>
  );
};

export default CustomExamCard;
