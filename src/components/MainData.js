import React, { useEffect } from "react";
import { connect } from "react-redux";
//import { useParams } from "react-router-dom";
import { getJoke } from "../actions";
import { saveJoke } from "../actions/savedJokes";

function MainData({ joke, error, isFetching, dispatch }) {
  //const { id } = useParams();

  //const savedJoke = joke.find((joke) => joke.id === Number(id));

  useEffect(() => {
    dispatch(getJoke());
  }, []);

  const handleChange = () => {
    dispatch(getJoke());
  };
  if (error) {
    return <h2 className="error">we got an error:{error}</h2>;
  }
  if (isFetching) {
    return <h2 className="fetching">Fetching A Joke For You!</h2>;
  }

  const handleSaveJoke = (id) => {
    dispatch(saveJoke(id));
  };

  return (
    <div className="main_container">
      <h1>Do You Want To Hear A Joke?</h1>

      {joke.type === "twopart" ? (
        <div className="joke_container">
          <h4>
            <strong>category:</strong> {joke.category}
          </h4>
          <h4>
            <strong>joke:</strong> {joke.setup}
          </h4>
          <h4>
            <strong>answer:</strong> {joke.delivery}
          </h4>
        </div>
      ) : (
        <div className="joke_container">
          <h4>
            <strong>category:</strong> {joke.category}
          </h4>
          <h4>
            <strong>joke:</strong> {joke.joke}
          </h4>
        </div>
      )}
      <button onClick={handleChange}>Press for random joke</button>
      <button onClick={() => handleSaveJoke(joke)}>Save Joke</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    joke: state.jokes.joke,
    isFetching: state.jokes.isFetching,
    error: state.jokes.error,
  };
};

export default connect(mapStateToProps)(MainData);
