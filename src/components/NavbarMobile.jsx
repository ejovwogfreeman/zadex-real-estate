import React, { useState, useContext } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { AiFillCaretDown, AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";

const NavbarMobile = ({ open, handleOpen }) => {
  const [hide, setHide] = useState(false);
  setTimeout(() => {
    setHide(!false);
  }, 1000);
  return (
    <div className={hide ? "showall" : null}>
      {hide ? (
        <div className={open ? "show-cont" : "hide"}>
          <div
            className={open ? "show-close" : null}
            onClick={() => handleOpen()}
          ></div>
          <div className={open ? "show" : "hide"}>
            <div className="close">
              <AiOutlineCloseSquare onClick={() => handleOpen()} />
            </div>
            <ul className="links mobile-links">
              <li onClick={() => handleOpen()}>
                <Link to="/">Hot Deals</Link>
              </li>
              {/* <li onClick={() => handleOpen()}>
                <Link to="/elite_service_plans">Elite Service</Link>
              </li> */}
              <div className="drop-down__cont">
                <li>
                  <Link to="">
                    about <AiFillCaretDown className="icon" />
                  </Link>
                </li>
                <div className="drop-down__item">
                  <li onClick={() => handleOpen()}>
                    <Link to="/about">about us</Link>
                  </li>
                  <li onClick={() => handleOpen()}>
                    <Link to="/about/team">our team</Link>
                  </li>
                  <li onClick={() => handleOpen()}>
                    <Link to="/about/services">our services</Link>
                  </li>
                  <li onClick={() => handleOpen()}>
                    <Link to="/about/partners">our partners</Link>
                  </li>
                </div>
              </div>
              <li onClick={() => handleOpen()}>
                <Link to="/timeline">Houses</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/projects">Projects</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/blog">Blog</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/policies">Policies</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/contact">Contact Us</Link>
              </li>
              {/* <li onClick={() => handleOpen()}>
                <Link to="/donate" className="donate">
                  <AiOutlineHeart className="heart" />
                  DONATE
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobile;
