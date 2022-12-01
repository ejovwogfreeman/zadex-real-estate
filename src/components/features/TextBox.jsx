import React from "react";

const TextBox = ({ text, heading }) => {
  return (
    <div className="box">
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

export default TextBox;
