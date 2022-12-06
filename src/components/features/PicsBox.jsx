import React from "react";

const PicsBox = ({ img, text, text2, width, height, display }) => {
  return (
    <div style={{ width: width, height: height }} className="picBox">
      <div className="img-container">
        <img src={img} alt="pic" />
      </div>
      <div style={{ display: display }} className="title">
        <p>
          {text} <br /> {text2}
        </p>
      </div>
    </div>
  );
};

export default PicsBox;
