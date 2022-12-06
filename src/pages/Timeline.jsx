import React from "react";
import "../css/General.css";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import ScrollToTop from "../components/ScrollToTop";
import img from "../assets/house1.jpg";

const Timeline = () => {
  return (
    <div>
      <ScrollToTop />
      <div className="timeline-comp"></div>
    </div>
  );
};

export default Timeline;
