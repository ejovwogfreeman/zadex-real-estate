import React, { useState, useContext } from "react";
import "../css/Navbar.css";
import NavbarMobile from "./NavbarMobile";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(false);
  };
  return (
    <>
      <NavbarMobile open={open} handleOpen={handleOpen} />
      <nav>
        <div className="main-nav">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" width="100px" />
            </Link>
          </div>
          <ul className="links">
            <li>
              <Link to="/hot_deals">Hot Deals</Link>
            </li>
            <li>
              <Link to="/elite_service_plans">Elite Service</Link>
            </li>
            <li>
              <Link to="/timeline">Houses</Link>
            </li>
            <li>
              <Link to="/team">Estates</Link>
            </li>
            <li>
              <Link to="/projects">Information</Link>
            </li>
            {/* <li>
              <Link to="/contact_us">Contact Us</Link>
            </li>
            <li>
              <Link to="/career">Careers</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a href="tel:+(234) 90909090777">
                <BiPhoneCall /> +(234) 90909090777
              </a>
            </li> */}
          </ul>
          <div className="right">
            <span className="mobileNav">
              <AiOutlineMenu onClick={() => setOpen(!open)} />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
