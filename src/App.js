import React from "react";
import "./App.css";
import MainData from "./components/MainData";
import SavedJoke from "./components/SavedJoke";

function App() {
  return (
    <div className="App">
      <MainData />
      <SavedJoke />
    </div>
  );
}

export default App;
