/* eslint-disable no-unused-vars */
import RegistrationForm from "./components/Form";
import Questions from "./components/Questions";
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
    <div>
      {user && assessment.inProgress ? (
        <div>
          <Questions />
        </div>
      ) : (
        <RegistrationForm />
      )}
    </div>
  );
}

export default App;
