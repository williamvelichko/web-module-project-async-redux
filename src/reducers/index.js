import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from "../actions";

const initialState = {
  joke: {
    category: "misc",
    joke: "Why was the river rich",
    answer: "becasue it had two banks",
  },
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        joke: {},
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        joke: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        joke: {},
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
