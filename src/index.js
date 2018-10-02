import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import colors from "./colors.json";

/**
 * React - Inline Styles
 * https://react-cn.github.io/react/tips/inline-styles.html
 */

function App() {
  return (
    <div className="App">
      <h1>Colorful Buttons</h1>
      Loop through the "colors" array and return a button for each color.
      <ol>
        <li>Set the button's background color to color.value</li>
        <li>Set the button's value to color.color</li>
      </ol>
      {
        // Buttons go here
      }
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
