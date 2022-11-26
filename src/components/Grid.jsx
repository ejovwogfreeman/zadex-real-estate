import React from "react";
import img1 from "../assets/img1.jpg";
import "../css/Grid.css";

const data = [
  {
    img: img1,
    text: "The new house",
  },
  {
    img: img1,
    text: "The new house",
  },
  {
    img: img1,
    text: "The new house",
  },
  {
    img: img1,
    text: "The new house",
  },
  {
    img: img1,
    text: "The new house",
  },
  {
    img: img1,
    text: "The new house",
  },
  //   {
  //     img: img1,
  //     text: "The new house",
  //   },
  //   {
  //     img: img1,
  //     text: "The new house",
  //   },
  //   {
  //     img: img1,
  //     text: "The new house",
  //   },
];

const Grid = () => {
  return (
    <div className="grid-container py-5">
      {data.map((x) => {
        return (
          <div className="grid-card">
            <img src={x.img} alt="" />
            <p>{x.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
