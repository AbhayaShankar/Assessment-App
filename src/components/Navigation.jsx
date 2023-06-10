import { useState } from "react";
import Assessment from "../assessment.json";

// Nvaigation Panel for quick view of Questions.
const Navigation = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <div>
      Abhaya
      {Assessment.questions.map((quest, index) => {
        <>{index}</>;
      })}
    </div>
  );
};

export default Navigation;
