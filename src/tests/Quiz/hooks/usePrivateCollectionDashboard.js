import { useState, useCallback } from "react";

const usePrivateCollectionDashboard = (
  mainTestBank,
  userPrivateCollectionsBank
) => {
  const [isCollectionDetailVisible, setIsCollectionDetailVisible] =
    useState(false);
  const [activeCardId, setActiveCollectionCardId] = useState(null);
  const [isCollectionClosing, setIsCollectionClosing] = useState(false);
  const [activeCollection, setActiveCollection] = useState(null);

  const getQuestionById = useCallback(
    (id) => {
      for (const topic of mainTestBank) {
        const question = topic.questions.find((q) => q.id === id);
        if (question) return question;
      }
      return null;
    },
    [mainTestBank]
  );

  const handleCollectionCardClick = useCallback((id) => {
    setIsCollectionDetailVisible(true);
    setTimeout(() => {
      setActiveCollectionCardId(id);
      setIsCollectionClosing(false);
    }, 200);
  }, []);

  const handleCollectionCloseDetails = () => {
    setIsCollectionClosing(true);
    setTimeout(() => {
      setIsCollectionDetailVisible(false);
      setActiveCollectionCardId(null);
      setIsCollectionClosing(false);
    }, 200);
  };

  const activeQuestion = activeCardId ? getQuestionById(activeCardId) : null;

  const getQuestionsByCollection = useCallback(
    (collection) => {
      return collection.items.map((id) => getQuestionById(id)).filter(Boolean);
    },
    [getQuestionById]
  );

  return {
    isCollectionDetailVisible,
    activeCardId,
    isCollectionClosing,
    handleCollectionCardClick,
    handleCollectionCloseDetails,
    activeQuestion,
    activeCollection,
    setActiveCollection,
    getQuestionsByCollection,
  };
};

export default usePrivateCollectionDashboard;
