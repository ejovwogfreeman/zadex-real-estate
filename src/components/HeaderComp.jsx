import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
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
  );
};

export default HeaderComp;
