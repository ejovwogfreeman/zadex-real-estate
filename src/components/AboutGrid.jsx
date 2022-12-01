import React from "react";
import img1 from "../assets/img1.jpg";
import "../css/Grid.css";

const data = [
  {
    head: "Innovative",
    text: "Create and breakdown complex building ideas into simple tasks",
  },
  {
    head: "Serene Location",
    text: "Comfortable and amicable environment for you",
  },
  {
    head: "Property Owner",
    text: "Begin your Journey to becoming a property owner Today",
  },
  {
    head: "Flexible Allocation",
    text: "Making the incredible porperties very Affordable and Flexible in Acquiring",
  },
  {
    head: "World Class Facilities",
    text: "High quality infrastructures to help community socialize",
  },
  {
    head: "Partners",
    text: "Making you a part of the family By making your money work for you",
  },
];

const AboutGrid = () => {
  return (
    <div className="py-5" style={{ background: "#b8860b" }}>
      <h3 className="text-center text-light">Why Choose Orwell?</h3>
      <div className="grid-container pt-5">
        {data.map((x) => {
          return (
            <div className="bg-light rounded p-3">
              <h3>{x.head}</h3>
              <p className="mt-2 mb-0">{x.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutGrid;
