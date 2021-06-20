import React from "react";
import "./Button.css";

function Button(args) {
  return (
    <button className="try-for-free-btn">{args.text}</button>
  );
}

export default Button;