import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../assets/house1.jpg";
import img2 from "../assets/house2.jpg";
import img3 from "../assets/house3.jpg";
import img4 from "../assets/house4.jpg";
import "../css/Slider.css";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    navText: ["&#x2770;", "&#x2771;"],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item">
        <img src={img1} alt="" />
        <div className="content">
          <p className="h3">Its Great To Be Home</p>
          <p className="h1 mt-4 mb-5">
            Find The House Of Your Dream <br /> Using Our Platform
          </p>
          <Link to="/" className="bg-dark text-light p-3 rounded">
            Learn More...
          </Link>
        </div>
      </div>
      <div className="item">
        <img src={img2} alt="" />
        <div className="content">
          <p className="h3">Its Great To Be Home</p>
          <p className="h1 mt-4 mb-5">
            Find The House Of Your Dream <br /> Using Our Platform
          </p>
          <Link to="/" className="bg-dark text-light p-3 rounded">
            Learn More...
          </Link>
        </div>
      </div>
      <div className="item">
        <img src={img3} alt="" />
        <div className="content">
          <p className="h3">Its Great To Be Home</p>
          <p className="h1 mt-4 mb-5">
            Find The House Of Your Dream <br /> Using Our Platform
          </p>
          <Link to="/" className="bg-dark text-light p-3 rounded">
            Learn More...
          </Link>
        </div>
      </div>
      <div className="item">
        <img src={img4} alt="" />
        <div className="content">
          <p className="h3">Its Great To Be Home</p>
          <p className="h1 mt-4 mb-5">
            Find The House Of Your Dream <br /> Using Our Platform
          </p>
          <Link to="/" className="bg-dark text-light p-3 rounded">
            Learn More...
          </Link>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default HeaderComp;
