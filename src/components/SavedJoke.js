import React from "react";
import { connect } from "react-redux";

function SavedJoke({ savedJoke }) {
  return (
    <div className="savedJoke">
      <h1>Saved jokes:</h1>
      {savedJoke.map((joke) => {
        return joke.type === "twopart" ? (
          <div className="savedJoke_container">
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
          <div className="savedJoke_container">
            <h4>
              <strong>category:</strong> {joke.category}
            </h4>
            <h4>
              <strong>joke:</strong> {joke.joke}
            </h4>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    savedJoke: state.savedJoke.savedJoke,
  };
};

export default connect(mapStateToProps)(SavedJoke);
