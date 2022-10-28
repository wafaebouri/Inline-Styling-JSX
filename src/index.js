import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "Blue",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "green";

ReactDOM.render(
  <div>
    <h1 style={{ color: "red" }}>Hello World!</h1>
    <p style={customStyle}>I need to sleep :(</p>
  </div>,
  document.getElementById("root")
);
