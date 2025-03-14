import React, { useState, useEffect } from "react";
import SettingsPopup from "../../components/SettingsPopup/SettingsPopup";
import Input from "../../components/Input/Input";
import Switch from "../../components/Switch/Switch";
import { BsGearFill } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import ResultPopup from "./NumberPairConcentrationResultPopup";
import ExamFinishPopup from "../../pages/AcousticMemory/ExamFinishPopup";
import "./NumberPairConcentration.css";

const generateRows = () => {
  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(generateRow(1, 9)); // 1-digit numbers
  }
  for (let i = 0; i < 10; i++) {
    rows.push(generateRow(10, 99)); // 2-digit numbers
  }
  for (let i = 0; i < 10; i++) {
    rows.push(generateRow(100, 999)); // 3-digit numbers[]
  }
  return rows;
};

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const generateRow = (min, max) => {
  const numbers = new Set();
  while (numbers.size < 4) {
    numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  const uniqueNumbers = [...numbers];
  const pairNumber =
    uniqueNumbers[Math.floor(Math.random() * uniqueNumbers.length)];
  const row = [...uniqueNumbers, pairNumber]; // Add the pair
  return shuffleArray(row);
};

const NumberPairConcentration = () => {
  const testType = "Number Pair Concentration";
  const [isNumberResultPopupOpen, setIsNumberResultPopupOpen] = useState(false);
  const [isQuestionPopupVisible, setIsQuestionPopupVisible] = useState(false);
  const [rows, setRows] = useState([]);
  const [selectedNumbers, setSelectedNumbers] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [gameOver, setGameOver] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isExamActive, setIsExamActive] = useState(false); // Vizsga aktív-e
  const [totalTasks, setTotalTasks] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [scorePercentage, setScorePercentage] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [unansweredQuestions, setUnansweredQuestions] = useState(0);
  const [totalElapsedTime, setTotalElapsedTime] = useState(0);

  const [examHistory, setExamHistory] = useState([
    {
      date: "2024-11-15, 15:06:34",
      testType: "Number Pair Concentration",
      correctAnswers: 60,
      incorrectAnswers: 0,
      unansweredQuestions: 0,
      scorePercentage: 100,
      totalTimeSpent: 649,
    },
  ]);

  //Settings Popup
  const [isPopupOpen, setPopupOpen] = useState(false);
  // Settings Popup Data
  const [settings, setSettings] = useState([
    { id: "switch1", description: "Enable for use Exam mode", value: false },
    {
      id: "switch2",
      description: "Enable numeric input pad during the session",
      value: true,
    },
    {
      id: "switch3",
      description: "When enabled, input numbers in reverse order",
      value: false,
    },
    {
      id: "numberInput",
      description: "How many numbers should be asked",
      value: "2",
    },
    {
      id: "playbackSpeed",
      description: "Playback Speed",
      value: "fast",
    },
  ]);
  const handleSettingChange = (id, newValue) => {
    setSettings((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === id ? { ...setting, value: newValue } : setting
      )
    );
  };

  useEffect(() => {
    setRows(generateRows());
  }, []);

  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !gameOver) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      endGame();
    }
  });

  const toggleSelect = (rowIndex, numberIndex) => {
    if (!gameStarted || gameOver) return;

    const key = `${rowIndex}-${numberIndex}`;
    setSelectedNumbers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unansweredQuestions = 0;

    rows.forEach((row, rowIndex) => {
      const selectedInRow = Array.from(selectedNumbers).filter((key) =>
        key.startsWith(`${rowIndex}-`)
      );

      if (selectedInRow.length === 0) {
        unansweredQuestions++;
        return;
      }

      const selectedIndices = selectedInRow.map((key) =>
        parseInt(key.split("-")[1], 10)
      );

      if (selectedInRow.length === 2) {
        if (row[selectedIndices[0]] === row[selectedIndices[1]]) {
          correctAnswers++;
        } else {
          incorrectAnswers++;
        }
      } else {
        incorrectAnswers++;
      }
    });
    return { correctAnswers, incorrectAnswers, unansweredQuestions };
  };

  const endGame = () => {
    const { correctAnswers, incorrectAnswers, unansweredQuestions } =
      calculateScore();
    const totalTasksCount = rows.length;
    const timeElapsed = 180 - timeLeft; // idő eltelt idő számítása
    const scorePercentage = Math.round(
      (correctAnswers / totalTasksCount) * 100
    );

    const examDate = new Date();
    const examResult = {
      date: examDate.toLocaleString(),
      testType: testType,
      correctAnswers: correctAnswers,
      incorrectAnswers: incorrectAnswers,
      unansweredQuestions: unansweredQuestions,
      scorePercentage: scorePercentage,
      totalTimeSpent: timeElapsed, // Használjuk az elapsedTime-t a totalTimeSpent helyett
    };
    setExamHistory((prevHistory) => [...prevHistory, examResult]);
    setTotalElapsedTime(timeElapsed);
    setIncorrectAnswers(incorrectAnswers);
    setUnansweredQuestions(unansweredQuestions);
    setCorrectAnswers(correctAnswers);
    setElapsedTime(timeElapsed);
    setTotalTasks(totalTasksCount);
    setScorePercentage(scorePercentage);
    setGameOver(true);
    setIsExamActive(false);
    setIsNumberResultPopupOpen(true);
    resetGame();
  };

  const resetGame = () => {
    setRows(generateRows());
    setSelectedNumbers(new Set());
    setTimeLeft(180);
    setGameOver(false);
    setCurrentPage(0);
    setGameStarted(false);
    setIsExamActive(false);
  };

  const handleTryAgain = () => {
    setGameOver(false);
    setGameStarted(false);
    setCurrentPage(0);
    resetGame();
    setGameStarted(true);
    setIsExamActive(true);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.floor(rows.length / 5)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleStartFinishButtonClick = () => {
    if (!gameStarted) {
      setGameStarted(true);
      setIsExamActive(true);
    } else if (gameOver) {
      resetGame();
    } else {
      endGame();
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleCloseResultPopup = () => {
    setIsNumberResultPopupOpen(false);
  };

  const handlePopupConfirm = () => {
    setIsQuestionPopupVisible(false);
    endGame();
  };
  const handlePopupCancel = () => {
    setIsQuestionPopupVisible(false);
  };

  return (
    <div className="game-container">
      {isQuestionPopupVisible && (
        <ExamFinishPopup
          onConfirm={handlePopupConfirm}
          onCancel={handlePopupCancel}
        />
      )}
      {isNumberResultPopupOpen && (
        <ResultPopup
          examHistory={examHistory}
          elapsedTime={elapsedTime}
          scorePercentage={scorePercentage}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
          unansweredQuestions={unansweredQuestions}
          totalTasks={totalTasks}
          totalTimeSpent={totalElapsedTime}
          onClose={handleCloseResultPopup}
        />
      )}

      <div className="container-top-bar">
        <div className="timer">{formatTime(timeLeft)}</div>
        {isExamActive ? (
          <FaXmark
            className="examFinishButton"
            onClick={() => setIsQuestionPopupVisible(true)}
          />
        ) : (
          <BsGearFill
            className="settingsOpenButton"
            onClick={() => setPopupOpen(true)}
          />
        )}
        <SettingsPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
          {settings.map((setting) =>
            setting.id.startsWith("switch") ? (
              <Switch
                key={setting.id}
                id={setting.id}
                description={setting.description}
                isChecked={setting.value}
                onChange={(newValue) =>
                  handleSettingChange(setting.id, newValue)
                }
              />
            ) : (
              <Input
                key={setting.id}
                id={setting.id}
                description={setting.description}
                value={setting.value}
                onChange={(e) =>
                  handleSettingChange(setting.id, e.target.value)
                }
              />
            )
          )}
        </SettingsPopup>
      </div>

      <div className="game-controls"></div>
      {!gameStarted ? <div className="waiting-animation"></div> : <></>}
      <div className="pagination-container">
        <div
          className="pages"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
            transition: "transform 0.2s ease-in-out",
          }}
        >
          {rows.map((row, index) => (
            <div key={index} className="page">
              <div className="rows-container">
                {rows
                  .slice(currentPage * 5, (currentPage + 1) * 5)
                  .map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                      {row.map((number, numberIndex) => {
                        const key = `${
                          currentPage * 5 + rowIndex
                        }-${numberIndex}`;
                        const isSelected = selectedNumbers.has(key);
                        return (
                          <React.Fragment key={numberIndex}>
                            <span
                              className={`number ${
                                isSelected ? "selected" : ""
                              }`}
                              onClick={() =>
                                toggleSelect(
                                  currentPage * 5 + rowIndex,
                                  numberIndex
                                )
                              }
                            >
                              {gameStarted ? number : "?"}
                            </span>
                            {numberIndex < row.length - 1 && (
                              <div className="number-separator">'</div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 0 || !gameStarted}
            className="arrow-button"
          >
            <FaArrowLeftLong />
          </button>

          <button
            onClick={handleNextPage}
            disabled={
              currentPage >= Math.floor(rows.length / 5) || !gameStarted
            }
            className="arrow-button"
          >
            <FaArrowRightLong />
          </button>
        </div>
        {gameOver ? (
          <button onClick={handleTryAgain} className="start-action-button">
            Try Again
          </button>
        ) : (
          <button
            onClick={handleStartFinishButtonClick}
            className="start-action-button"
          >
            {gameStarted ? "Finish" : "Start"}
          </button>
        )}
      </div>
      <div className="scrollable-list">
        <h2>Vizsga eredményei</h2>
        {/* Vizsga eredmények megjelenítése */}
        <div>
          {examHistory.length > 0 ? (
            <ul>
              {examHistory.map((result, index) => (
                <li key={index}>
                  <strong>{result.date}</strong> - {result.testType}
                  <ul>
                    <li>Helyes válaszok: {result.correctAnswers}</li>
                    <li>Helytelen válaszok: {result.incorrectAnswers}</li>
                    <li>
                      Meg nem válaszolt kérdések: {result.unansweredQuestions}
                    </li>
                    <li>Százalékos eredmény: {result.scorePercentage}%</li>
                    <li>Összes kérdés: {result.total}</li>
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <p>Még nincs vizsga eredmény.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NumberPairConcentration;
