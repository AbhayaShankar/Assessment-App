export const registerUser = (userInfo) => {
  return {
    type: "REGISTER_USER",
    payload: userInfo,
  };
};

export const startAssessment = () => {
  return {
    type: "START_ASSESSMENT",
  };
};

export const selectAnswer = (questionId, answer) => {
  return {
    type: "SELECT_ANSWER",
    payload: { questionId, answer },
  };
};

export const submitAssessment = () => {
  return {
    type: "SUBMIT_ASSESSMENT",
  };
};
