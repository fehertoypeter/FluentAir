import React, { useState, useRef } from "react";
import CustomSwitch from "./CustomSwitch";
import SettingsPopup from "../../components/SettingsPopup/SettingsPopup";
import Switch from "../../components/Switch/Switch";
import Input from "../../components/Input/Input";
import NumericInputPad, {
  numericInputPadClickable,
} from "../../components/NumericInputPad/NumericInputPad";
import { BsGearFill } from "react-icons/bs";
import RadioButtons from "../../components/RadioButtons/RadioButtons";
import AudioAnimation, {
  audioAnimation,
} from "../../components/AudioAnimation/AudioAnimation";
import MessagePopup from "../../components/MessagePopup/MessagePopup";

import ExamFinishPopup from "./ExamFinishPopup";
import { FaXmark } from "react-icons/fa6";
import { CgMailForward } from "react-icons/cg";
import ResultPopup from "../../tests/NumberPairConcentration/NumberPairConcentrationResultPopup";
import ActionConfirmationPopup from "../../components/ActionConfirmationModal/ActionConfirmationModal";
import { Icons } from "../../assets/icons/icons";
import "./AcousticMemory.css";

const loadAudioFiles = () => {
  const audioContext = require.context("./audio", false, /\.mp3$/);
  const audioFiles = {};
  audioContext.keys().forEach((key) => {
    const fileName = key.replace("./", "").replace(".mp3", "");
    audioFiles[fileName] = new Audio(audioContext(key));
  });
  return audioFiles;
};
// Generáló függvény
const generateExamNumbers = (count, digits) => {
  const challenges = [];
  for (let i = 0; i < count; i++) {
    // Minden feladványhoz generáljunk számjegyeket
    const challengeNumbers = Array.from(
      { length: digits },
      () => Math.floor(Math.random() * 10) // Egyjegyű számok (0-9)
    ).join("");
    challenges.push(challengeNumbers);
  }
  return challenges;
};

function AcousticMemory() {
  const testType = "Acoustic Memory";
  const [isExamActive, setIsExamActive] = useState(false);
  const [currentExamChallenge, setCurrentExamChallenge] = useState(0);
  const [examResults, setExamResults] = useState([]);
  const [isResultPopupOpen, setIsResultPopupOpen] = useState(false);
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);
  const startTimeRef = useRef(null);
  const [totalTasks, setTotalTasks] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [unansweredQuestions, setUnansweredQuestions] = useState(0);
  const [scorePercentage, setScorePercentage] = useState(0);
  const [activePopup, setActivePopup] = useState(null);

  const popupsConfig = {
    finishMemoryExam: {
      question: "Do you want to finish the test? ",
      buttons: [
        {
          text: "Yes, Finish and see the result!!!",
          onClick: () => handlePopupConfirm(),
          icon: <Icons.FaFlagCheckered size={18} />,
        },
        {
          text: "No, return to the test",
          onClick: () => handlePopupCancel(),
          icon: (
            <Icons.HiOutlineXMark
              size={20}
              style={{
                strokeWidth: 2,
              }}
            />
          ),
        },
      ],
    },
  };

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

  // Azt nézi meg hogy revers legyen e az ikon a topbarban.
  const isReverseOrder = settings.find(
    (setting) => setting.id === "switch3"
  ).value;

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  // Keresd meg a numberInput objektumot és vedd ki az értékét

  // Input change handler
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };
  // Practice / Exam Switch
  const handleSettingChange = (id, newValue) => {
    if (isExamActive) {
      setIsPopupVisible(true); // Ha aktív az exam, jelenítsük meg a popup-ot
      return; // Ne módosítsuk a beállítást
    }
    setSettings((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === id ? { ...setting, value: newValue } : setting
      )
    );
  };
  // Popup felugratás
  const handleQuestionPopup = () => {
    setIsPopupVisible(true);
    // Itt további logika lehet (pl. vizsga befejezése)
  };

  // Popup törlése
  const handlePopupCancel = () => {
    setActivePopup(false);
  };
  const handlePopupConfirm = () => {
    handleFinishExam();
    setActivePopup(false);
    setIsExamActive(false); // Lezárjuk az exam módot

    // Toggle the value of the CustomSwitch (in this case, switch1)
    setSettings((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === "switch1" // Use the correct switch id here
          ? { ...setting, value: !setting.value } // Toggle the value
          : setting
      )
    );
  };

  // Keresd meg a numberInput objektumot és vedd ki az értékét
  const numberInputValue = settings.find(
    (item) => item.id === "numberInput"
  ).value;

  // Setting - Audio playback Speed
  const getPlaybackDelay = () => {
    const speed = settings.find((s) => s.id === "playbackSpeed").value;
    switch (speed) {
      case "slow":
        return 1300; // 1.3 másodperc
      case "fast":
        return 0; // 0 másodperc
      default:
        return 500; // 0.5 másodperc
    }
  };

  const focusInput = () => {
    // Keresd meg a switch2 értékét
    const switch2 = settings.find((setting) => setting.id === "switch2");

    // Ha switch2 értéke false, fókuszálj az input mezőre
    if (switch2 && !switch2.value && inputRef.current) {
      inputRef.current.focus();
    }
  };
  const resetInput = () => {
    setUserInput(""); // Az input mező törlése
    setIsChecking(false); // Ellenőrzés állapotának visszaállítása
    setIsCorrect(null); // A válasz állapotának visszaállítása
  };

  const [numbers, setNumbers] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const inputRef = useRef(null);
  const audioFiles = loadAudioFiles();
  // Az exam mode értéke
  const isExamModeEnabled = settings.find(
    (setting) => setting.id === "switch1"
  ).value;
  // Number Generator
  const generateNumbers = () => {
    const count = Math.max(
      1,
      Math.min(
        10,
        parseInt(settings.find((s) => s.id === "numberInput").value, 10) || 4
      )
    );
    const randomNumbers = Array.from({ length: count }, () =>
      Math.floor(Math.random() * 10)
    );
    setNumbers(randomNumbers);
    return randomNumbers;
  };

  // Get Numbers to read
  const getNumbersToRead = (numbers, isReverse) => {
    return isReverse ? [...numbers].reverse() : numbers;
  };
  // Number audio Playback
  const playNumberAudio = async (numbers) => {
    const delay = getPlaybackDelay();
    for (const number of numbers) {
      const audio = audioFiles[number.toString()];
      if (audio) {
        await new Promise((resolve) => {
          audio.onended = resolve; // Ha lejátszódik, akkor folytatja
          audio.play();
        });
        await new Promise((resolve) => setTimeout(resolve, delay)); // várakozás a következő szám előtt
      }
    }
  };
  // Practice mode Gameplay
  const handleStart = async () => {
    const generatedNumbers = generateNumbers();
    const isReverse = settings.find((s) => s.id === "switch3").value;
    const numbersToRead = getNumbersToRead(generatedNumbers, isReverse); // Use the helper function
    setUserInput("");
    setIsCorrect(null);
    audioAnimation(true);
    numericInputPadClickable(false);
    await playNumberAudio(numbersToRead);
    numericInputPadClickable(true);
    audioAnimation(false);
    setIsChecking(true);
    focusInput();
  };
  // Check the Asnwer
  const handleCheck = () => {
    const inputNumbers = userInput.split("").map((num) => num.trim());
    const isMatch =
      JSON.stringify(inputNumbers) === JSON.stringify(numbers.map(String));
    setIsCorrect(isMatch);
    setIsChecking(false);
    numericInputPadClickable(false);
  };

  // EXAM

  const [examHistory, setExamHistory] = useState([
    {
      date: "2024-11-15, 15:06:34",
      correctAnswers: 10,
      incorrectAnswers: 0,
      unansweredQuestions: 0,
      scorePercentage: 100,
      totalTimeSpent: 649,
      testType: "Acoustic Memory",
    },
    {
      date: "19/01/2025, 16:07:35",
      correctAnswers: 6,
      incorrectAnswers: 4,
      unansweredQuestions: 0,
      scorePercentage: 60,
      totalTimeSpent: 49,
      testType: "Acoustic Memory",
    },
  ]);
  console.log(examHistory);
  const setTimer = () => {
    if (startTimeRef.current === null) {
      startTimeRef.current = Date.now();
    }
  };

  // EXAM TASK
  const examChallenges = [
    { count: 3, digits: 1 },
    { count: 3, digits: 1 },
    { count: 3, digits: 1 },
    { count: 4, digits: 1 },
    { count: 4, digits: 1 },
    { count: 4, digits: 1 },
    { count: 5, digits: 1 },
    { count: 5, digits: 1 },
    { count: 5, digits: 1 },
    { count: 6, digits: 1 },
    { count: 6, digits: 1 },
    { count: 6, digits: 1 },
    { count: 7, digits: 1 },
    { count: 7, digits: 1 },
    { count: 7, digits: 1 },
  ];
  const handleStartExam = async () => {
    setUserInput(""); // Üres input
    setTimer();
    setIsExamActive(true);
    setCurrentExamChallenge(0); // Az első feladványt kezdjük
    setExamResults([]); // Eredmények törlése
    const firstChallenge = examChallenges[0];
    const generatedNumbers = generateExamNumbers(
      firstChallenge.count,
      firstChallenge.digits
    );
    const isReverse = settings.find((s) => s.id === "switch3").value;
    const numbersToRead = getNumbersToRead(generatedNumbers, isReverse); // Use the helper function
    setNumbers(generatedNumbers);
    // Hang lejátszása
    audioAnimation(true);
    numericInputPadClickable(false);
    await playNumberAudio(numbersToRead); // Aszinkron audio lejátszás
    numericInputPadClickable(true);
    setIsChecking(true);
    audioAnimation(false);
    focusInput();
  };

  const handleSaveAndNext = async () => {
    const inputNumbers = userInput.split("").map((num) => num.trim());
    const isMatch =
      JSON.stringify(inputNumbers) === JSON.stringify(numbers.map(String));
    console.log("Input matches generated numbers:", isMatch);
    setExamResults((prevResults) => [
      ...prevResults,
      { challengeIndex: currentExamChallenge, isCorrect: isMatch },
    ]);
    // Következő feladvány betöltése vagy vizsga befejezése
    const nextIndex = currentExamChallenge + 1;
    if (nextIndex < examChallenges.length) {
      setCurrentExamChallenge(nextIndex); // Következő feladvány
      const nextChallenge = examChallenges[nextIndex];
      const generatedNumbers = generateExamNumbers(
        nextChallenge.count,
        nextChallenge.digits
      );
      setNumbers(generatedNumbers);
      setUserInput(""); // Üres input
      const isReverse = settings.find((s) => s.id === "switch3").value;
      const numbersToRead = isReverse
        ? [...generatedNumbers].reverse()
        : generatedNumbers;
      // Hang lejátszása

      numericInputPadClickable(false);
      setIsChecking(false);
      audioAnimation(true);
      await playNumberAudio(numbersToRead); // Aszinkron audio lejátszás
      audioAnimation(false);
      setIsChecking(true);
      numericInputPadClickable(true);
      focusInput();
    } else {
      handleFinishExam(); // Ha az utolsó feladvány, vizsga befejezése
    }
  };

  const handleFinishExam = () => {
    let timeSpent = 0; // Deklaráljuk a timeSpent változót kívül az if blokk előtt

    if (startTimeRef.current !== null) {
      timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);

      // Set the total time spent immediately like other states
      setTotalTimeSpent(timeSpent);

      startTimeRef.current = null;
    }

    // User input és ellenőrzés
    const inputNumbers = userInput.split("").map((num) => num.trim());
    const isMatch =
      JSON.stringify(inputNumbers) === JSON.stringify(numbers.map(String));

    // Jelenlegi vizsga eredmény mentése
    const updatedResults = [
      ...examResults,
      { challengeIndex: currentExamChallenge, isCorrect: isMatch },
    ];

    // Állapotok frissítése
    const correctAnswers = updatedResults.filter(
      (result) => result.isCorrect === true
    ).length;
    const incorrectAnswers = updatedResults.filter(
      (result) => result.isCorrect === false
    ).length;
    const total = examChallenges.reduce(
      (sum, challenge) => sum + challenge.digits,
      0
    );
    const unansweredQuestions = total - (correctAnswers + incorrectAnswers);
    const scorePercentage =
      total > 0 ? Math.round((correctAnswers / total) * 100) : 0;

    setCorrectAnswers(correctAnswers);
    setIncorrectAnswers(incorrectAnswers);
    setTotalTasks(total);
    setUnansweredQuestions(unansweredQuestions);
    setScorePercentage(scorePercentage);

    // Vizsga eredmény mentése
    const examDate = new Date();
    const examResult = {
      date: examDate.toLocaleString(),
      correctAnswers: correctAnswers,
      incorrectAnswers: incorrectAnswers,
      unansweredQuestions: unansweredQuestions,
      scorePercentage: scorePercentage,
      total: total,
      totalTimeSpent: timeSpent, // Itt közvetlenül a timeSpent változót használd
      testType: testType,
    };

    // Történet frissítése és állapotbeállítások
    setExamHistory((prevHistory) => [...prevHistory, examResult]);
    setExamResults(updatedResults);
    setIsExamActive(false);
    setIsResultPopupOpen(true); // Eredmény popup megnyitása
  };

  const handleClosePopup = () => {
    setIsResultPopupOpen(false); // Close the result popup
    setUserInput(""); // Üres input
  };

  return (
    <div>
      {activePopup && (
        <ActionConfirmationPopup
          show={true}
          onOverlayClick={() => setActivePopup(null)}
          question={popupsConfig[activePopup].question}
          buttons={popupsConfig[activePopup].buttons}
        />
      )}
      <MessagePopup />
      {/* <button onClick={handleOpenPopup}> Open exam results</button>*/}
      {isResultPopupOpen && (
        <ResultPopup
          examHistory={examHistory}
          scorePercentage={scorePercentage}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
          unansweredQuestions={unansweredQuestions}
          totalTasks={totalTasks}
          totalTimeSpent={totalTimeSpent} //done
          onClose={handleClosePopup} //Done
        />
      )}
      <div className="acoustic-memory-container">
        <div className="container-top-bar">
          <div className="left-group">
            {settings.map((setting) =>
              setting.id === "switch1" ? (
                <CustomSwitch
                  key={setting.id}
                  setting={setting} // Átadjuk az első switch objektumot
                  onChange={handleSettingChange} // Visszahívás a szülőhöz
                  isExamActive={isExamActive} // Az isExamActive prop átadása
                  onPopupRequest={handleQuestionPopup}
                  resetInput={resetInput}
                />
              ) : null
            )}

            {isExamActive && (
              <div className="exam-progress">
                <p>{`${currentExamChallenge + 1} of ${
                  examChallenges.length
                }`}</p>
              </div>
            )}
          </div>
          <div className="right-group">
            {!isExamModeEnabled && (
              <div className="task-digits" onClick={() => setPopupOpen(true)}>
                <p>{`N:o ${numberInputValue}`}</p>
              </div>
            )}
            <div className="task-direction">
              {/* Az ikonhoz hozzáadjuk a megfelelő osztályt */}
              <CgMailForward
                className={`icon-normal ${
                  isReverseOrder ? "icon-reversed" : ""
                }`}
              />
            </div>
            {isExamActive ? (
              <FaXmark
                className="examFinishButton"
                onClick={() => setActivePopup("finishMemoryExam")}
              />
            ) : (
              <BsGearFill
                className="settingsOpenButton"
                onClick={() => setPopupOpen(true)}
              />
            )}
          </div>
        </div>
        {isPopupVisible && (
          <ExamFinishPopup
            onConfirm={handlePopupConfirm}
            onCancel={handlePopupCancel}
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
            ) : setting.id === "playbackSpeed" ? (
              <RadioButtons
                key={setting.id}
                description={setting.description} // Átadjuk a description-t
                values={["slow", "normal", "fast"]} // Példa értékek
                selectedValue={setting.value}
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
        <div className="inputContainer">
          <AudioAnimation />

          <input
            className="answerInput"
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleInputChange}
            style={{
              backgroundColor:
                isCorrect === null ? "" : isCorrect ? "#CDDA32" : "#E08A8A",
              borderWidth: "2px",
              padding: "10px",
              marginBottom: "10px",
            }}
          />
          <div className={`correctAnswer ${isCorrect === false ? "show" : ""}`}>
            {isCorrect === false && `Correct sequence: ${numbers.join("")}`}
          </div>
        </div>
        {settings.find((s) => s.id === "switch2").value && (
          <NumericInputPad inputRef={inputRef} onInputChange={setUserInput} />
        )}

        {isExamModeEnabled ? (
          <button
            className="examButton"
            onClick={
              !isExamActive
                ? handleStartExam
                : currentExamChallenge < examChallenges.length - 1
                ? handleSaveAndNext
                : handleFinishExam
            }
          >
            {!isExamActive
              ? "Start Exam"
              : currentExamChallenge < examChallenges.length - 1
              ? "Save and Next"
              : "Finish Exam"}
          </button>
        ) : (
          <button
            className="checkStartButton"
            onClick={isChecking ? handleCheck : handleStart}
          >
            {isChecking ? "Check" : "Start"}
          </button>
        )}

        <div></div>
      </div>
    </div>
  );
}

export default AcousticMemory;
