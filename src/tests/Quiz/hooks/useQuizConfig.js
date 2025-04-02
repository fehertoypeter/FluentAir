import { useState, useCallback, useEffect } from "react";
import { mainTestBank } from "../../../data/hajduflyTestbank.js";
import { userQuestionData } from "../../../data/userLocalDatabase.js";

const defaultConfig = {
  questionCount: 50,
  difficultyLevels: ["easy", "medium", "hard"],
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
  const [forcedQuestionIds, setForcedQuestionIds] = useState([]); // <-- Ez az egyetlen változó módosítás

  useEffect(() => {
    const loadLocalData = () => {
      const { wrongAnswers, seenQuestions } = userQuestionData;
      setUserWrongAnswers(wrongAnswers || []);
      setUserSeenQuestions(seenQuestions || []);
      console.log("User wrong answers:", wrongAnswers);
      console.log("User seen questions:", seenQuestions);
    };
    loadLocalData();
  }, []);

  const filterQuestions = useCallback(() => {
    // Ha van forcedQuestionIds, csak azokat a kérdéseket töltjük be
    if (forcedQuestionIds.length > 0) {
      const foundQuestions = [];

      for (const topicData of mainTestBank) {
        for (const question of topicData.questions) {
          if (forcedQuestionIds.includes(question.id)) {
            foundQuestions.push(question);
            if (foundQuestions.length === forcedQuestionIds.length) break;
          }
        }
        if (foundQuestions.length === forcedQuestionIds.length) break;
      }

      const finalQuestions = quizConfig.questionRandomOrder
        ? [...foundQuestions].sort(() => Math.random() - 0.5)
        : foundQuestions;

      setCurrentQuestions(finalQuestions);
      setSelectedQuestionCount(finalQuestions.length);
      setFilteredQuestionCount(finalQuestions.length);
      return;
    }

    // Normál szűrési logika
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

    setFilteredQuestionCount(filteredQuestions.length);
    filteredQuestions = filteredQuestions.slice(0, quizConfig.questionCount);
    setCurrentQuestions(filteredQuestions);
    setSelectedQuestionCount(filteredQuestions.length);
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
    forcedQuestionIds, // <-- Frissítve
  ]);

  useEffect(() => {
    filterQuestions();
  }, [quizConfig, selectedSubtopic, filterQuestions]);

  const restoreFilters = () => {
    setQuizConfig(defaultConfig);
    setForcedQuestionIds([]); // <-- Frissítve
  };

  useEffect(() => {
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

  // Ez az egyetlen új függvény, ami felváltja a setQuestionById-t
  const setQuestionsById = useCallback(
    (questionIds, customConfig = {}) => {
      const ids = Array.isArray(questionIds) ? questionIds : [questionIds];
      setForcedQuestionIds(ids);

      setQuizConfig((prev) => ({
        ...defaultConfig,
        questionCount: ids.length,
        answerRevealMode: customConfig.answerRevealMode || "after_test",
        timeLimit:
          customConfig.timeLimit !== undefined ? customConfig.timeLimit : 10,
        timerMode:
          customConfig.timerMode !== undefined ? customConfig.timerMode : true,
        questionRandomOrder: prev.questionRandomOrder, // Megtartjuk a jelenlegi random order beállítást
        ...customConfig,
      }));

      // Azonnali szűrés a frissített beállításokkal
      const foundQuestions = [];
      for (const topicData of mainTestBank) {
        for (const question of topicData.questions) {
          if (ids.includes(question.id)) {
            foundQuestions.push(question);
            if (foundQuestions.length === ids.length) break;
          }
        }
        if (foundQuestions.length === ids.length) break;
      }

      const finalQuestions = quizConfig.questionRandomOrder
        ? [...foundQuestions].sort(() => Math.random() - 0.5)
        : foundQuestions;

      setCurrentQuestions(finalQuestions);
      setSelectedQuestionCount(finalQuestions.length);
      setFilteredQuestionCount(finalQuestions.length);
    },
    [quizConfig.questionRandomOrder]
  );

  // ----------------------------
  // INNENTŐL AZ ÖSSZES TÖBBI FUNKCIÓ MARAD VÁLTOZATLAN!
  // ----------------------------

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
    setForcedQuestionIds([]); // <-- Frissítve
    filterQuestions();
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
      setQuizConfig((prevConfig) => ({
        ...prevConfig,
        difficultyLevels: [difficulty],
      }));
      setIsAllDifficultiesSelected(false);
    } else {
      setQuizConfig((prevConfig) => {
        let updatedLevels = prevConfig.difficultyLevels.includes(difficulty)
          ? prevConfig.difficultyLevels.filter((level) => level !== difficulty)
          : [...prevConfig.difficultyLevels, difficulty];

        if (updatedLevels.length === 0) {
          updatedLevels = ["easy"];
        }

        return { ...prevConfig, difficultyLevels: updatedLevels };
      });
    }
  };

  const toggleAllDifficulties = () => {
    if (isAllDifficultiesSelected) {
      setQuizConfig((prevConfig) => ({
        ...prevConfig,
        difficultyLevels: ["easy"],
      }));
    } else {
      setQuizConfig((prevConfig) => ({
        ...prevConfig,
        difficultyLevels: ["easy", "medium", "hard"],
      }));
    }
    setIsAllDifficultiesSelected((prev) => !prev);
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
    setQuestionsById, // <-- Ez váltja fel a setQuestionById-t
    forcedQuestionIds, // <-- Új exportált érték
  };
};

export default useQuizConfig;
