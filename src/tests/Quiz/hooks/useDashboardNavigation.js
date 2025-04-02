// useDashboardNavigation.js
import { useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useDashboardNavigation = (setters) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    setPracticeDashboard,
    setQuizConfiguration,
    setExamsDashboard,
    setPrivateNoteDasboard,
    setPrivateCollectionDashboard,
    setPublicCommentDashboard,
    setQuizStarted,
    setTestModeOn,
  } = setters;

  const resetAllDashboards = useCallback(() => {
    setPracticeDashboard(false);
    setExamsDashboard(false);
    setPrivateNoteDasboard(false);
    setPrivateCollectionDashboard(false);
    setPublicCommentDashboard(false);
    setQuizStarted(false);
    setQuizConfiguration(false);
  }, [
    setExamsDashboard,
    setPracticeDashboard,
    setPrivateCollectionDashboard,
    setPrivateNoteDasboard,
    setPublicCommentDashboard,
    setQuizConfiguration,
    setQuizStarted,
  ]);

  const navigateTo = useCallback(
    (dashboard, options = {}) => {
      const {
        questionIds = null,
        config = null,
        setQuestionsById = null,
      } = options;

      resetAllDashboards();

      switch (dashboard) {
        case "practice":
          setPracticeDashboard(true);
          navigate("/practice");
          break;
        case "exams":
          setExamsDashboard(true);
          navigate("/practice/exams");
          break;
        case "exam-configuration":
          setQuizConfiguration(true);
          setTestModeOn(false);
          navigate("/practice/exam-configuration");
          break;
        case "notes":
          setPrivateNoteDasboard(true);
          navigate(`/practice/notes${options.id ? `/${options.id}` : ""}`);
          break;
        case "collections":
          setPrivateCollectionDashboard(true);
          navigate("/practice/collections");
          break;
        case "comments":
          setPublicCommentDashboard(true);
          navigate("/practice/comments");
          break;
        case "exam":
          setQuizStarted(true);
          setTestModeOn(true);
          if (questionIds && setQuestionsById) {
            setQuestionsById(questionIds, config);
          }
          navigate("/practice/exam");
          break;
        default:
          setPracticeDashboard(true);
          navigate("/practice");
      }
    },
    [
      navigate,
      resetAllDashboards,
      setExamsDashboard,
      setPracticeDashboard,
      setPrivateCollectionDashboard,
      setPrivateNoteDasboard,
      setPublicCommentDashboard,
      setQuizConfiguration,
      setQuizStarted,
      setTestModeOn,
    ]
  );

  // Kezeljük a böngésző előzmények változását
  useEffect(() => {
    const path = location.pathname;
    resetAllDashboards();

    switch (path) {
      case "/practice":
        setPracticeDashboard(true);
        break;
      case "/practice/exam-configuration":
        setQuizConfiguration(true);
        setTestModeOn(false);
        break;
      case "/practice/exams":
        setExamsDashboard(true);
        break;
      case "/practice/notes":
        setPrivateNoteDasboard(true);
        break;
      case "/practice/collections":
        setPrivateCollectionDashboard(true);
        break;
      case "/practice/comments":
        setPublicCommentDashboard(true);
        break;
      case "/practice/exam":
        setQuizStarted(true);
        setTestModeOn(true);
        break;
      default:
        setPracticeDashboard(true);
    }
  }, [
    location,
    resetAllDashboards,
    setExamsDashboard,
    setPracticeDashboard,
    setPrivateCollectionDashboard,
    setPrivateNoteDasboard,
    setPublicCommentDashboard,
    setQuizConfiguration,
    setQuizStarted,
    setTestModeOn,
    setters,
  ]);

  return { navigateTo };
};

export default useDashboardNavigation;
