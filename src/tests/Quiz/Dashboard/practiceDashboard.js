import React from "react";
import { Icons } from "../../../assets/icons/icons";
import "./practiceDashboard.css";

const PracticeDashboard = ({
  setPracticeDashboard,
  setPrivateNoteDashboard,
  setPublicCommentDashboard,
  setPrivateCollectionDashboard,
  userNotesBank,
  userPrivateCollectionsBank,
}) => {
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
                  onClick={() => setPracticeDashboard(false)}
                >
                  <div className="app-icon">
                    <Icons.CiPlay1 />
                  </div>
                  <div className="app-name">Test Bank</div>
                </div>
                <div
                  className="app-icon-container"
                  onClick={() => {
                    setPracticeDashboard(false);
                    setPrivateNoteDashboard(true);
                  }}
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
                  onClick={() => {
                    setPracticeDashboard(false);
                    setPublicCommentDashboard(true);
                  }}
                >
                  <div className="app-icon">
                    <Icons.CiChat1 />
                  </div>
                  <div className="app-name">Public Comments</div>
                </div>
                <div
                  className="app-icon-container"
                  onClick={() => {
                    setPracticeDashboard(false);
                    setPrivateCollectionDashboard(true);
                  }}
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
        <div className="trial-card"></div>
        <div className="trial-card"></div>
      </div>
    </div>
  );
};

export default PracticeDashboard;
