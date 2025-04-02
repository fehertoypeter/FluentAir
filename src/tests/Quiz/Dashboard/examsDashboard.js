import React from "react";
import CustomExamCard from "../CustomExamCards";
import { Icons } from "../../../assets/icons/icons";
import "./examsDashboard.css";

const ExamsDashboard = ({ startTestWithQuestions, navigateTo }) => {
  const customExams = [
    {
      id: 1,
      title: "Repülési teljesítmény és tervezés",
      description: "",
      questionIds: ["question-24"],
      config: {
        answerRevealMode: "after_test",
        timeLimit: 38,
        timerMode: true,
      },
    },
    {
      id: 2,
      title: "Kommunikáció",
      description: "",
      questionIds: ["question-465", "question-555"],
      config: {
        answerRevealMode: "after_test",
        timeLimit: 30,
        timerMode: true,
      },
    },
    {
      id: 3,
      title: "Emberi teljesítőképesség",
      description: "",
      questionIds: ["question-756", "question-498"],
      config: {
        answerRevealMode: "after_test",
        timeLimit: 30,
        timerMode: true,
      },
    },
    // Add more exams as needed
  ];

  return (
    <div className="exams-dashboard-container">
      <div className="quiz-settings-topbar">
        <Icons.HiMiniArrowLongLeft
          className="back-to-quiz-dashboard-button circlehover"
          onClick={() => navigateTo("practice")}
        />
      </div>
      <div className="dashboard-exam-card-holder">
        {customExams.map((exam) => (
          <CustomExamCard
            key={exam.id}
            exam={exam}
            startTestWithQuestions={startTestWithQuestions}
          />
        ))}
      </div>
    </div>
  );
};

export default ExamsDashboard;
