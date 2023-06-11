import { useEffect, useState } from "react";
import Assessment from "../assessment.json";
import { useSelector, useDispatch } from "react-redux";
import Confetti from "react-confetti";
import "charts.css";
import "../styles/Summary.scss";
import Button from "./Button";
import { selectAnswer } from "../actions/action";
import Option from "./Option";

const Summary = () => {
  const [score, setScore] = useState(0);
  const [stats, setStats] = useState(false);
  const [responses, setResponses] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [confetti, setConfetti] = useState(true);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const assessment = useSelector((state) => state.assessment);
  const width = window.innerWidth;
  const height = window.innerHeight;

  const currentQuestion = Assessment.questions[currentQuestionIndex];

  const handleSelectAnswer = (questionId, answer) => {
    dispatch(selectAnswer(questionId, answer));
  };

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
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleStats = () => {
    setStats(true);
    setResponses(false);
  };

  const handleResponse = () => {
    setResponses(true);
    setStats(false);
  };

  useEffect(() => {
    const confettiTimer = setTimeout(() => {
      setConfetti(false);
    }, 6000);

    return () => clearTimeout(confettiTimer);
  }, []);

  return (
    <div className="summary_container">
      {confetti && <Confetti width={width} height={height} />}
      <h1>Hi {user.name}...</h1>
      <h2>
        Congratulations on completing the Assessment <br />
      </h2>

      {stats && (
        <>
          <h2>
            Your Score for the Assessment is <span>{score}</span>
          </h2>
          <table
            id="animations"
            className="charts-css column show-labels hide-data data-spacing-15 show-primary-axis"
          >
            <caption> Score Summary </caption>

            <thead>
              <tr>
                <th scope="col"> Year </th>
                <th scope="col"> Value </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th> Correct </th>
                <td data-size={score}>{score}</td>
              </tr>
              <tr>
                <th> Wrong </th>
                <td data-size={Assessment.questions.length - score}>
                  {Assessment.questions.length - score}
                </td>
              </tr>
              <tr>
                <th> Total </th>
                <td data-size={Assessment.questions.length}>
                  {Assessment.questions.length}
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {responses && (
        <>
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
                  finalResponse={true}
                  isCorrect={option.isCorrect}
                />
              ))}
            </div>
          </div>
          <div className="btns">
            <Button
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
              ButtonText={"Prev"}
              className="Btn-disabled"
            />
            <Button
              onClick={handleNextQuestion}
              disabled={
                currentQuestionIndex === Assessment.questions.length - 1
              }
              ButtonText={"Next"}
              className="Btn-disabled"
            />
          </div>
        </>
      )}
      <div className="stats_btn">
        <Button
          onClick={handleStats}
          ButtonText={"Click Here to See your Stats"}
        />
        <Button onClick={handleResponse} ButtonText={"See your responses"} />
      </div>
    </div>
  );
};

export default Summary;
