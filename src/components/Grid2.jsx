import React from "react";
import "../css/Grid.css";
import { Link } from "react-router-dom";
import img1 from "../assets/house1.jpg";
import img2 from "../assets/house2.jpg";
import img3 from "../assets/house3.jpg";
import img4 from "../assets/house4.jpg";

const data = [
  {
    img: img1,
    properties: "21 properties",
    state: "Ogun State",
  },
  {
    img: img2,
    properties: "5 properties",
    state: "Lagos State",
  },
  {
    img: img3,
    properties: "3 properties",
    state: "Abuja",
  },
  {
    img: img4,
    properties: "6 properties",
    state: "Oyo State",
  },
  {
    img: img1,
    properties: "3 properties",
    state: "Nasarawa State",
  },
  {
    img: img2,
    properties: "8 properties",
    state: "Delta State",
  },
];

const Grid2 = () => {
  return (
    <div className="py-5 bg-light text-center">
      <h3>check Our Selection of Finest Properties</h3>
      <p className="mb-0 mt-2">with world class facilities and Location</p>
      <div className="grid-container py-5">
        {data.map((x) => {
          return (
            <div className="grid-card">
              <img src={x.img} alt="" />
              <div className="content text-start p-2 pb-3">
                <p className="m-0">{x.properties}</p>
                <p className="m-0 mb-2">{x.state}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/" className="bg-dark text-light p-2 rounded">
        Lean More...
      </Link>
    </div>
  );
};

export default Grid2;
