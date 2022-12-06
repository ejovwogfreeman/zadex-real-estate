import React from "react";
import { Contact, ScrollToTop } from "../components";
import "../css/Services.css";

const Services = () => {
  return (
    <section className="section services">
      <ScrollToTop />
      <div className="heading">
        <h2>Our Services</h2>
        <p></p>
      </div>
      <div className="heading heading-left">
        <h2></h2>
        <p></p>
      </div>
      <Contact />
    </section>
  );
};

export default Services;
