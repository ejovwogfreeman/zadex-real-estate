import React from "react";
import "../css/General.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const HotDeals = () => {
  return (
    <div className="container">
      <ScrollToTop />
      <p>Hot Deals</p>
    </div>
  );
};

export default HotDeals;
