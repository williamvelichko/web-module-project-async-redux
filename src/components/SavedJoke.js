import React from "react";
import { connect } from "react-redux";

function SavedJoke({ savedJoke }) {
  return (
    <div className="savedJoke">
      <h1>Saved jokes:</h1>
      <div>
        <h4>
          <strong>category:</strong> {savedJoke.category}
        </h4>
        <h4>
          <strong>joke:</strong> {savedJoke.setup}
        </h4>
        <h4>
          <strong>answer:</strong> {savedJoke.delivery}
        </h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    savedJoke: state.savedJoke.savedJoke,
  };
};

export default connect(mapStateToProps)(SavedJoke);
