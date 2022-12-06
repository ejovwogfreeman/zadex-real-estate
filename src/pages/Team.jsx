import React from "react";
import "../css/General.css";
import "../css/Team.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import img1 from "../assets/profile-2.jpg";
import img2 from "../assets/profile-3.jpg";
import img3 from "../assets/profile-5.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Contact, PicsBox, ScrollToTop } from "../components";
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
          <PicsBox
            img={img1}
            width={350}
            height={250}
            text="Margaret Oki"
            text2="CEO"
          />
          <PicsBox
            img={img2}
            width={350}
            height={250}
            text="Ben Oki"
            text2="CFO"
          />
          <PicsBox
            img={img3}
            width={350}
            height={250}
            text="Odafe Otobo"
            text2="Business Development Manager"
          />
        </OwlCarousel>
      </div>
      <Contact />
    </section>
  );
};

export default Team;
