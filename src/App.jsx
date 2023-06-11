/* eslint-disable no-unused-vars */
import RegistrationForm from "./components/Form";
import Questions from "./components/Questions";
import { useSelector, useDispatch } from "react-redux";
import blob1 from "./assets/blob1.png";
import blob2 from "./assets/blob2.png";
import blob3 from "./assets/blob3.png";
import blob4 from "./assets/blob4.png";
import Navigation from "./components/Navigation";
import "charts.css";

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
      <img className="blob3" src={blob3} alt="blob3" />
      <img className="blob4" src={blob4} alt="blob4" />
      <Navigation />
    </div>
  );
}

export default App;
