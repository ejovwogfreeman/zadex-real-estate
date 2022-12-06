import React, { useState, useContext } from "react";
import "../css/Navbar.css";
import NavbarMobile from "./NavbarMobile";
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
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
              <Link to="/">Hot Deals</Link>
            </li>
            {/* <li>
              <Link to="/elite_service_plans">Elite Service</Link>
            </li> */}
            <div className="drop-down__cont">
              <li>
                <Link to="">
                  about <AiFillCaretDown className="icon" />
                </Link>
              </li>
              {/* <Link to="/about">About Us</Link> */}
              <div className="drop-down__item">
                <li>
                  <Link to="/about">about us</Link>
                </li>
                <li>
                  <Link to="/about/team">our team</Link>
                </li>
                <li>
                  <Link to="/about/services">our services</Link>
                </li>
                <li>
                  <Link to="/about/partners">our partners</Link>
                </li>
              </div>
            </div>
            <li>
              <Link to="/timeline">Houses</Link>
            </li>
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link to="/policies">policies</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            {/* <li>
              <Link to="/team">Estates</Link>
            </li> */}
            {/* 
            <li>
              <Link to="/career">Careers</Link>
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
