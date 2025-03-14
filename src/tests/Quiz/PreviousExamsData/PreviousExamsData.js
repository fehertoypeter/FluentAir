import React from "react";
import { Icons } from "../../../assets/images/icons/icons";
import { formatTimestamp } from "../../../utils/formatTimeStamp";
import { userPreviousTests } from "../QuizApp";

<div className="previous-exams-content">
  {userPreviousTests
    .sort((a, b) => new Date(b.quizTimestamp) - new Date(a.quizTimestamp))
    .map((test, index) => (
      <div className="previous-exam-card" key={index}>
        <div className="exam-data-container">
          <div className="exam-percentage-score">
            <p>{test.scorePercentage}%</p>
          </div>
          <div className="exam-card-data">
            <h2>{test.topic}</h2>
            <div className="exam-infos">
              <p>{formatTimestamp(test.quizTimestamp)}</p>
            </div>
          </div>
        </div>
        <div className="settings-container">
          <Icons.RxDotsVertical size={20} />
        </div>
      </div>
    ))}
</div>;
