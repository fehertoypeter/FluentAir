import React from "react";
import { Icons } from "../../../assets/icons/icons";
import CustomExamCard from "../CustomExamCards";
import "./practiceDashboard.css";

const PracticeDashboard = ({
  navigateTo, // Új prop a navigációhoz
  userNotesBank,
  userPrivateCollectionsBank,
  startTestWithQuestions,
}) => {
  const customExams = [
    {
      id: 1,
      title: "Repülési teljesítmény és tervezés",
      description: "",
      questionIds: ["question-masiktopic"],
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
      questionIds: ["question-alap", "question-masodik"],
      config: {
        answerRevealMode: "after_test",
        timeLimit: 30,
        timerMode: true,
      },
    },
    {
      id: 3, // Javítottam az id-t (2-ről 3-ra, mert egyedinek kell lennie)
      title: "Emberi teljesítőképesség",
      description: "",
      questionIds: ["question-alap", "question-masodik"],
      config: {
        answerRevealMode: "after_test",
        timeLimit: 30,
        timerMode: true,
      },
    },
  ];

  return (
    <div className="practice-dashboard-container">
      <div className="left">
        <div className="profile-container">
          <div className="welcome-message">
            Welcome to Practice, <span>Peter</span>
          </div>
          <div className="recomended-apps">
            <h2>Your apps</h2>
            <div className="your-apps-container">
              <div className="apps-grid">
                <div
                  className="app-icon-container"
                  onClick={() => navigateTo("exam-configuration")}
                >
                  <div className="app-icon">
                    <Icons.CiPlay1 />
                  </div>
                  <div className="app-name">Test Bank</div>
                </div>
                <div
                  className="app-icon-container"
                  onClick={() => navigateTo("notes")}
                >
                  <span className="circle-number-icon">
                    {Object.entries(userNotesBank).length}
                  </span>
                  <div className="app-icon">
                    <Icons.CiFileOn />
                  </div>
                  <div className="app-name">Private Notes</div>
                </div>
                <div
                  className="app-icon-container"
                  onClick={() => navigateTo("comments")}
                >
                  <div className="app-icon">
                    <Icons.CiChat1 />
                  </div>
                  <div className="app-name">Public Comments</div>
                </div>
                <div
                  className="app-icon-container"
                  onClick={() => navigateTo("collections")}
                >
                  <span className="circle-number-icon">
                    {userPrivateCollectionsBank.length}
                  </span>
                  <div className="app-icon">
                    <Icons.CiBookmarkCheck />
                  </div>
                  <div className="app-name">Question Collections</div>
                </div>
                <div className="app-icon-container">
                  <span className="coming-soon-icon"> Coming Soon...</span>
                  <div className="app-icon">
                    <Icons.CiTimer />
                  </div>
                  <div className="app-name">Test History</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="trial-card">
          <div className="trial-card-header">
            <h2>Explore Exams</h2>
            <p onClick={() => navigateTo("exams")}>View all</p>
          </div>
          <div className="exam-card-holder">
            {customExams.map((exam) => (
              <CustomExamCard
                key={exam.id}
                exam={exam}
                startTestWithQuestions={startTestWithQuestions}
              />
            ))}
          </div>
        </div>
        <div className="trial-card"></div>
      </div>
    </div>
  );
};

export default PracticeDashboard;
