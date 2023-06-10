/* eslint-disable no-case-declarations */
import { combineReducers } from "redux";

const initialState = {
  user: null,
  assessment: {
    inProgress: false,
    selectedAnswers: [], // Object to store selected answers for each question
  },
};

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return action.payload;
    default:
      return state;
  }
};

const assessmentReducer = (state = initialState.assessment, action) => {
  switch (action.type) {
    case "START_ASSESSMENT":
      return {
        ...state,
        inProgress: true,
      };

    case "SELECT_ANSWER":
      const updatedSelectedAnswers = state.selectedAnswers.map((answer) => {
        if (answer.questionId === action.payload.questionId) {
          return {
            ...answer,
            answer: action.payload.answer,
          };
        }
        return answer;
      });

      if (
        !updatedSelectedAnswers.some(
          (answer) => answer.questionId === action.payload.questionId
        )
      ) {
        updatedSelectedAnswers.push({
          questionId: action.payload.questionId,
          answer: action.payload.answer,
        });
      }

      return {
        ...state,
        selectedAnswers: updatedSelectedAnswers,
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
