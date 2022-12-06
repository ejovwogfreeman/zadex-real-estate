import React from "react";
import img4 from "../assets/house4.jpg";
import { PicsBox } from "../components";

const Projects = () => {
  return (
    <section className="section projects">
      <div className="projects-wrapper">
        <div className="heading">
          <h1>orwell outstanding projects</h1>
          <p>
            Orwell Properties Management Limited aims to be the leading real
            estate company in Nigeria and the company currently engages in
            various property development for:
          </p>
        </div>
        <div className="project-items">
          <div className="project-item__wrapper">
            <PicsBox display="none" width={350} height={250} img={img4} />
            <div className="details">
              <p>home and commercial spaces</p>
            </div>
          </div>
        </div>
      </div>
      , plots, institutions, retail outlets, offices,hospitality, Farm
      Settlements, Apartments and Industrial Facilities, etc. What's more, our
      projects are available at affordable price. Future Projects: -The Arcadian
      Mall Delta -The Traveller's Lodge Apartments -The Workplace Lounge -
      Juniper Court Estate 1 & 2 - The Orwell Industrial Logistics Park -
      Heritage Estates - Setting standards
    </section>
  );
};

export default Projects;
