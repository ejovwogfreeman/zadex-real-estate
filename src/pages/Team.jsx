import React from "react";
import "../css/General.css";
import "../css/Team.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Contact } from ".";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ScrollToTop } from "../components";
const Team = () => {
  const options = {
    loop: true,
    margin: 10,
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
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  };
  return (
    <section className="section team">
      <ScrollToTop />
      <div className="heading heading-left">
        <h2>meet our team</h2>
        <p>
          Meet our leadership team who is helping customers like you find a
          place they love.
        </p>
      </div>
      <div className="carousel-container">
        <OwlCarousel
          className="carousel-theme mt-0 py-0 px-lg-6 px-2 inner-wrapper"
          {...options}
        >
          <div className="item">
            <div className="img-container">
              <img src="" alt="" />
            </div>
            <div className="title">
              <p>
                Margaret Oki <br /> CEO
              </p>
            </div>
          </div>
          <div className="item">
            <div className="img-container">
              <img src="" alt="" />
            </div>
            <div className="title">
              <p className=" title">
                Ben Oki
                <br /> CFO
              </p>
            </div>
          </div>
          <div className="item">
            <div className="img-container">
              <img src="" alt="" />
            </div>
            <div className="title">
              <p>
                Odafe Otobo
                <br /> Business Development Manager
              </p>
            </div>
          </div>
        </OwlCarousel>
      </div>
      <Contact />
    </section>
  );
};

export default Team;
