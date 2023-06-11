/* eslint-disable no-unused-vars */
// User Registration Form

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser, startAssessment } from "../actions/action";
import "../styles/Form.scss";
import Button from "./Button";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [startAssess, setStartAssess] = useState(false);
  const [registerComplete, setRegisterComplete] = useState("");
  const [assessmentComplete, setAssessmentComplete] = useState("");

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

    if (validateForm()) {
      // Registration logic here (dispatching Redux action)
      setRegisterComplete("Congratulations!");
      setStartAssess(true);

      dispatch(
        registerUser({
          name: name,
          email: email,
        })
      );
    }
  };

  const handleStartAssessment = () => {
    let count = 3;
    const timer = setInterval(() => {
      if (count > 0) {
        setAssessmentComplete("Starting Assessment in " + count.toString());
        count--;
      } else {
        clearInterval(timer);
        setAssessmentComplete("Go!");
        setTimeout(() => {
          dispatch(startAssessment());
        }, 1000);
      }
    }, 1000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="form_container">
      <div className="form_main">
        <h1>Register Here</h1>
        <form onSubmit={handleSubmit}>
          <div className="form_input">
            <div className="form_field">
              <FaUserAlt />
              <input
                type="text"
                placeholder="Name"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            {nameError && <span>{nameError}</span>}
          </div>
          <div className="form_input">
            <div className="form_field">
              <MdEmail className="mail" />
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {emailError && <span>{emailError}</span>}
          </div>
          {startAssess ? (
            <>
              <Button
                onClick={handleStartAssessment}
                ButtonText={"Start Assessment"}
              />
              <div className="prog_text">{assessmentComplete}</div>
            </>
          ) : (
            <>
              <Button type="submit" ButtonText={"Register"} />
              <div className="prog_text">{registerComplete}</div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
