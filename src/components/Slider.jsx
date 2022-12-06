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

const Slider = () => {
  const options = {
    loop: true,
    margin: 15,
    nav: true,
    navText: ["&#x2770;", "&#x2771;"],
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  return (
    <div
      className="text-center text-light py-5"
      style={{ background: "black" }}
    >
      <h1 className="display-lg-3 display-6">Explore Our Housing Products</h1>
      <OwlCarousel
        className="owl-theme mt-0 py-5 px-lg-4 px-2 custom-owl"
        {...options}
      >
        <div className="item">
          <img src={img1} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <div className="div">
            <small className="h6 p-1 bg-success">FOR SALE</small>
            <small className="h6 p-1 bg-success">HOT DEALS</small>
          </div>
          <p className="bg-dark">Ocean View Series</p>
        </div>
        <div className="item">
          <img src={img2} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <div className="div">
            <small className="h6 p-1 bg-success">FOR SALE</small>
            <small className="h6 p-1 bg-success">HOT DEALS</small>
          </div>
          <p className="bg-dark">Cranberry Series</p>
        </div>
        <div className="item">
          <img src={img3} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <div className="div">
            <small className="h6 p-1 bg-success">FOR SALE</small>
            <small className="h6 p-1 bg-success">HOT DEALS</small>
          </div>
          <p className="bg-dark">Beach Home Villa</p>
        </div>
        <div className="item">
          <img src={img4} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <div className="div">
            <small className="h6 p-1 bg-success">FOR SALE</small>
            <small className="h6 p-1 bg-success">HOT DEALS</small>
          </div>
          <p className="bg-dark">Mangifera Series</p>
        </div>
      </OwlCarousel>
      <Link to="/" className="slider-link">
        House Listing
      </Link>
    </div>
  );
};

export default Slider;
