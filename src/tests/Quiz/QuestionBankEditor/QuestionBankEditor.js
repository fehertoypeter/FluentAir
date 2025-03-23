import React, { useState } from "react";
import { mainTestBank } from "../../../data/hajduflyTestbank"; // Importáljuk a kérdésbankot
import { Icons } from "../../../assets/icons/icons";
import ActionConfirmationPopup from "../../../components/ActionConfirmationModal/ActionConfirmationModal";
import "./QuestionBankEditor.css";
import "./QuestionBankEditorSection.css";

const QuestionEditor = ({ question, onSave, onCancel }) => {
  const [editedQuestion, setEditedQuestion] = useState(question);
  const [activePopup, setActivePopup] = useState(null); // Explanation törlés popup állapot
  const [activeOptionPopup, setActiveOptionPopup] = useState(null); // Option törlés popup állapot

  const handleOptionChange = (index, value) => {
    const newOptions = [...editedQuestion.options];
    newOptions[index] = value;
    setEditedQuestion({ ...editedQuestion, options: newOptions });
  };

  const handleCorrectAnswerChange = (index) => {
    setEditedQuestion({ ...editedQuestion, correctAnswer: index });
  };

  const handleExplanationChange = (index, field, value) => {
    const newExplanation = [...editedQuestion.explanation];
    newExplanation[index][field] = value;
    setEditedQuestion({ ...editedQuestion, explanation: newExplanation });
  };

  const addExplanationPart = () => {
    const newExplanation = [
      ...editedQuestion.explanation,
      { type: "text", content: "" },
    ];
    setEditedQuestion({ ...editedQuestion, explanation: newExplanation });
  };

  const deleteExplanationPart = (index) => {
    const newExplanation = editedQuestion.explanation.filter(
      (_, i) => i !== index
    );
    setEditedQuestion({ ...editedQuestion, explanation: newExplanation });
    setActivePopup(null); // Popup bezárása
  };

  const deleteOption = (index) => {
    const newOptions = editedQuestion.options.filter((_, i) => i !== index);
    setEditedQuestion({ ...editedQuestion, options: newOptions });
    setActiveOptionPopup(null); // Popup bezárása
  };

  const autoResize = (textarea) => {
    textarea.style.height = "auto"; // Először visszaállítjuk az alapmagasságot
    textarea.style.height = textarea.scrollHeight + "px"; // Beállítjuk a magasságot
  };

  const popupsConfig = {
    deleteExplanation: {
      question: "Do you want to delete this explanation section?",
      buttons: [
        {
          text: "Yes, delete it",
          onClick: () => deleteExplanationPart(activePopup),
          icon: <Icons.HiOutlineTrash size={18} />,
        },
        {
          text: "No, keep it",
          onClick: () => setActivePopup(null),
          icon: <Icons.HiOutlineXMark size={20} />,
        },
      ],
    },
    deleteOption: {
      question: "Do you want to delete this option?",
      buttons: [
        {
          text: "Yes, delete it",
          onClick: () => deleteOption(activeOptionPopup),
          icon: <Icons.HiOutlineTrash size={18} />,
        },
        {
          text: "No, keep it",
          onClick: () => setActiveOptionPopup(null),
          icon: <Icons.HiOutlineXMark size={20} />,
        },
      ],
    },
  };

  return (
    <div className="editor-section">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(editedQuestion);
        }}
      >
        <div className="editor-question-section">
          <div className="question-edit-top-bar">
            <h3>Enter Question Details</h3>
            <Icons.HiOutlineXMark
              className="x-exam-finnish-button"
              onClick={onCancel}
              size={24}
            />
          </div>
          <div className="enter-question-sections">
            <div className="quetion-editor-left-section">
              <div className="editor-head-section">
                <label>
                  <p>Topic:</p>
                  <select
                    value={editedQuestion.topic}
                    onChange={(e) =>
                      setEditedQuestion({
                        ...editedQuestion,
                        topic: e.target.value,
                      })
                    }
                  >
                    <option value="Topic1">Topic1</option>
                    <option value="Topic2">Topic2</option>
                    {/* További témák */}
                  </select>
                </label>
                <label>
                  <p>Subtopic:</p>
                  <select
                    value={editedQuestion.subtopic}
                    onChange={(e) =>
                      setEditedQuestion({
                        ...editedQuestion,
                        subtopic: e.target.value,
                      })
                    }
                  >
                    <option value="Subtopic1">Subtopic1</option>
                    <option value="Subtopic2">Subtopic2</option>
                    {/* További altémák */}
                  </select>
                </label>
              </div>
              <div className="difficulty-row">
                <label>
                  <p>ID:</p>
                  <input type="text" value={editedQuestion.id} disabled />
                </label>
                <label>
                  <p>Difficulty:</p>
                  <select
                    value={editedQuestion.difficulty}
                    onChange={(e) =>
                      setEditedQuestion({
                        ...editedQuestion,
                        difficulty: e.target.value,
                      })
                    }
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </label>
              </div>
              <label className="question-input">
                <p>Question:</p>
                <textarea
                  value={editedQuestion.question}
                  onChange={(e) => {
                    setEditedQuestion({
                      ...editedQuestion,
                      question: e.target.value,
                    });
                    autoResize(e.target); // Automatikus magasságfrissítés
                  }}
                  ref={(el) => el && autoResize(el)} // Meglévő elemek magasságának frissítése
                  className="auto-resize-textarea"
                />
              </label>

              <div className="editor-option-section">
                {editedQuestion.options.map((option, index) => (
                  <label key={index}>
                    <div className="option-section">
                      <p>Option {index + 1}:</p>
                      <div className="option-section-input">
                        <input
                          type="text"
                          value={option}
                          onChange={(e) =>
                            handleOptionChange(index, e.target.value)
                          }
                        />
                        <input
                          type="checkbox"
                          className="correct-answer-checkbox"
                          checked={editedQuestion.correctAnswer === index}
                          onChange={() => handleCorrectAnswerChange(index)}
                        />

                        <Icons.IoMdCloseCircleOutline
                          size={20}
                          onClick={() => setActiveOptionPopup(index)}
                          className="delete-option-btn"
                        />
                      </div>
                    </div>
                  </label>
                ))}
                <button className="add-options-btn">
                  <Icons.IoIosAddCircleOutline size={20} /> Add Options
                </button>
              </div>
            </div>
            <div className="quetion-editor-right-section">
              <label>
                Explanation:
                <div className="explanation-editor-container">
                  {editedQuestion.explanation.map((part, index) => (
                    <div key={index} className="explanation-part">
                      <select
                        value={part.type}
                        onChange={(e) =>
                          handleExplanationChange(index, "type", e.target.value)
                        }
                      >
                        <option value="text">Text</option>
                        <option value="math">Math</option>
                        <option value="image">Image</option>
                      </select>
                      <textarea
                        value={part.content}
                        onChange={(e) => {
                          handleExplanationChange(
                            index,
                            "content",
                            e.target.value
                          );
                          autoResize(e.target); // Automatikus magasságfrissítés
                        }}
                        ref={(el) => el && autoResize(el)} // Meglévő elemek magasságának frissítése
                        className="auto-resize-textarea"
                      />

                      <Icons.IoMdCloseCircleOutline
                        size={20}
                        onClick={() => setActivePopup(index)}
                        className="delete-explanation-btn"
                      />
                    </div>
                  ))}
                </div>
              </label>
              <button
                className="add-explanation-section-btn"
                onClick={addExplanationPart}
              >
                <Icons.IoIosAddCircleOutline size={20} />
                Add Explanation Section
              </button>
            </div>
          </div>{" "}
        </div>
      </form>
      <div className="save-button-container">
        <button className="save-question-edit-btn" type="submit">
          Save Question
        </button>
      </div>

      {activePopup !== null && (
        <ActionConfirmationPopup
          show={true}
          onOverlayClick={() => setActivePopup(null)}
          question={popupsConfig.deleteExplanation.question}
          buttons={popupsConfig.deleteExplanation.buttons}
        />
      )}

      {activeOptionPopup !== null && (
        <ActionConfirmationPopup
          show={true}
          onOverlayClick={() => setActiveOptionPopup(null)}
          question={popupsConfig.deleteOption.question}
          buttons={popupsConfig.deleteOption.buttons}
        />
      )}
    </div>
  );
};

const QuestionBankEditor = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSubtopic, setSelectedSubtopic] = useState("");
  const [editingQuestion, setEditingQuestion] = useState(null);

  const handleEditClick = (question) => {
    setEditingQuestion(question);
  };

  const handleSaveEdit = (updatedQuestion) => {
    // Itt lehetne implementálni a kérdés frissítését a mainTestBank-ban
    console.log("Updated Question:", updatedQuestion);
    setEditingQuestion(null);
  };

  const filteredQuestions = mainTestBank
    .filter((topic) => !selectedTopic || topic.topic === selectedTopic)
    .flatMap((topic) =>
      topic.questions.filter(
        (question) =>
          (!selectedSubtopic || question.subtopic === selectedSubtopic) &&
          question.question.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  const topics = [...new Set(mainTestBank.map((topic) => topic.topic))];
  const subtopics = [
    ...new Set(
      mainTestBank
        .filter((topic) => !selectedTopic || topic.topic === selectedTopic)
        .flatMap((topic) =>
          topic.questions.map((question) => question.subtopic)
        )
    ),
  ];

  return (
    <div className="question-bank-editor-container">
      {editingQuestion ? (
        <QuestionEditor
          question={editingQuestion}
          onSave={handleSaveEdit}
          onCancel={() => setEditingQuestion(null)}
        />
      ) : (
        <>
          <h2>Question Bank</h2>
          <div className="question-bank-filter">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
            >
              <option value="">All Topics</option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
            <select
              value={selectedSubtopic}
              onChange={(e) => setSelectedSubtopic(e.target.value)}
            >
              <option value="">All Subtopics</option>
              {subtopics.map((subtopic) => (
                <option key={subtopic} value={subtopic}>
                  {subtopic}
                </option>
              ))}
            </select>
          </div>
          <div className="table-container">
            <div className="table-header">
              <div style={{ width: "10%" }}>ID</div>
              <div style={{ width: "70%" }}>Question</div>
              <div style={{ width: "20%" }}>Actions</div>
            </div>
            <div className="table-body">
              {filteredQuestions.map((question) => (
                <div key={question.id} className="table-row">
                  <div style={{ width: "10%" }}>{question.id}</div>
                  <div style={{ width: "70%" }}>{question.question}</div>
                  <div style={{ width: "20%" }}>
                    <button onClick={() => handleEditClick(question)}>
                      ✏️
                    </button>
                    <button>🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="create-new-question-btn">
            <Icons.IoIosAddCircleOutline size={20} /> Create Question
          </button>
        </>
      )}
    </div>
  );
};

export default QuestionBankEditor;
