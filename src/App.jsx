import { useState } from "react";
import Button from "./components/Button";
import RegistrationForm from "./components/Form";
import Questions from "./components/Questions";
import SingleQuestion from "./components/SingleQuestion";
import Summary from "./components/Summary";

function App() {
  const [isUserRegistered, setIsUserRegistered] = useState(true);
  return (
    <>
      {isUserRegistered ? (
        <>
          <Questions />
          <SingleQuestion />
        </>
      ) : (
        <RegistrationForm setIsUserRegistered={setIsUserRegistered} />
      )}
      <Summary />
    </>
  );
}

export default App;
