import { combineReducers } from "redux";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return action.payload;
    default:
      return state;
  }
};

const assessmentReducer = (
  state = { inProgress: false, selectedAnswers: {} },
  action
) => {
  switch (action.type) {
    case "START_ASSESSMENT":
      return {
        ...state,
        inProgress: true,
      };
    case "SELECT_ANSWER":
      return {
        ...state,
        selectedAnswers: {
          ...state.selectedAnswers,
          [action.payload.questionId]: action.payload.answer,
        },
      };
    case "SUBMIT_ASSESSMENT":
      return {
        ...state,
        inProgress: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  assessment: assessmentReducer,
});

export default rootReducer;
