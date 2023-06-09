import { useState } from "react";
import Assessment from "../assessment.json";
import Option from "./Option";

const SingleQuestion = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const currentQuestion = Assessment.questions[currentQuestionIndex];

  return (
    <div>
      <div key={currentQuestion.question}>
        <h1>{currentQuestion.question}</h1>
        <div style={{ display: "flex", gap: 15 }}>
          {currentQuestion.options.map((option) => (
            <Option key={option.name} optionText={option.name} />
          ))}
        </div>
      </div>

      <div>
        <button
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === Assessment.questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SingleQuestion;
