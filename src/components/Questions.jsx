import Assessment from "../assessment.json";
import SingleQuestion from "./SingleQuestion";

const Questions = () => {
  return (
    <div>
      <h1>{Assessment.assessmentName}</h1>
      <SingleQuestion />
    </div>
  );
};

export default Questions;
