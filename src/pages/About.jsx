import React from "react";
import "../css/General.css";
import "../css/About.css";
import { ScrollToTop, TextBox } from "../components";
import { Contact } from ".";

const About = () => {
  return (
    <section className="about-page section">
      <ScrollToTop />
      <div className="heading">
        <h1>about us</h1>
      </div>
      <div className="items">
        <div className="item-left item">
          <TextBox
            text="
          Our Company is a multifaceted commercial real estate firm that
      offers property development and management, marketing, construction, and
      facilities management services for customers in Nigeria. Since our
      establishment in 2022, the company has been helping customers find homes
      and lands that suits their lifestyle. We specialize in making affordable
      deals for first-time homeowners and those looking to make viable
      investment in Nigeria and overseas. With our professional team of
      marketing executives, we have catered to the needs of all our customers as
      per their real estate requirements within the past few years of operation
      and will continue to do so. We pride ourselves on developing long and
      prosperous relationships with our customers."
          />
        </div>
        <div className="item-right item">
          <TextBox
            heading="Our Mission:"
            text=" To successfully complete
      several commercial and residential projects and achieving a high reputed
      standing position in the Building industry and real estate market with
      continuing functioning many more other businesses."
          />
          <TextBox
            heading="Vision:"
            text="Our Vision is to build a future where the Orwell
      Properties Management Limited brand is a name known across Nigeria and Pan
      Africa and globally for development, and marketing of premium real estate
      with unmatched value for money."
          />
          <TextBox
            heading="Our Values:"
            text=" Dependability
      Affordability Team Working Spirit Problem Solving "
          />
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default About;
