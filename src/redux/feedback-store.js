import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as types from "./feedback-types";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GOOD:
      return {
        ...state,
        good: state.good + payload,
      };

    case types.NEUTRAL:
      return {
        ...state,
        neutral: state.neutral + payload,
      };

    case types.BAD:
      return {
        ...state,
        bad: state.bad + payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
