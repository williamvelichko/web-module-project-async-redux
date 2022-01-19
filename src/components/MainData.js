import React from "react";
import { connect } from "react-redux";

function MainData({ joke, error, isFetching }) {
  if (error) {
    return <h2>we got an error: {error}</h2>;
  }
  if (isFetching) {
    return <h2>Fetching joke</h2>;
  }

  return (
    <div className="main container">
      <h1>random joke</h1>
      <div className="joke_container">
        <h4>category: {joke.category}</h4>
        <h4>joke: {joke.joke}</h4>
        <h4>answer: {joke.answer}</h4>
      </div>
      <button>Press for random joke</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps)(MainData);
