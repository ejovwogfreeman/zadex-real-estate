import React from "react";
import "../css/Grid.css";
import { Link } from "react-router-dom";
import img1 from "../assets/house1.jpg";
import img2 from "../assets/house2.jpg";
import img3 from "../assets/house3.jpg";
import img4 from "../assets/house4.jpg";

const data = [
  {
    id: 1,
    img: img1,
    properties: "21 properties",
    state: "Ogun State",
  },
  {
    id: 2,
    img: img2,
    properties: "5 properties",
    state: "Lagos State",
  },
  {
    id: 3,
    img: img3,
    properties: "3 properties",
    state: "Abuja",
  },
  {
    id: 4,
    img: img4,
    properties: "6 properties",
    state: "Oyo State",
  },
  {
    id: 5,
    img: img1,
    properties: "3 properties",
    state: "Nasarawa State",
  },
  {
    id: 6,
    img: img2,
    properties: "8 properties",
    state: "Delta State",
  },
];

const Grid = () => {
  return (
    <div className="py-5 bg-light text-center">
      <h3>Orwell Homes Everywhere</h3>
      <p className="mt-2">
        Explore our estates nationwide, whether you’re looking to build, buy or
        invest, <br /> we will kick you off to a great and lasting experience
      </p>
      <div className="grid-container pt-3">
        {data.map((x) => {
          return (
            <div key={x.id} className="grid-card">
              <img src={x.img} alt="" />
              <div className="content text-start p-2 pb-3">
                <p className="m-0">{x.properties}</p>
                <p className="m-0 mb-2">{x.state}</p>
                <small className="m-0">
                  <Link to="/" className="bg-dark text-light p-2 rounded">
                    Learn More...
                  </Link>
                </small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
