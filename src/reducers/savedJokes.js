import { SAVE_JOKE, DELETE_JOKE } from "../actions/savedJokes";

const initialState = {
  savedJoke: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_JOKE:
      return {
        ...state,
        savedJoke: [...state.savedJoke, action.payload],
      };

    case DELETE_JOKE:
      return {
        ...state,
        savedJoke: state.savedJoke.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
export default reducer;
