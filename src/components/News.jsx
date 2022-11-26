import React from "react";
import "../css/News.css";
import img from "../assets/img1.jpg";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="news-comp">
      <div className="news-cont">
        <img src={img} alt="" />
        <div className="text-light">
          <h1>Join Us Today</h1>
          <Link to="/">Contact Us</Link>
        </div>
      </div>
      <p className="mt-5" style={{ fontSize: "25px" }}>
        Begin Your Journey To Becoming A Property Owner Today
      </p>
    </div>
  );
};

export default News;
