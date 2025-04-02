import React, { useState, useEffect, useCallback, useRef } from "react";
// DATA
import { userNotesBank } from "../../data/userLocalDatabase";
import { userPrivateCollectionsBank } from "../../data/userLocalDatabase";
import { usersCommentsBank } from "../../data/usersCommentsBank";
// DASHBOARDS
import useDashboardNavigation from "./hooks/useDashboardNavigation";
import useNoteDashboard from "./hooks/useNoteDashboard";
import usePrivateCollectionDashboard from "./hooks/usePrivateCollectionDashboard";
import PracticeDashboard from "./Dashboard/practiceDashboard";
import PrivateNotesDashboard from "./Dashboard/privateNotesDashboard";
import PrivateCollectionsDashboard from "./Dashboard/privateCollectionsDashboard";
import PublicCommentsDashboard from "./Dashboard/publicCommentsDashboard";
import ExamsDashboard from "./Dashboard/examsDashboard";
// COMPONENTS
import ActionConfirmationPopup from "../../components/ActionConfirmationModal/ActionConfirmationModal";
import EternalTimer from "../../components/EternalTimer/EternalTimer";
import useQuizConfig from "./hooks/useQuizConfig";
import ImageModal from "./ImageModal/ImageModal";
import CommentSection from "./CommentSection/CommentSection";
import MessagePopup from "../../components/MessagePopup/MessagePopup";
import PrivateNote from "./privateNote";
import PrivateCollection from "./privateCollections";
import QuestionList from "./QuestionList";
import ExplanationModal from "./ExplanationModal";
import { MathComponent } from "mathjax-react";
import { Icons } from "../../assets/icons/icons";
// CSS
import "katex/dist/katex.min.css";
import "./QuizApp.css";
import "../../components/Switch/Switch.css";
import "../../components/PerformanceGraph/PerformanceGraph.css";
import "dayjs/locale/en";
import "./quizResult.css";
import "./Dashboard/practiceDashboard.css";
import "./Dashboard/privateNoteDashboard.css";
import "./Dashboard/privateCollectionDashboard.css";
import "./Dashboard/commentDashboard.css";

const QuizApp = ({ setTestModeOn }) => {
  const {
    defaultConfig,
    mainTestBank,
    quizConfig,
    currentQuestions,
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
    setQuestionsById,
  } = useQuizConfig();
  const {
    isDetailVisible,
    isClosing,
    searchTerm,
    setSearchTerm,
    handleCardClick,
    handleCloseDetails,
    filteredNotes,
    activeQuestion,
    activeNote,
    getQuestionById,
  } = useNoteDashboard(mainTestBank, userNotesBank);
  const { activeCollection, setActiveCollection, getQuestionsByCollection } =
    usePrivateCollectionDashboard(mainTestBank, userPrivateCollectionsBank);

  // MOBILE VIEW
  const [isMobile, setIsMobile] = useState(false);
  //POPUPS
  const [isPrivateNoteOpen, setPrivateNoteOpen] = useState(false);
  const [isCommentSectionOpen, setCommentSectionOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isPrivateCollectionOpen, setPrivateCollectionOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isIconPopupboxOpen, setIconPopupboxOpen] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  // TIME COUNTING
  const eternalTimerRef = useRef(null);
  const [elapsedEternalTime, setElapsedEternalTime] = useState(null);
  const [eternalInitialTime, setEternalInitialTime] = useState(
    quizConfig.timeLimit * 60
  );
  // TEST DATAS / COMMENTS /
  const [userPreviousTests, setUserPreviousTests] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestionsCount, setAnsweredQuestionsCount] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [questionComments, setQuestionComments] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentWrongAnswers, setCurrentWrongAnswers] = useState(0); // State to store the number of wrong answers
  const [currentUnansweredQuestions, setCurrentUnansweredQuestions] =
    useState(0); // State to store the number of unanswered questions

  // QUIT STATUS

  const [practiceDashboard, setPracticeDashboard] = useState(true);
  const [examsDashboard, setExamsDashboard] = useState(false);
  const [privateNoteDasboard, setPrivateNoteDasboard] = useState(false);
  const [privateCollectionDashboard, setPrivateCollectionDashboard] =
    useState(false);
  const [publicCommentDashboard, setPublicCommentDashboard] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizConfiguration, setQuizConfiguration] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [reviewMode, setReviewMode] = useState(false); // After finishing the test, you can review the questions and answers.
  const [feedback, setFeedback] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Added state
  const [isAnswered, setIsAnswered] = useState(false); // Tracks if the answer has been submitted

  //POPUP'S TEXTS
  const popupsConfig = {
    finishTest: {
      question: "Do you want to finish the test?",
      buttons: [
        {
          text: "Yes, Finish and see the result",
          onClick: () => handleConfirmFinish(true),
          icon: <Icons.FaFlagCheckered size={18} />,
        },
        {
          text: "No, return to the test",
          onClick: () => {
            setActivePopup(null);
            if (eternalTimerRef.current) {
              eternalTimerRef.current.resumeTimer();
            }
          },
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

  // DATA SAVE TO PREVIOUS TESTS DATA
  const saveUserTestData = () => {
    const testData = {
      quizTimestamp: new Date().toISOString(),
      correctAnswers,
      totalQuestions: currentQuestions.length,
      scorePercentage: Math.round(
        (correctAnswers / currentQuestions.length) * 100
      ),
      currentWrongAnswers,
      currentUnansweredQuestions,
      totalTimeSpent: elapsedEternalTime,
      eternalInitialTime,
      userAnswers,
      topic: quizConfig.topics,
    };
    setUserPreviousTests((prevTests) => [...prevTests, testData]);
    console.log("test data", testData);
  };
  const updateUserWrongAnswers = () => {
    const newWrongAnswers = [...userWrongAnswers]; // Create a copy of the current wrong answers

    userAnswers.forEach((userAnswer) => {
      const question = currentQuestions.find(
        (q) => q.id === userAnswer.questionId
      );
      const isCorrect = userAnswer.answer === question.answer;

      if (isCorrect) {
        // If the answer is correct and the question was in the wrong answers list, remove it
        const index = newWrongAnswers.indexOf(question.id);
        if (index !== -1) {
          newWrongAnswers.splice(index, 1);
        }
      } else {
        // If the answer is wrong and the question is not in the wrong answers list, add it
        if (!newWrongAnswers.includes(question.id)) {
          newWrongAnswers.push(question.id);
        }
      }
    });

    // Sort the wrong answers alphabetically
    setUserWrongAnswers(newWrongAnswers.sort((a, b) => a.localeCompare(b)));
  };
  const updateUserSeenQuestions = () => {
    const newSeenQuestions = [...userSeenQuestions]; // Create a copy of the current seen questions

    currentQuestions.forEach((question) => {
      // Check if the user has answered the question
      const hasAnswered = userAnswers.some(
        (answer) => answer.questionId === question.id
      );

      // If the user has answered the question and it is not in the seen questions list, add it
      if (hasAnswered && !newSeenQuestions.includes(question.id)) {
        newSeenQuestions.push(question.id);
      }
    });

    // Sort the seen questions
    newSeenQuestions.sort((a, b) => a - b);

    // Update the userSeenQuestions state
    setUserSeenQuestions(newSeenQuestions);
  };

  // TEST RESULT DATAS
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const progressPercentage =
    (answeredQuestionsCount / currentQuestions.length) * 100;
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === currentQuestions.length - 1;
  const isSubmitButtonDisabled = !selectedAnswer;
  const quizTimestamp = new Date().toISOString();
  const scorePercentage = Math.round(
    (correctAnswers / currentQuestions.length) * 100
  );
  const totalTimeSpent = elapsedEternalTime;
  const averageScore = 15;
  const comparisonIcon =
    scorePercentage > averageScore ? (
      <Icons.FaRegThumbsUp />
    ) : (
      <Icons.FaRegThumbsDown />
    );
  const comparison = scorePercentage > averageScore ? "better" : "worse";

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    };
    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Check on resize
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Timer change to sec
  useEffect(() => {
    setEternalInitialTime(quizConfig.timeLimit * 60); // Convert to seconds
  }, [quizConfig.timeLimit]);
  useEffect(() => {
    if (quizConfig.saveAndNext && quizConfig.showCorrectAfterSet) {
      console.error(
        "Invalid configuration: 'saveAndNext: true' requires 'showCorrectAfterSet: false'. Resetting to false."
      );
      quizConfig.showCorrectAfterSet = false;
    }
  }, [quizConfig]);
  useEffect(() => {
    if (quizStarted) {
      filterQuestions();
      if (quizConfig.timerMode && eternalTimerRef.current) {
        eternalTimerRef.current.startTimer();
      }
    }
  }, [quizStarted, quizConfig.timerMode, filterQuestions]);
  useEffect(() => {
    console.log("AFTER TEST user's Wrong Answers:" + userWrongAnswers);
    console.log("AFTER TEST user's Seen Questions:" + userSeenQuestions);
    console.log("AFTER TEST user's Private Notes:", userNotesBank);
  }, [userWrongAnswers, userSeenQuestions]);

  const uniqueTopics = [
    ...new Set(mainTestBank.map((section) => section.topic)),
  ];
  const uniqueSubtopics = [
    ...new Set(
      mainTestBank
        .filter((topicData) => quizConfig.topics.includes(topicData.topic))
        .flatMap((topicData) =>
          topicData.questions.map((question) => question.subtopic)
        )
    ),
  ];
  const settingsSwitchGroupOptions = [
    {
      label: "After completing the test",
      id: "afterTest",
      value: "after_test",
    },
    {
      label: "Once I submit my answers",
      id: "autoSubmit",
      value: "auto_submit",
    },
    {
      label: "Right away without answering",
      id: "rightAway",
      value: "right_away",
    },
  ];

  // TIME COUNTING
  const handleStopEternalTimer = useCallback(() => {
    if (eternalTimerRef.current) {
      const remainingTime = eternalTimerRef.current.getRemainingTime();
      console.log("Remaining Time:", remainingTime);
      const elapsedTime = eternalInitialTime - remainingTime;
      setElapsedEternalTime(elapsedTime);
      console.log("Elapsed Eternal Time:", elapsedTime);
      setQuizFinished(true);
    }
  }, [eternalInitialTime]);
  const handleTimeRanOut = useCallback(
    (remainingTime) => {
      closeSidebars();
      console.log("Time ran out automatically");
      const elapsedTime = eternalInitialTime - remainingTime;
      setElapsedEternalTime(elapsedTime);
      console.log("Elapsed Eternal Time:", elapsedTime);
      setQuizFinished(true);
    },
    [eternalInitialTime]
  );
  const handleTimeUpdate = useCallback((newTime) => {
    if (newTime === 0 && eternalTimerRef.current) {
      eternalTimerRef.current.stopTimer();
    }
  }, []);

  // POPUPS AND SIDEBARS
  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  // NAVIGATION
  const handleAnswerSubmit = (selectedAnswer) => {
    if (isAnswered) {
      return; // If already answered, do not allow changes
    }

    if (
      userAnswers.some(
        (a) => a.questionId === currentQuestions[currentQuestionIndex].id
      )
    ) {
      return;
    }

    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;

    // Update the userAnswers state
    const updatedUserAnswers = [
      ...userAnswers,
      { questionId: currentQuestion.id, answer: selectedAnswer },
    ];
    setUserAnswers(updatedUserAnswers);

    // Count correct answers
    const newCorrectAnswers = isCorrect ? correctAnswers + 1 : correctAnswers;
    setCorrectAnswers(newCorrectAnswers);

    // Count wrong answers
    const newCurrentWrongAnswers = updatedUserAnswers.filter((userAnswer) => {
      const question = currentQuestions.find(
        (q) => q.id === userAnswer.questionId
      );
      return userAnswer.answer !== question.answer;
    }).length;

    // Update the number of wrong answers in the state
    setCurrentWrongAnswers(newCurrentWrongAnswers);

    // Count unanswered questions
    const newUnansweredQuestions =
      currentQuestions.length - newCorrectAnswers - newCurrentWrongAnswers;

    // Update the number of unanswered questions in the state
    setCurrentUnansweredQuestions(newUnansweredQuestions);

    // Update the number of answered questions
    setAnsweredQuestionsCount(answeredQuestionsCount + 1);

    // Set feedback
    setFeedback({
      isCorrect,
      selectedAnswer,
      correctAnswer: currentQuestion.answer,
    });

    // Set that the answer has been submitted
    setIsAnswered(true);
  };
  const handleNextQuestionArrow = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      navigateToQuestion(currentQuestionIndex + 1);
    }
  };
  const handlePrevQuestionArrow = () => {
    if (currentQuestionIndex > 0) {
      navigateToQuestion(currentQuestionIndex - 1);
    }
  };
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      navigateToQuestion(currentQuestionIndex - 1);
    } else {
      setQuizFinished(true);
    }
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      navigateToQuestion(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const navigateToQuestion = (index) => {
    setCurrentQuestionIndex(index);
    setIsAnswered(false); // Reset on new question

    const userAnswer = userAnswers.find(
      (a) => a.questionId === currentQuestions[index].id
    );

    if (userAnswer) {
      const currentQuestion = currentQuestions[index];
      setFeedback({
        isCorrect: userAnswer.answer === currentQuestion.answer,
        selectedAnswer: userAnswer.answer,
        correctAnswer: currentQuestion.answer,
      });
      setSelectedAnswer(userAnswer.answer); // Set the selected answer
    } else {
      setFeedback(null); // If no answer, clear feedback
      setSelectedAnswer(null); // Clear the selected answer
    }
  };
  // CUSTOM EXAM SETUP
  const startTestWithQuestions = (questionIds, config = {}) => {
    navigateTo("exam", {
      questionIds,
      config,
      setQuestionsById,
    });

    setPracticeDashboard(false);
    setQuestionsById(questionIds, config);
    setTestModeOn(true);
    setQuizStarted(true);
    console.log("elindult a teszt a kártyáról.");

    if (config.timeLimit !== undefined) {
      setEternalInitialTime(config.timeLimit * 60);
    }
  };

  // QUIZ START FINNISH AND RESET

  const handleStartQuiz = () => {
    navigateTo("exam", {
      setQuestionsById,
      config: quizConfig,
    });

    setTestModeOn(true); // Hide the Navbar in the test
    console.log("Start The quiz");
    console.log("STARTER User Notes:", userNotesBank);
    console.log("STARTER user's Wrong Answers:" + userWrongAnswers);
    console.log("STARTER user's Seen Questions:" + userSeenQuestions);

    filterQuestions();
  };
  const handleResetQuiz = () => {
    setTestModeOn(false); //Show Navbar in the test
    setQuizStarted(false);
    setQuizFinished(false);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setCorrectAnswers(0);
    setFeedback(null);
    setAnsweredQuestionsCount(0);
    setIsSidebarVisible(false);
    setSelectedAnswer(null); // Reset selected answer
    setIsAnswered(false); // Reset answer state
  };
  const handleFinishQuiz = () => {
    if (checkUnansweredQuestions()) {
      eternalTimerRef.current.pauseTimer();
      setActivePopup("finishTest");
    } else {
      closeSidebars();
      handleStopEternalTimer();
      updateUserWrongAnswers();
      updateUserSeenQuestions();
      setQuizFinished(true);
      saveUserTestData();
      setTestModeOn(false);
      console.log("Finish The quiz");
      console.log("AFTER TEST User Notes:", userNotesBank);
      console.log("AFTER TEST user's Wrong Answers:" + userWrongAnswers);
      console.log("AFTER TEST user's Seen Questions:" + userSeenQuestions);
    }
  };
  const handleConfirmFinish = (confirm) => {
    if (confirm) {
      closeSidebars();
      handleStopEternalTimer();
      updateUserWrongAnswers();
      updateUserSeenQuestions();
      setQuizFinished(true);
      saveUserTestData();
      setTestModeOn(false);
      console.log("Finish The quiz");
    }
    setActivePopup(false);
  };
  const closeSidebars = () => {
    setPrivateNoteOpen(false);
    setCommentSectionOpen(false);
    setIsSidebarVisible(false);
    setPrivateCollectionOpen(false);
    setModalOpen(false);
  };
  const checkUnansweredQuestions = () => {
    return currentQuestions.some(
      (question) =>
        !userAnswers.some((answer) => answer.questionId === question.id)
    );
  };
  // DASHBOARD NAVIGATION
  const { navigateTo } = useDashboardNavigation({
    setPracticeDashboard,
    setExamsDashboard,
    setPrivateNoteDasboard,
    setPrivateCollectionDashboard,
    setPublicCommentDashboard,
    setQuizStarted,
    setTestModeOn,
    setQuizConfiguration,
    resetAllDashboards: () => {
      setPracticeDashboard(false);
      setExamsDashboard(false);
      setPrivateNoteDasboard(false);
      setPrivateCollectionDashboard(false);
      setPublicCommentDashboard(false);
      setQuizStarted(false);
      setQuizConfiguration(false);
    },
  });
  const handleViewAllExams = () => navigateTo("exams");

  if (practiceDashboard) {
    return (
      <>
        <div>
          <PracticeDashboard
            navigateTo={navigateTo}
            setPracticeDashboard={setPracticeDashboard}
            setPrivateNoteDashboard={setPrivateNoteDasboard}
            setPublicCommentDashboard={setPublicCommentDashboard}
            setPrivateCollectionDashboard={setPrivateCollectionDashboard}
            userNotesBank={userNotesBank}
            userPrivateCollectionsBank={userPrivateCollectionsBank}
            startTestWithQuestions={startTestWithQuestions}
            setExamsDashboard={setExamsDashboard}
            onViewAllExams={handleViewAllExams}
          />
        </div>
      </>
    );
  }
  if (publicCommentDashboard) {
    return (
      <PublicCommentsDashboard
        navigateTo={navigateTo}
        usersCommentsBank={usersCommentsBank}
        setPracticeDashboard={setPracticeDashboard}
        setPublicCommentDashboard={setPublicCommentDashboard}
      />
    );
  }
  if (privateNoteDasboard) {
    return (
      <PrivateNotesDashboard
        navigateTo={navigateTo}
        isDetailVisible={isDetailVisible}
        setPracticeDashboard={setPracticeDashboard}
        setPrivateNoteDasboard={setPrivateNoteDasboard}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredNotes={filteredNotes}
        getQuestionById={getQuestionById}
        handleCardClick={handleCardClick}
        activeQuestion={activeQuestion}
        activeNote={activeNote}
        handleCloseDetails={handleCloseDetails}
        isClosing={isClosing}
        userNotesBank={userNotesBank}
        userPrivateCollectionsBank={userPrivateCollectionsBank}
        questionComments={questionComments}
        setQuestionComments={setQuestionComments}
      />
    );
  }
  if (privateCollectionDashboard) {
    return (
      <PrivateCollectionsDashboard
        navigateTo={navigateTo}
        setPracticeDashboard={setPracticeDashboard}
        setPrivateCollectionDashboard={setPrivateCollectionDashboard}
        isDetailVisible={isDetailVisible}
        userPrivateCollectionsBank={userPrivateCollectionsBank}
        setActiveCollection={setActiveCollection}
        activeCollection={activeCollection}
        getQuestionsByCollection={getQuestionsByCollection}
        handleCardClick={handleCardClick}
        activeQuestion={activeQuestion}
        handleCloseDetails={handleCloseDetails}
        isClosing={isClosing}
        userNotesBank={userNotesBank}
        questionComments={questionComments}
        setQuestionComments={setQuestionComments}
      />
    );
  }
  if (examsDashboard) {
    return (
      <div>
        <ExamsDashboard
          startTestWithQuestions={startTestWithQuestions}
          navigateTo={navigateTo}
        />
      </div>
    );
  }
  if (quizFinished) {
    return (
      <div>
        <div className="result-container">
          <div className="upper-container">
            <div className="exam-result-popup-content">
              <div className="latest-exam-result">
                <div className="scoreTextWrapper">
                  <div className="scoreText">{scorePercentage}%</div>
                </div>
                <div className="custom-container">
                  <div className="custom-side-bar"></div>
                  <div className="custom-content">
                    <span className="custom-date">{quizTimestamp}</span>
                    <h2 className="custom-title">{quizConfig.topics}</h2>

                    <span className="custom-description">This was a test</span>
                  </div>
                </div>
              </div>
              <div className="allExamsdata">
                <div className="ExamScoresContainer">
                  <div className="summaryCard">
                    <Icons.IoMdCheckmarkCircleOutline />
                    <p>{correctAnswers}</p>
                  </div>
                  <div className="summaryCard">
                    <Icons.IoMdCloseCircleOutline />
                    <p>{currentWrongAnswers}</p>
                  </div>
                  <div className="summaryCard">
                    <Icons.PiEmpty />
                    <p>{currentUnansweredQuestions}</p>
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
                      <Icons.IoHourglassOutline />
                    </div>
                    <div className="textWrapper">
                      <h3>{`${Math.floor(totalTimeSpent / 60)}m ${
                        totalTimeSpent % 60
                      }s`}</h3>
                      <p>Total time spent on exam</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setQuizFinished(false);
                  setReviewMode(true);
                  setCurrentQuestionIndex(0); // Jump to the first question
                  setTestModeOn(true);
                }}
              >
                <Icons.LuClipboardList /> Check all questions and answers
              </button>
            </div>
            <div className="lower-container">
              <button
                className="start-quiz-button practice"
                onClick={() => {
                  handleResetQuiz();
                  navigateTo("practice");
                }}
              >
                <Icons.IoEnterOutline size={20} />
                <p>Back to Practice</p>
              </button>

              <button
                className="start-quiz-button"
                onClick={() => {
                  handleResetQuiz();
                  navigateTo("exam-configuration");
                }}
              >
                <Icons.IoEnterOutline size={20} />
                <p>Take another test</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (quizConfiguration) {
    return (
      <div className="quiz-settings-screen">
        <div className="quiz-settings-topbar">
          <Icons.HiMiniArrowLongLeft
            className="back-to-quiz-dashboard-button circlehover"
            onClick={() => navigateTo("practice")}
          />
        </div>
        <MessagePopup />
        <div className="filter-section">
          <h2>Filter Questions</h2>
          <div className="select-subject-subtopic-container">
            <div className="subject-dropdown">
              <p className="label">Subjects</p>
              <select
                id="subjects"
                name="subjects"
                onChange={(e) => {
                  handleSubjectChange(e); // Handle subject change
                  setSelectedSubtopic("All"); // Reset the "All" subtopic
                }}
                defaultValue={defaultConfig.topics[0]}
              >
                {uniqueTopics.map((topic, index) => (
                  <option key={index} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            <div className="subtopic-dropdown">
              <p className="label">Subtopics</p>
              <select
                id="subtopics"
                name="subtopics"
                onChange={(e) => setSelectedSubtopic(e.target.value)}
                value={selectedSubtopic}
              >
                <option value="All">All</option>
                {uniqueSubtopics.map((subtopic, index) => (
                  <option key={index} value={subtopic}>
                    {subtopic}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="action-buttons">
            <button
              onClick={toggleSeenStatus}
              className={`filter-button ${
                quizConfig.questionSeenBefore ? "checked" : ""
              }`}
            >
              {quizConfig.questionSeenBefore ? (
                <Icons.FaRegEyeSlash size={18} />
              ) : (
                <Icons.FaRegEye size={18} />
              )}
              <p>I've never seen</p>
            </button>

            <button
              onClick={toggleAnsweredWrongStatus}
              className={`filter-button ${
                quizConfig.questionAnsweredWrong ? "checked" : ""
              }`}
            >
              {quizConfig.questionAnsweredWrong ? (
                <Icons.BsExclamationCircle size={18} />
              ) : (
                <Icons.BsExclamationCircle size={18} />
              )}
              <p>I answered wrong</p>
            </button>
          </div>
          <div className="question-difficulties">
            <p className="label">Difficulty levels of questions</p>
            <div className="difficulties-options">
              <button
                onClick={toggleAllDifficulties}
                className={`filter-button all-button ${
                  isAllDifficultiesSelected ? "checked" : ""
                }`}
              >
                All
              </button>
              <div className="difficulty-levels-block">
                <button
                  onClick={() => toggleDifficulty("easy")}
                  className={`filter-button ${
                    quizConfig.difficultyLevels.includes("easy")
                      ? "checked"
                      : ""
                  }`}
                >
                  Easy
                </button>
                <button
                  onClick={() => toggleDifficulty("medium")}
                  className={`filter-button ${
                    quizConfig.difficultyLevels.includes("medium")
                      ? "checked"
                      : ""
                  }`}
                >
                  Medium
                </button>
                <button
                  onClick={() => toggleDifficulty("hard")}
                  className={`filter-button ${
                    quizConfig.difficultyLevels.includes("hard")
                      ? "checked"
                      : ""
                  }`}
                >
                  Hard
                </button>
              </div>
            </div>
          </div>
          <div className="question-limit">
            <p>Limit the questions to</p>
            <input
              type="number"
              id="limit1"
              className="question-limit-input"
              value={quizConfig.questionCount}
              onChange={handleQuestionLimitChange}
              onBlur={handleQuestionLimitBlur}
            />
            <p className="possible-questions-number"> out of </p>
            <p>{filteredQuestionCount}</p>
          </div>
          <div className="question-order">
            <button
              onClick={toggleRandomQuestionOrderStatus}
              className={`filter-button ${
                quizConfig.questionRandomOrder ? "checked" : ""
              }`}
            >
              {quizConfig.questionRandomOrder ? (
                <Icons.LiaRandomSolid size={20} />
              ) : (
                <Icons.IoIosArrowRoundForward size={20} />
              )}
              <p>
                {quizConfig.questionRandomOrder
                  ? "Randomize Question Order"
                  : "Show Questions in Order"}
              </p>
            </button>
          </div>

          <div className="clear-filters">
            <button
              id="clear-filters"
              onClick={restoreFilters}
              className="filter-button"
            >
              <Icons.TbRestore size={18} />
              <p>Restore filters</p>
            </button>
          </div>
        </div>
        <div className="info-section">
          <div className="info-settings-section">
            <h2>Other configurations</h2>
            <p className="label">Display correct answers and explanations</p>
            <div className="switch-group-container">
              {settingsSwitchGroupOptions.map((option) => (
                <div key={option.id} className="switch-box">
                  <div className="switch-container">
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={quizConfig.answerRevealMode === option.value}
                        onChange={() =>
                          handleAnswerRevealModeChange(option.value)
                        }
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <span className="switch-label">{option.label}</span>
                </div>
              ))}
            </div>
            <div className="select-switch-container">
              <div className="switch-box">
                <div className="switch-container">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={quizConfig.automaticQuestionSubmit}
                      onChange={toggleAutomaticQuestionSubmit}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
                <span className="switch-label">
                  Automatically submit my answer on select
                </span>
              </div>
            </div>
            <div className="timer-switch-container">
              <div className="switch-box">
                <div className="switch-container">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={quizConfig.timerMode}
                      onChange={toggleTimerMode} // Only the toggle function is needed
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
                <span className="switch-label">Timer mode</span>
              </div>

              {/* If quizConfig.timerMode is true, it should be visible by default */}
              {quizConfig.timerMode && (
                <div className="time-limit">
                  <p>Time Limit</p>
                  <input
                    type="number"
                    id="limit2"
                    className="question-limit-input"
                    value={quizConfig.timeLimit}
                    onChange={handleTimeLimitChange}
                    onBlur={handleTimeLimitBlur}
                  />
                  <p>min</p>
                </div>
              )}
            </div>{" "}
            {/*  */}
            {/* <pre>{JSON.stringify(quizConfig, null, 2)}</pre>*/}
          </div>
          <div className="start-button-section">
            <button className="start-quiz-button" onClick={handleStartQuiz}>
              <Icons.IoEnterOutline size={20} />
              <p>Start Practising</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (currentQuestions.length === 0) {
    return <div>Loading questions...</div>;
  }
  const hasCommentsForCurrentQuestion =
    usersCommentsBank[currentQuestions[currentQuestionIndex].id] !== undefined;

  const hasNoteForCurrentQuestion =
    userNotesBank[currentQuestions[currentQuestionIndex].id];

  const CommentIcon = hasCommentsForCurrentQuestion
    ? Icons.ImBubble
    : Icons.SlBubble;

  const NoteIcon = hasNoteForCurrentQuestion
    ? Icons.FaNoteSticky
    : Icons.CiStickyNote;

  const hasPrivateCollectionForCurrentQuestion =
    userPrivateCollectionsBank.some((collection) =>
      collection.items.includes(currentQuestion.id)
    );

  const CollectionIcon = hasPrivateCollectionForCurrentQuestion
    ? Icons.GoBookmarkFill
    : Icons.GoBookmark;

  return (
    <div className="quiz-app-container">
      <QuestionList
        isVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
        currentQuestions={currentQuestions}
        userAnswers={userAnswers}
        currentQuestionIndex={currentQuestionIndex}
        navigateToQuestion={navigateToQuestion}
        quizConfig={quizConfig} // Only pass the necessary props
        reviewMode={reviewMode} // Pass the reviewMode state here
      />
      {activePopup && (
        <ActionConfirmationPopup
          show={true}
          onOverlayClick={() => {
            setActivePopup(null);
            if (eternalTimerRef.current) {
              eternalTimerRef.current.resumeTimer();
            }
          }}
          question={popupsConfig[activePopup].question}
          buttons={popupsConfig[activePopup].buttons}
        />
      )}
      <div className="quiz-top-bar">
        <Icons.HiOutlineXMark
          className="x-exam-finnish-button"
          onClick={() => {
            if (reviewMode) {
              setQuizFinished(true);
              setReviewMode(false);
              setTestModeOn(false);
            } else {
              setActivePopup("finishTest"); // Activate popup
              if (eternalTimerRef.current) {
                eternalTimerRef.current.pauseTimer();
              }
            }
          }}
          size={24}
        />
        <button onClick={toggleSidebar} className="toggle-button">
          <Icons.CiBoxList />
        </button>
      </div>
      <div className="progress-bar">
        {!reviewMode && quizConfig.timerMode && (
          <EternalTimer
            ref={eternalTimerRef}
            eternalInitialTime={eternalInitialTime}
            onTimeUpdate={handleTimeUpdate}
            onStop={handleStopEternalTimer}
            onTimeOut={handleTimeRanOut}
          />
        )}

        <progress value={progressPercentage} max="100"></progress>

        <div className="progress-numbers">
          <p>
            {answeredQuestionsCount} / {currentQuestions.length}
          </p>
        </div>
      </div>
      <div className="question-and-answer-container">
        <h2>{currentQuestion.question}</h2>
        {currentQuestion.equation && (
          <div className="math-equation">
            <MathComponent tex={currentQuestion.equation} />
          </div>
        )}
        {currentQuestion.image && (
          <ImageModal imageUrl={currentQuestion.image} />
        )}
        <div className="answers-container">
          {currentQuestion.options.map((option, index) => {
            const isCorrect = feedback && option === feedback.correctAnswer;
            const isSelected = selectedAnswer === option;
            const isWrong = feedback && isSelected && !isCorrect;

            return (
              <div
                className="answer-options"
                key={index}
                style={{
                  cursor:
                    isAnswered ||
                    userAnswers.some(
                      (a) =>
                        a.questionId ===
                        currentQuestions[currentQuestionIndex].id
                    ) ||
                    reviewMode ||
                    quizConfig.answerRevealMode === "right_away" // Disable clicking in right_away mode
                      ? "not-allowed"
                      : "pointer",
                  backgroundColor: reviewMode
                    ? userAnswers.some(
                        (a) =>
                          a.questionId ===
                          currentQuestions[currentQuestionIndex].id
                      ) // Check if the user has answered the question
                      ? option === currentQuestion.answer
                        ? "var(--answer-correct)"
                        : isSelected
                        ? "var(--answer-wrong)"
                        : "var(--answer-button-bg)"
                      : "var(--answer-button-bg)" // If not answered, do not show anything
                    : quizConfig.answerRevealMode === "after_test"
                    ? isSelected
                      ? "var(--answer-button-checked-bg)"
                      : "var(--answer-button-bg)"
                    : quizConfig.answerRevealMode === "right_away"
                    ? option === currentQuestion.answer
                      ? "var(--answer-correct)" // Immediately show the correct answer
                      : "var(--answer-button-bg)"
                    : isCorrect
                    ? "var(--answer-correct)"
                    : isWrong
                    ? "var(--answer-wrong)"
                    : isSelected && !isAnswered
                    ? "var(--answer-button-checked-bg)"
                    : "var(--answer-button-bg)",
                  borderRadius: "5px",
                  transition: "background-color 0.3s, border-color 0.3s",
                }}
                onClick={() => {
                  if (
                    !isAnswered &&
                    !userAnswers.some(
                      (a) => a.questionId === currentQuestion.id
                    ) &&
                    !reviewMode &&
                    quizConfig.answerRevealMode !== "right_away" // Only allow clicking if not in right_away mode
                  ) {
                    setSelectedAnswer(option);
                    if (quizConfig.automaticQuestionSubmit) {
                      handleAnswerSubmit(option);
                    }
                  }
                }}
              >
                {currentQuestion.equation ? (
                  <MathComponent tex={option} />
                ) : (
                  option
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="floating-bar">
        <div className="left-icons">
          {isMobile ? (
            <Icons.HiDotsVertical
              className="icon"
              size={20} // Adjust the size if needed
              style={{
                color:
                  hasPrivateCollectionForCurrentQuestion ||
                  hasNoteForCurrentQuestion
                    ? "var(--button-checked-bg)"
                    : "black",
                strokeWidth: 0.1,
                boxShadow:
                  hasPrivateCollectionForCurrentQuestion ||
                  hasNoteForCurrentQuestion
                    ? "inset 2px 2px 8px rgba(0, 0, 0, 0.2)"
                    : "none",
                transition:
                  "color 0.4s ease, box-shadow 0.7s ease, background-color 0.3s ease",
              }}
              onClick={() => {
                setIconPopupboxOpen((prev) => !prev); // Toggle the second state as well
              }}
            />
          ) : (
            <>
              <CollectionIcon
                className="icon"
                size={18}
                style={{
                  color: hasPrivateCollectionForCurrentQuestion
                    ? "var(--button-checked-bg)"
                    : "black",
                  strokeWidth: 0.1,
                  boxShadow: hasPrivateCollectionForCurrentQuestion
                    ? "inset 2px 2px 8px rgba(0, 0, 0, 0.2)"
                    : "none",
                  transition:
                    "color 0.4s ease, box-shadow 0.7s ease, background-color 0.3s ease",
                }}
                onClick={() => setPrivateCollectionOpen(true)}
              />
              <PrivateCollection
                isOpen={isPrivateCollectionOpen}
                onClose={() => setPrivateCollectionOpen(false)}
                questionId={currentQuestions[currentQuestionIndex].id}
              />

              <NoteIcon
                className="icon"
                size={20}
                style={{
                  color: hasNoteForCurrentQuestion
                    ? "var(--button-checked-bg)"
                    : "black",
                  strokeWidth: 0.3,
                  boxShadow: hasNoteForCurrentQuestion
                    ? "inset 2px 2px 8px rgba(0, 0, 0, 0.2)"
                    : "none",
                  transition:
                    "color 0.4s ease, box-shadow 0.7s ease, background-color 0.3s ease",
                }}
                onClick={() => setPrivateNoteOpen(true)}
              />
              <PrivateNote
                isOpen={isPrivateNoteOpen}
                onClose={() => setPrivateNoteOpen(false)}
                questionId={currentQuestions[currentQuestionIndex].id}
                foundIds={Object.keys(userNotesBank)} // Keys of existing notes
              />
              <CommentIcon
                className="icon"
                size={18}
                style={{
                  strokeWidth: 0.5,
                  color: hasCommentsForCurrentQuestion
                    ? "var(--button-checked-bg)"
                    : "black",
                  boxShadow: hasCommentsForCurrentQuestion
                    ? "inset 2px 2px 8px rgba(0, 0, 0, 0.2)"
                    : "none",
                  transition:
                    "color 0.4s ease, box-shadow 0.7s ease, background-color 0.3s ease",
                }}
                onClick={() => setCommentSectionOpen(true)}
              />
              <CommentSection
                isOpen={isCommentSectionOpen}
                onClose={() => setCommentSectionOpen(false)}
                questionId={currentQuestions[currentQuestionIndex].id} // Pass the questionId here
                questionComments={questionComments}
                setQuestionComments={setQuestionComments}
              />
            </>
          )}

          {/* Popup content */}
          {isMobile && (
            <div
              className={`left-icons-popup-box ${
                isIconPopupboxOpen ? "open" : ""
              }`}
            >
              <div
                className={`left-icons-popup-box-modal-overlay ${
                  isIconPopupboxOpen ? "open" : ""
                }`}
                onClick={() => {
                  setIconPopupboxOpen(false);
                }}
              ></div>
              <div className="popup-item">
                <CollectionIcon
                  className="icon"
                  size={18}
                  style={{
                    color: hasPrivateCollectionForCurrentQuestion
                      ? "var(--button-checked-bg)"
                      : "black",
                    strokeWidth: 0.1,
                    boxShadow: hasPrivateCollectionForCurrentQuestion
                      ? "inset 2px 2px 8px rgba(0, 0, 0, 0.2)"
                      : "none",
                    transition: "color 0.4s ease, box-shadow 0.7s ease",
                  }}
                  onClick={() => setPrivateCollectionOpen(true)}
                />
                <PrivateCollection
                  isOpen={isPrivateCollectionOpen}
                  onClose={() => setPrivateCollectionOpen(false)}
                  questionId={currentQuestions[currentQuestionIndex].id}
                />
              </div>
              <div className="popup-item">
                <NoteIcon
                  className="icon"
                  size={20}
                  style={{
                    color: hasNoteForCurrentQuestion
                      ? "var(--button-checked-bg)"
                      : "black",
                    strokeWidth: 0.3,
                    boxShadow: hasNoteForCurrentQuestion
                      ? "inset 2px 2px 8px rgba(0, 0, 0, 0.2)"
                      : "none",
                    transition:
                      "color 0.4s ease, box-shadow 0.7s ease, background-color 0.7s ease",
                  }}
                  onClick={() => setPrivateNoteOpen(true)}
                />
                <PrivateNote
                  isOpen={isPrivateNoteOpen}
                  onClose={() => setPrivateNoteOpen(false)}
                  questionId={currentQuestions[currentQuestionIndex].id}
                  foundIds={Object.keys(userNotesBank)} // Keys of existing notes
                />
              </div>
              <div className="popup-item">
                <Icons.CiChat1
                  className="icon"
                  size={18}
                  style={{ strokeWidth: 0.5 }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="middle-section">
          <Icons.IoIosArrowBack
            className="arrow-icon "
            onClick={() =>
              isAnswered ? handlePrevQuestion() : handlePrevQuestionArrow()
            }
            disabled={isFirstQuestion}
            size={24}
          />

          <span className="number">
            {currentQuestionIndex + 1} / {currentQuestions.length}
          </span>
          <Icons.IoIosArrowForward
            className="arrow-icon"
            onClick={() =>
              isAnswered ? handleNextQuestion() : handleNextQuestionArrow()
            }
            disabled={isLastQuestion}
            size={24}
          />
        </div>

        <div className="right-section">
          {(reviewMode || // Always visible in reviewMode
            quizConfig.answerRevealMode === "right_away" || // Always visible in right_away mode
            (quizConfig.answerRevealMode !== "after_test" &&
              userAnswers.some(
                (answer) =>
                  answer.questionId ===
                  currentQuestions[currentQuestionIndex].id
              ))) && (
            <div className="explanation-button-container">
              <button
                className="explanation-button"
                onClick={() => setModalOpen(true)}
              >
                <Icons.BsPatchQuestion size={isMobile ? 20 : 15} />
                {!isMobile && "Explanation"}
              </button>

              <ExplanationModal
                isOpen={isModalOpen}
                content={currentQuestions[currentQuestionIndex].explanation}
                onClose={() => setModalOpen(false)}
              />
            </div>
          )}

          <button
            className="action-button"
            onClick={() => {
              if (!reviewMode) {
                if (
                  quizConfig.answerRevealMode === "right_away" ||
                  isAnswered
                ) {
                  if (isLastQuestion) {
                    handleFinishQuiz();
                  } else {
                    handleNextQuestion();
                  }
                } else {
                  handleAnswerSubmit(selectedAnswer);
                }
              }
            }}
            disabled={
              reviewMode ||
              (quizConfig.answerRevealMode !== "right_away" &&
                isSubmitButtonDisabled) // Only disable if not in right_away mode
            }
          >
            {isMobile ? (
              reviewMode ? (
                <Icons.IoEnterOutline />
              ) : quizConfig.answerRevealMode === "right_away" || isAnswered ? (
                isLastQuestion ? (
                  <Icons.FaFlagCheckered size={20} />
                ) : (
                  <Icons.FaArrowRightLong size={22} />
                )
              ) : userAnswers.some(
                  (answer) =>
                    answer.questionId ===
                    currentQuestions[currentQuestionIndex].id
                ) ? (
                <Icons.FaArrowRightLong size={22} />
              ) : (
                "S"
              )
            ) : reviewMode ? (
              "Submit Answer"
            ) : quizConfig.answerRevealMode === "right_away" || isAnswered ? (
              isLastQuestion ? (
                "Finish"
              ) : (
                "Next"
              )
            ) : userAnswers.some(
                (answer) =>
                  answer.questionId ===
                  currentQuestions[currentQuestionIndex].id
              ) ? (
              "Next"
            ) : (
              "Submit Answer"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
