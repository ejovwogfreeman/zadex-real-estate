import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
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
    <div className="bg-dark text-center text-light py-5">
      <h1 className="display-lg-3 display-6">Explore Our Housing Products</h1>
      <OwlCarousel
        className="owl-theme mt-0 py-4 px-lg-4 px-2 custom-owl"
        {...options}
      >
        <div className="item">
          <img src={img1} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <p className="h3-lg h4">Lekki Phase 1</p>
        </div>
        <div className="item">
          <img src={img2} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <p className="h3-lg h4">Lekki Orchid District</p>
        </div>
        <div className="item">
          <img src={img3} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <p className="h3-lg h4">Epe New Town</p>
        </div>
      </OwlCarousel>
      <Link to="/" className="slider-link">
        House Listing
      </Link>
    </div>
  );
};

export default Slider;
