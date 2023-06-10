/* eslint-disable no-unused-vars */
// User Registration Form

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser, startAssessment } from "../actions/action";
import "../styles/Form.scss";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const assessment = useSelector((state) => state.assessment);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateForm = () => {
    let isValid = true;

    // Validate name
    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    // Validate email
    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(assessment);
    console.log(assessment.inProgress);

    if (validateForm()) {
      // Registration logic here (e.g., dispatching Redux action)
      console.log(name, email);

      dispatch(
        registerUser({
          name: name,
          email: email,
        })
      );
    }
  };

  const handleStartAssessment = () => {
    dispatch(startAssessment());
  };

  return (
    <div className="form_container">
      <div className="form_main">
        <h1>Register Here</h1>
        <form onSubmit={handleSubmit}>
          <div className="form_input">
            <div className="form_field">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            {nameError && <span>{nameError}</span>}
          </div>
          <div className="form_input">
            <div className="form_field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {emailError && <span>{emailError}</span>}
          </div>
          <Button type="submit" ButtonText={"Register"} />
        </form>
        <Button
          onClick={handleStartAssessment}
          ButtonText={"Start Assessment"}
        />
      </div>
    </div>
  );
};

export default RegistrationForm;
