import { useEffect, useState } from "react";
import Assessment from "../assessment.json";
import Option from "./Option";
import { useDispatch } from "react-redux";
import { selectAnswer } from "../actions/action";
import store from "../store";

const SingleQuestion = () => {
  const dispatch = useDispatch();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const currentQuestion = Assessment.questions[currentQuestionIndex];

  const handleSelectAnswer = (questionId, answer) => {
    dispatch(selectAnswer(questionId, answer));
  };

  useEffect(() => {
    console.log(store.getState());
  }, []);

  return (
    <div>
      <div key={currentQuestion.question}>
        <h1>
          {" "}
          Q{currentQuestionIndex + 1}. {currentQuestion.question}
        </h1>
        <div style={{ display: "flex", gap: 15 }}>
          {currentQuestion.options.map((option) => (
            <Option
              onChange={() =>
                handleSelectAnswer(currentQuestion.question, option)
              }
              key={option.name}
              optionText={option.name}
            />
          ))}
        </div>
      </div>
      {currentQuestionIndex + 1} / {Assessment.questions.length}
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
