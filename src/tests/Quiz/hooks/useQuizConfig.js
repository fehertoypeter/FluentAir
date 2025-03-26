import { useState, useCallback, useEffect } from "react";
//import { mainTestBank } from "../mainTestBank"; // Importáljuk az adatokat
import { mainTestBank } from "../../../data/hajduflyTestbank.js";
import { userQuestionData } from "../../../data/userLocalDatabase.js"; // Importáljuk a userQuestionData-t

const defaultConfig = {
  questionCount: 50,
  difficultyLevels: ["easy", "medium", "hard"],
  //  topics: ["Mathematics"],
  topics: ["Légi Jog"],
  timerMode: true,
  timeLimit: 10,
  questionSeenBefore: false,
  questionAnsweredWrong: false,
  questionRandomOrder: false,
  automaticQuestionSubmit: true,
  answerRevealMode: "auto_submit",
};

const useQuizConfig = () => {
  const [quizConfig, setQuizConfig] = useState(defaultConfig);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(0);
  const [userWrongAnswers, setUserWrongAnswers] = useState([]);
  const [userSeenQuestions, setUserSeenQuestions] = useState([]);
  const [selectedSubtopic, setSelectedSubtopic] = useState("All");
  const [isAllDifficultiesSelected, setIsAllDifficultiesSelected] =
    useState(false);
  const [filteredQuestionCount, setFilteredQuestionCount] = useState(0);

  // Lokális adatok betöltése
  useEffect(() => {
    const loadLocalData = () => {
      const { wrongAnswers, seenQuestions } = userQuestionData;
      setUserWrongAnswers(wrongAnswers || []);
      setUserSeenQuestions(seenQuestions || []);
      console.log("User wrong answers:", wrongAnswers); // Ellenőrzés céljából kiírjuk a konzolra
      console.log("User seen questions:", seenQuestions); // Ellenőrzés céljából kiírjuk a konzolra
    };

    loadLocalData();
  }, []); // Ez a useEffect csak egyszer fut le, amikor a komponens mountolódik

  const filterQuestions = useCallback(() => {
    let filteredQuestions = [];
    mainTestBank.forEach((topicData) => {
      if (quizConfig.topics.includes(topicData.topic)) {
        topicData.questions.forEach((question) => {
          if (
            quizConfig.difficultyLevels.includes(question.difficulty) &&
            (selectedSubtopic === "All" ||
              question.subtopic === selectedSubtopic)
          ) {
            filteredQuestions.push(question);
          }
        });
      }
    });

    // További szűrések (hibás válaszok, látott kérdések, stb.)
    if (quizConfig.questionAnsweredWrong) {
      filteredQuestions = filteredQuestions.filter((question) =>
        userWrongAnswers.includes(question.id)
      );
    }

    if (quizConfig.questionSeenBefore) {
      filteredQuestions = filteredQuestions.filter(
        (question) => !userSeenQuestions.includes(question.id)
      );
    }

    if (quizConfig.questionRandomOrder) {
      filteredQuestions = filteredQuestions.sort(() => Math.random() - 0.5);
    }

    setFilteredQuestionCount(filteredQuestions.length); // Frissítsd a szűrt kérdések számát
    filteredQuestions = filteredQuestions.slice(0, quizConfig.questionCount);
    setCurrentQuestions(filteredQuestions);
    setSelectedQuestionCount(filteredQuestions.length); // Frissítjük a kérdések számát
  }, [
    quizConfig.difficultyLevels,
    quizConfig.questionCount,
    quizConfig.questionRandomOrder,
    quizConfig.topics,
    quizConfig.questionAnsweredWrong,
    quizConfig.questionSeenBefore,
    userWrongAnswers,
    userSeenQuestions,
    selectedSubtopic,
  ]);

  useEffect(() => {
    filterQuestions();
  }, [quizConfig, selectedSubtopic, filterQuestions]);

  useEffect(() => {
    filterQuestions(); // Mindig frissítjük a kérdések listáját, ha a konfiguráció vagy a subtopic változik
  }, [quizConfig, selectedSubtopic, filterQuestions]);

  useEffect(() => {
    filterQuestions();
  }, [quizConfig, filterQuestions]);

  const restoreFilters = () => {
    setQuizConfig(defaultConfig);
  };
  useEffect(() => {
    // Ha minden difficulty level kiválasztva van, az "All" gomb aktívvá válik
    if (
      quizConfig.difficultyLevels.includes("easy") &&
      quizConfig.difficultyLevels.includes("medium") &&
      quizConfig.difficultyLevels.includes("hard")
    ) {
      setIsAllDifficultiesSelected(true);
    } else {
      setIsAllDifficultiesSelected(false);
    }
  }, [quizConfig.difficultyLevels]);
  const handleAnswerRevealModeChange = (newMode) => {
    setQuizConfig((prevConfig) => ({
      ...prevConfig,
      answerRevealMode: newMode,
    }));
  };

  const toggleTimerMode = () => {
    setQuizConfig((prevConfig) => ({
      ...prevConfig,
      timerMode: !prevConfig.timerMode,
    }));
  };

  const toggleAutomaticQuestionSubmit = () => {
    setQuizConfig((prevConfig) => ({
      ...prevConfig,
      automaticQuestionSubmit: !prevConfig.automaticQuestionSubmit,
    }));
  };

  const handleSubjectChange = (event) => {
    const selectedTopic = event.target.value;
    setQuizConfig((prevConfig) => ({
      ...prevConfig,
      topics: [selectedTopic],
    }));
    filterQuestions(); // Frissítjük a kérdések listáját a subject változásakor
  };

  const toggleSeenStatus = () => {
    setQuizConfig((prevConfig) => ({
      ...prevConfig,
      questionSeenBefore: !prevConfig.questionSeenBefore,
    }));
  };

  const toggleAnsweredWrongStatus = () => {
    setQuizConfig((prevConfig) => ({
      ...prevConfig,
      questionAnsweredWrong: !prevConfig.questionAnsweredWrong,
    }));
  };

  const toggleRandomQuestionOrderStatus = () => {
    setQuizConfig((prevConfig) => ({
      ...prevConfig,
      questionRandomOrder: !prevConfig.questionRandomOrder,
    }));
  };

  const toggleDifficulty = (difficulty) => {
    if (isAllDifficultiesSelected) {
      // Ha az "All" gomb aktív, csak a kiválasztott difficulty level maradjon kiválasztva
      setQuizConfig((prevConfig) => ({
        ...prevConfig,
        difficultyLevels: [difficulty], // Csak a kiválasztott difficulty level marad
      }));
      setIsAllDifficultiesSelected(false); // Az "All" gomb inaktívvá válik
    } else {
      // Ha az "All" gomb inaktív, normálisan működik a difficulty level váltás
      setQuizConfig((prevConfig) => {
        let updatedLevels = prevConfig.difficultyLevels.includes(difficulty)
          ? prevConfig.difficultyLevels.filter((level) => level !== difficulty)
          : [...prevConfig.difficultyLevels, difficulty];

        if (updatedLevels.length === 0) {
          updatedLevels = ["easy"]; // Alapértelmezett érték, ha nincs kiválasztva semmi
        }

        return { ...prevConfig, difficultyLevels: updatedLevels };
      });
    }
  };
  const toggleAllDifficulties = () => {
    if (isAllDifficultiesSelected) {
      // Ha az "All" gomb aktív, visszaállítjuk az alapértelmezett értékeket
      setQuizConfig((prevConfig) => ({
        ...prevConfig,
        difficultyLevels: ["easy"], // Vagy bármilyen alapértelmezett érték
      }));
    } else {
      // Ha az "All" gomb inaktív, minden difficulty levelt bekapcsolunk
      setQuizConfig((prevConfig) => ({
        ...prevConfig,
        difficultyLevels: ["easy", "medium", "hard"],
      }));
    }
    setIsAllDifficultiesSelected((prev) => !prev); // Átváltjuk az "All" opció állapotát
  };
  const handleQuestionLimitChange = (event) => {
    const limit = parseInt(event.target.value, 10);
    setQuizConfig((prevConfig) => ({
      ...prevConfig,
      questionCount: isNaN(limit) ? "" : limit,
    }));
  };

  const handleQuestionLimitBlur = () => {
    if (!quizConfig.questionCount || quizConfig.questionCount < 1) {
      window.showPopupMessage(
        "Oho - Let's include at least 10 maybe :)",
        3000,
        "#77DD77",
        "black"
      );
      setQuizConfig((prevConfig) => ({
        ...prevConfig,
        questionCount: 10,
      }));
    }
  };

  const handleTimeLimitChange = (event) => {
    const value = event.target.value;
    setQuizConfig((prevConfig) => ({
      ...prevConfig,
      timeLimit: value === "" ? "" : parseInt(value, 10),
    }));
  };

  const handleTimeLimitBlur = () => {
    if (!quizConfig.timeLimit || quizConfig.timeLimit <= 0) {
      window.showPopupMessage(
        "Oho - Maybe 10 minutes will be enough :)",
        3000,
        "#77DD77",
        "black"
      );
      setQuizConfig((prevConfig) => ({
        ...prevConfig,
        timeLimit: 10,
      }));
    }
  };

  return {
    defaultConfig,
    mainTestBank,
    quizConfig,
    currentQuestions,
    selectedQuestionCount,
    userWrongAnswers,
    userSeenQuestions,
    setUserSeenQuestions,
    setUserWrongAnswers,
    handleSubjectChange,
    restoreFilters,
    toggleSeenStatus,
    toggleAnsweredWrongStatus,
    toggleRandomQuestionOrderStatus,
    toggleDifficulty,
    toggleAllDifficulties,
    handleQuestionLimitChange,
    handleQuestionLimitBlur,
    toggleTimerMode,
    handleTimeLimitChange,
    handleTimeLimitBlur,
    toggleAutomaticQuestionSubmit,
    handleAnswerRevealModeChange,
    filterQuestions,
    selectedSubtopic,
    setSelectedSubtopic,
    isAllDifficultiesSelected,
    filteredQuestionCount,
  };
};

export default useQuizConfig;
