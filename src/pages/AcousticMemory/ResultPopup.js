// ResultPopup.js
import React from "react";
import { LuBadgePercent } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { FaHourglass } from "react-icons/fa6";

import "./ResultPopup.css";

function ResultPopup({ examResults, examHistory, totalTimeSpent, onClose }) {
  // Calculate the current exam score
  const correctAnswers = examResults.filter(
    (result) => result.isCorrect
  ).length;
  const totalAnswers = examResults.length;
  const currentExamScore = (correctAnswers / totalAnswers) * 100;

  // Calculate the average score from all exams
  const totalScore = examHistory.reduce((acc, exam) => {
    const score = (exam.correct / exam.total) * 100;
    return acc + score;
  }, 0);
  const averageScore = Math.round(totalScore / examHistory.length);

  // Determine if the current score is better or worse than the average
  const comparison = currentExamScore > averageScore ? "better" : "worse";
  const comparisonIcon =
    currentExamScore > averageScore ? <FaRegThumbsUp /> : <FaRegThumbsDown />;
  // Calculate the number of successful and unsuccessful exams
  const successfulExams = examHistory.filter(
    (exam) => (exam.correct / exam.total) * 100 >= 80
  ).length;
  const unsuccessfulExams = examHistory.length - successfulExams;

  // Format total time spent
  const totalTimeInMinutes = totalTimeSpent / 60;
  const hours = Math.floor(totalTimeInMinutes / 60);
  const minutes = Math.floor(totalTimeInMinutes % 60);

  return (
    <div className="result-popup">
      <div className="result-content">
        <div className="lastExamScore">
          <h3>{currentExamScore}%</h3>
          <p>Your score</p>
        </div>
        <div className="allExamsdata">
          <p>SUMMARY</p>
          <div className="ExamScoresContainer">
            <div className="summaryCard">
              <LuBadgePercent />
              <p>Average score {averageScore} %</p>
            </div>
            <div className="summaryCard">
              <IoMdCheckmarkCircleOutline />
              <p>{successfulExams} tests passed </p>
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
                <FaHourglass />
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
