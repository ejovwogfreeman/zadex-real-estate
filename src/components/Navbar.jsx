import React, { useState, useContext } from "react";
import "../css/Navbar.css";
import NavbarMobile from "./NavbarMobile";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { BiPhoneCall } from "react-icons/bi";
import { getToken } from "../api";

const Navbar = () => {
  // const token = getToken;
  const [UserState, setUserState] = useContext(UserContext);

  // console.log(UserState);
  let user;
  if (UserState) {
    user = UserState.data;
  } else {
    user = null;
  }
  const [open, setOpen] = useState(false);
  // const [UserState, setUserState] = React.useContext(UserContext);

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
              <h4>Adron Homes</h4>
            </Link>
          </div>
          <ul className="links">
            <li>
              <Link to="/">Hot Deals</Link>
            </li>
            <li>
              <Link to="/about">Elite Service Plan</Link>
            </li>
            <li>
              <Link to="/timeline">Housing</Link>
            </li>
            <li>
              <Link to="/team">Estate</Link>
            </li>
            <li>
              <Link to="/projects">Information</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/blog">Careers</Link>
            </li>
            <li>
              <Link to="/blog">About Us</Link>
            </li>
            <li>
              <Link to="/blog">
                <BiPhoneCall /> +(234) 90909090777
              </Link>
            </li>
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
