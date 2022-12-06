import React from "react";
import { Contact, ScrollToTop } from "../components";

const Policies = () => {
  return (
    <section className="section services">
      <ScrollToTop />
      <div className="heading">
        <h2>our policies</h2>
        <p>
          We cater to our clients needs, adjust based on feedback and maintain a
          constant position of readiness. Home Search Property Management &
          Development Construction Rental Interior Design Architecture Project &
          Facility Management MEP
        </p>
      </div>
      <div className="heading heading-left">
        <h2>Our Health & Safety Commitment:</h2>
        <p>
          We do not compromise when it comes to Health & Safety. Our aim is to
          be the recognized leader in Health & Safety in our sector. Through a
          range of communications programmes and targeted training initiatives
          we are working hard to achieve our Target Zero goal: zero accidents
          and zero illnesses caused by work.
        </p>
      </div>
      <Contact />
    </section>
  );
};

export default Policies;
