/* eslint-disable no-unused-vars */
import { useState } from "react";
import RegistrationForm from "./components/Form";
import Questions from "./components/Questions";
import SingleQuestion from "./components/SingleQuestion";
import Summary from "./components/Summary";
import { useSelector, useDispatch } from "react-redux";
import {
  registerUser,
  startAssessment,
  selectAnswer,
  submitAssessment,
} from "./actions/action";

function App() {
  const user = useSelector((state) => state.user);
  const assessment = useSelector((state) => state.assessment);

  return (
    <>
      {user && assessment.inProgress ? (
        <>
          <Questions />
          <SingleQuestion />
        </>
      ) : (
        <RegistrationForm />
      )}
      <Summary />
    </>
  );
}

export default App;
