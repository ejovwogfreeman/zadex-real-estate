import React from "react";
import "../css/Footer.css";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-5">
      <div
        className="main-footer text-start mt-3 mb-5"
        style={{ overflowX: "hidden" }}
      >
        <div className="first">
          <h4 className="mb-3">Adron Homes</h4>
          <h5>About Adron</h5>
          <p>
            We are daily driven to keep our promise of affordable housing
            products with a singular mission to exceed expectations.
          </p>
        </div>
        <div className="second">
          <h4 className="mb-3">Contact Us</h4>
          <p>
            For Complaints and enquiries you can reach us on any of the numbers
            or visit our head office at:
          </p>
          <p>
            <TfiLocationPin /> <br />
            75B Adeyemo Akapo, Omole Phase 1. Ikeja, Lagos state
          </p>
          <p>
            <FiPhone /> <br /> Call us +2349058590355 +2349058590357
            +2349058590356
          </p>
          <p>
            <TfiEmail /> <br />
            clientservice@adronhomesproperties.com <br /> Contact us
          </p>
        </div>
        <div className="third">
          <h4 className="mb-3">NewsLetter</h4>
          <form
            action=""
            style={{
              width: "100%",
              padding: "0px",
            }}
          >
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                style={{ margin: "0px" }}
              />
              <button class="btn btn-primary" type="button" id="button-addon2">
                Submit
              </button>
            </div>
          </form>
          <p>
            Leave your mail with us for information on our latest products and
            promo.
          </p>
        </div>
      </div>
      <div className="sub-footer py-3 bg-primary">
        <p className="mt-3">© Adron Homes - All rights reserved</p>
        <div className="icons">
          <a href="https://facebook.com">
            <FaFacebookSquare />
          </a>
          <a href="https://twitter.com">
            <FaTwitterSquare />
          </a>
          <a href="https://instagram.com">
            <FaInstagramSquare />
          </a>
          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
