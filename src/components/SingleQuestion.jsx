import { useEffect, useState } from "react";
import Assessment from "../assessment.json";
import Option from "./Option";
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from "../actions/action";
import "../styles/SingleQuestion.scss";
import Button from "./Button";

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

  useEffect(() => {
    let newScore = 0;

    assessment?.selectedAnswers?.forEach((selectedAnswer, index) => {
      if (
        Assessment.questions[index].question === selectedAnswer.questionId &&
        Assessment.questions[index].answer === selectedAnswer.answer
      ) {
        newScore += 1;
      }
    });

    setScore(newScore);
  }, [currentQuestionIndex]);

  return (
    <div className="single_question">
      <div className="question_box" key={currentQuestion.question}>
        <h2>
          {" "}
          Q{currentQuestionIndex + 1}. {currentQuestion.question}
        </h2>
        <div className="options">
          {currentQuestion.options.map((option) => (
            <Option
              onClick={() => {
                handleSelectAnswer(currentQuestion.question, option.name);
                console.log("Hello");
              }}
              key={option.name}
              optionText={option.name}
              checked={assessment?.selectedAnswers?.some(
                (selectedAnswer) =>
                  selectedAnswer.questionId === currentQuestion.question &&
                  selectedAnswer.answer === option.name
              )}
            />
          ))}
        </div>
      </div>
      {currentQuestionIndex + 1} / {Assessment.questions.length}
      <div className="btns">
        <Button
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
          ButtonText={"Prev"}
          className="Btn-disabled"
        />
        <Button
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === Assessment.questions.length - 1}
          ButtonText={"Next"}
          className="Btn-disabled"
        />
      </div>
      {/* <div>{assessment.inProgress.toString()}</div> */}
      {/* <div>
        {assessment?.selectedAnswers?.map((ans) => (
          <>
            <li>{ans.answer}</li>
          </>
        ))}
      </div> */}
      {/* Will have to figure this out --- DONE 🔥 */}
      <h2>{score}</h2>
    </div>
  );
};

export default SingleQuestion;
