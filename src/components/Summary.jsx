import { useEffect, useState } from "react";
import Assessment from "../assessment.json";
import { useSelector } from "react-redux";
import Confetti from "react-confetti";

const Summary = () => {
  const [score, setScore] = useState(0);
  const user = useSelector((state) => state.user);
  const assessment = useSelector((state) => state.assessment);
  const width = window.innerWidth;
  const height = window.innerHeight;

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

  return (
    <div>
      <Confetti width={width} height={height} />
      <h1>Hi {user.name}</h1>
      <h2>
        Your Score for the Assessment is <span>{score}</span>
      </h2>
    </div>
  );
};

export default Summary;
