import React from "react";
import { Contact } from ".";
import { ScrollToTop } from "../components";
import "../css/Partners.css";

const Partners = () => {
  return (
    <section className="section partners">
      <ScrollToTop />
      <div className="heading">
        <h2>Our Partners</h2>
      </div>
      <div className="heading heading-left">
        <h2>Architect:</h2>
        <p>
          Darchi Workgroup Limited The Darchi Workgroup Limited has remarkable
          record of 20 years of experience in the industry and is with us since
          the past 3 years. The company's architectural designs have always been
          a winner along with their inteligent insights on each project. Legal
          Advisor: The XYZ brings a vast number of years of experience and
          expertise in legal aspects of our business. Our company's expansion is
          hinged on this prenise and we expect to grow exponentially under the
          legal advise and assistance of our legal partners.
        </p>
      </div>
      <div className="heading heading-left">
        <h2>Accounts & Financial Advisors:</h2>
        <p>
          Flips Consulting Limited Flips Consulting Limited brings a vast number
          of years and expertise in the field of Finance and Accounts and
          Taxation. Under Flips Consulting advise, we hope to sail smoothly
          regarding our company accounts and finance.
        </p>
      </div>
      <div className="heading heading-left">
        <h2>MEP Consultants:</h2>
        <p>Fluxivid Nigeria Limited (In Progress)</p>
      </div>
      <Contact />
    </section>
  );
};

export default Partners;
