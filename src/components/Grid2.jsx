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
    sale: true,
    description: "Emitares Park and Gardens phase 2(Ocean-view Estate)",
    price: "6000000",
    size: "540sqm",
  },
  {
    img: img2,
    sale: true,
    description: " Rehoboth Park and Gardens phase 2 Extension",
    price: "18000000",
    size: "500sqm",
  },
  {
    img: img3,
    sale: true,
    description: "New York Park and Gard",
    price: "30000000",
    size: "450sq",
  },
  {
    img: img4,
    sale: true,
    description: "Imperial Park and Gardens(The Sugarland Estate)",
    price: "4500000",
    size: "600sqm",
  },
  {
    img: img1,
    sale: true,
    description: "Grandview Park & Gardens Phase 1 extension",
    price: "3000000",
    size: "648sqm",
  },
  {
    img: img2,
    sale: true,
    description: "West Park & Gardens phase 1 Extension, Oleyo",
    price: "4500000",
    size: "540sqm",
  },
];

const Grid2 = () => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="py-5 bg-light text-center">
      <h3>check Our Selection of Finest Properties</h3>
      <p className="mb-0 mt-2">with world class facilities and Location</p>
      <div className="grid-container py-5">
        {data.map((x) => {
          return (
            <div className="grid-card">
              <img src={x.img} alt="" />
              <div className="d-block text-start my-1">
                <small className="bg-success text-light p-1 rounded">
                  {x.sale === true ? "FOR SALE" : null}
                </small>
              </div>
              <div className="text-start p-2 pb-3 bg-dark text-light rounded">
                <p className="m-0">{x.description}</p>
                <p className="m-0">₦{numberWithCommas(x.price)}</p>
                <p className="m-0">{x.size}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/" className="bg-dark text-light p-2 rounded">
        Load More...
      </Link>
    </div>
  );
};

export default Grid2;
