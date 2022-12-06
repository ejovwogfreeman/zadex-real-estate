import React from "react";
import "../css/General.css";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";

const ContactPg = () => {
  return (
    <section className="section contact-us">
      <ScrollToTop />
      <div className="heading">
        <h1>Write Us a Message</h1>
      </div>
      <Contact
        text="Orwell Properties Management Limited Cf5 Katampe Estate, Phase 3, Jahi District, Abuja 24/7 Toll Free"
        text2="0800 ORWELL PROPERTIES NG Tel: Fax:"
        extraText="P.O.Box ----- Abuja, Nigeria info@orwellpropertiesmanagement.com
      www.orwellpropertiesmanagement.com
"
      />
    </section>
  );
};

export default ContactPg;
