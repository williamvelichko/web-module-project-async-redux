import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const getJoke = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .get("https://v2.jokeapi.dev/joke/Any?safe-mode")
      .then((resp) => {
        console.log(resp.data);
        dispatch({ type: FETCH_SUCCESS, action: resp.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_FAIL, action: err });
      });
  };
};
