import Assessment from "../assessment.json";
import SingleQuestion from "./SingleQuestion";
import "../styles/Questions.scss";

const Questions = () => {
  return (
    <div className="questions_container">
      <h1>{Assessment.assessmentName}</h1>
      <SingleQuestion />
    </div>
  );
};

export default Questions;
