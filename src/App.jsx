/* eslint-disable no-unused-vars */
import RegistrationForm from "./components/Form";
import Questions from "./components/Questions";
import Summary from "./components/Summary";
import { useSelector, useDispatch } from "react-redux";
import blob1 from "./assets/blob1.png";
import blob2 from "./assets/blob2.png";
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
      <img className="blob1" src={blob1} alt="blob1" />
      <img className="blob2" src={blob2} alt="blob2" />
    </div>
  );
}

export default App;
