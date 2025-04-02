import React, { useState } from "react";

const IdReplacer = ({ testBank }) => {
  const [modifiedData, setModifiedData] = useState(null);
  const [copied, setCopied] = useState(false);

  // ID-k cseréje sorozatos számozásra
  const replaceIds = () => {
    let counter = 1;
    const newData = JSON.parse(JSON.stringify(testBank)); // Deep copy

    newData.forEach((topic) => {
      topic.questions.forEach((question) => {
        question.id = `question-${counter}`;
        counter++;
      });
    });

    setModifiedData(newData);
    setCopied(false);
  };

  // Adatok másolása a vágólapra
  const copyToClipboard = () => {
    if (!modifiedData) return;

    navigator.clipboard
      .writeText(JSON.stringify(modifiedData, null, 2))
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>ID Cserélő Eszköz</h2>

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={replaceIds}
          style={{
            padding: "10px 15px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          ID-k cseréje
        </button>

        <button
          onClick={copyToClipboard}
          disabled={!modifiedData}
          style={{
            padding: "10px 15px",
            backgroundColor: modifiedData ? "#2196F3" : "#cccccc",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: modifiedData ? "pointer" : "not-allowed",
          }}
        >
          {copied ? "Másolva!" : "Másolás vágólapra"}
        </button>
      </div>

      {modifiedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Módosított adatok:</h3>
          <div
            style={{
              backgroundColor: "#f5f5f5",
              padding: "15px",
              borderRadius: "4px",
              maxHeight: "300px",
              overflowY: "auto",
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
            }}
          >
            {JSON.stringify(modifiedData, null, 2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default IdReplacer;
