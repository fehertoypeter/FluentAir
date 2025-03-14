import React from "react";
import { LuBadgePercent } from "react-icons/lu";
import {
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from "react-icons/io";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { IoHourglassOutline } from "react-icons/io5";
import "./NumberPairConcentrationResultPopup.css";

function ResultPopup({
  examResults,
  examHistory,
  totalTimeSpent,
  onClose,
  scorePercentage,
  correctAnswers,
  totalTasks,
  incorrectAnswers,
  unansweredQuestions,
}) {
  const totalScore = examHistory.reduce((acc, exam) => {
    const score = (exam.correctAnswers / exam.totalTasks) * 100;
    return acc + score;
  }, 0);
  const averageScore = Math.round(totalScore / examHistory.length);
  const comparison = scorePercentage > averageScore ? "better" : "worse";
  const comparisonIcon =
    scorePercentage > averageScore ? <FaRegThumbsUp /> : <FaRegThumbsDown />;
  const successfulExams = examHistory.filter(
    (exam) => (exam.correctAnswers / exam.totalTasks) * 100 >= 80
  ).length;
  const unsuccessfulExams = examHistory.length - successfulExams;
  const totalElapsedTime = examHistory.reduce(
    (total, exam) => total + exam.totalTimeSpent,
    0
  );
  const totalTimeInMinutes = totalElapsedTime / 60;
  const hours = Math.floor(totalTimeInMinutes / 60);
  const minutes = Math.floor(totalTimeInMinutes % 60);

  return (
    <div className="exam-results-popup">
      <div className="exam-result-popup-content">
        <div className="latest-exam-result">
          <div className="scoreTextWrapper">
            <div className="scoreText">
              {correctAnswers}/{totalTasks}
            </div>
          </div>
          <div className="custom-container">
            <div className="custom-side-bar"></div>
            <div className="custom-content">
              <span className="custom-date">2025-01-03</span>
              <h2 className="custom-title">Number concentration</h2>
              <span className="custom-description">Ez egy teszt volt</span>
            </div>
          </div>
          <div className="squre-container">
            <div className="result-square">
              <h3>{scorePercentage}%</h3>
              <p>Exam Percentage</p>
            </div>
            <div className="result-square">
              <h3>{incorrectAnswers}</h3>
              <p>Incorrect Answers</p>
            </div>
            <div className="result-square">
              <h3>{unansweredQuestions}</h3>
              <p>Unfinished tasks</p>
            </div>
            <div className="result-square">
              <h3>{totalTimeSpent}</h3>
              <p>Time</p>
            </div>
          </div>
        </div>
        <div className="allExamsdata">
          <div className="ExamScoresContainer">
            <div className="summaryCard">
              <LuBadgePercent />
              <p>Average score {averageScore} %</p>
            </div>
            <div className="summaryCard">
              <IoMdCheckmarkCircleOutline />
              <p>{successfulExams} tests passed</p>
            </div>
            <div className="summaryCard">
              <IoMdCloseCircleOutline />
              <p>{unsuccessfulExams} tests failed</p>
            </div>
          </div>
          <div className="timeContainer">
            <div className="comparisonContainer">
              <div className="iconWrapper">{comparisonIcon}</div>
              <div className="textWrapper">
                <p>Your result is: {comparison} than your average.</p>
              </div>
            </div>
            <div className="comparisonContainer">
              <div className="iconWrapper">
                <IoHourglassOutline />
              </div>
              <div className="textWrapper">
                <h3>
                  {hours} h {minutes} m
                </h3>
                <p>Total time spent on exams</p>
              </div>
            </div>
          </div>

          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default ResultPopup;
