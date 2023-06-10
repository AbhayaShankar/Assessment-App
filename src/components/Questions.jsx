import Assessment from "../assessment.json";
import SingleQuestion from "./SingleQuestion";
import "../styles/Questions.scss";
import Button from "./Button";
import { useState } from "react";
import Summary from "./Summary";

const Questions = () => {
  const [testOver, SetTestOver] = useState(false);

  const handleTest = () => {
    SetTestOver(true);
  };

  return (
    <div className="questions_container">
      {testOver ? (
        <Summary />
      ) : (
        <>
          <h1>{Assessment.assessmentName}...</h1>
          <SingleQuestion />
          <div style={{ marginTop: "20px" }}>
            <Button onClick={handleTest} ButtonText={"Submit Test"} />
          </div>
        </>
      )}
    </div>
  );
};

export default Questions;
