import { useEffect, useState } from "react";
import Assessment from "../assessment.json";
import Option from "./Option";
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from "../actions/action";
import store from "../store";

const SingleQuestion = () => {
  const [score, setScore] = useState(0);
  const dispatch = useDispatch();
  const assessment = useSelector((state) => state.assessment);
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
    // console.log(store.getState());
    console.log(assessment);
    console.log(score);
  }, [assessment]);

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
                handleSelectAnswer(currentQuestion.question, option.name)
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
      <div>{assessment.inProgress.toString()}</div>
      <div>
        {assessment?.selectedAnswers?.map((ans) => (
          <>
            <li>{ans.answer}</li>
          </>
        ))}
      </div>
      <div>{score}</div>
      {/* Will have to figure this out */}
      <div>
        {assessment?.selectedAnswers?.map((selectedAnswer, index) => {
          if (
            Assessment.questions[index].question ===
              selectedAnswer.questionId &&
            Assessment.questions[index].answer === selectedAnswer.answer
          ) {
            setScore(score + 1);
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default SingleQuestion;
