import { useState, useCallback } from "react";

const useNoteDashboard = (mainTestBank, userNotesBank) => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getQuestionById = useCallback(
    (id) => {
      for (const topic of mainTestBank) {
        const question = topic.questions.find((q) => q.id === id);
        if (question) return question;
      }
      return null; // Ha nem található kérdés, null-t adunk vissza
    },
    [mainTestBank]
  );

  const handleCardClick = useCallback((id) => {
    setIsDetailVisible(true);
    setActiveCardId(id);
    setIsClosing(false);
  }, []);

  const handleCloseDetails = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsDetailVisible(false);
      setActiveCardId(null);
      setIsClosing(false);
    }, 200);
  };

  const getFilteredNotes = useCallback(() => {
    return Object.entries(userNotesBank).filter(([id, note, subtopic]) => {
      const question = getQuestionById(id);
      if (!question) return false; // Ha nincs kérdés, kihagyjuk
      return (
        (note && note.toLowerCase().includes(searchTerm.toLowerCase())) || // Ellenőrizzük, hogy a note nem undefined
        (question.id &&
          question.id.toLowerCase().includes(searchTerm.toLowerCase())) || // Ellenőrizzük, hogy az id nem undefined
        (question.subtopic &&
          question.subtopic.toLowerCase().includes(searchTerm.toLowerCase())) // Ellenőrizzük, hogy a topic nem undefined
      );
    });
  }, [userNotesBank, searchTerm, getQuestionById]);

  const activeQuestion = activeCardId ? getQuestionById(activeCardId) : null;
  const activeNote = activeCardId ? userNotesBank[activeCardId] : null;

  return {
    isDetailVisible,
    activeCardId,
    isClosing,
    searchTerm,
    setSearchTerm,
    handleCardClick,
    handleCloseDetails,
    getQuestionById,
    filteredNotes: getFilteredNotes(),
    activeQuestion,
    activeNote,
  };
};

export default useNoteDashboard;
