import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import colors from "./colors.json";

function App() {
  return (
    <div className="App">
      <h1>Colorful Buttons</h1>
      {
        // Buttons go here
      }
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
