import { combineReducers } from "redux";

import savedJokes from "./savedJokes";
import reducer from "./index";

export default combineReducers({
  savedJoke: savedJokes,
  jokes: reducer,
});
