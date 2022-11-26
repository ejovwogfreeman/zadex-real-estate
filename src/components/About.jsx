import React from "react";
import "../css/About.css";
import img from "../assets/img3.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="about-cont text-center">
        <h2 className="display-6 mb-3">Adron Homes</h2>
        <h1 className="display-lg-3 display-6">
          The Largest Real Estate Company For Home Owners, <br /> Buyers And
          Partners
        </h1>
        <p className="my-3">Making The Incredible Affordable</p>
        <p>
          Begin your journey to becoming a property owner today{" "}
          <Link>contact Us </Link>
        </p>
      </div>
    </div>
  );
};

export default About;
