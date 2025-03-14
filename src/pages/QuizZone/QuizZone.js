import React from "react";
import Quiz from "../../tests/Quiz/QuizApp";

const QuizZone = ({ setTestModeOn }) => {
  return (
    <div>
      <Quiz setTestModeOn={setTestModeOn} />
    </div>
  );
};

export default QuizZone;
