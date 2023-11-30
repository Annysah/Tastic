import React, { useState } from "react";
import logo from "../../assets/logo2.png";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" width="150" height="150" />
        </div>
        <ul className="navbar-links">
          <li className="navbar-link">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-link">
            <a href="#about">About</a>
          </li>
          <li className="navbar-link">
            <a href="#menu">Menu</a>
          </li>
          <li className="navbar-link">
            <a href="#team">Team</a>
          </li>
          <li className="navbar-link">
            <a href="#services">Services</a>
          </li>
          <li className="navbar-link">
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#contact" className="btn">
              Reservation
            </a>
          </li>
        </ul>

        <div className="navbar-mobile">
          <MdOutlineMenu
            fontSize={30}
            color="#fff"
            onClick={() => setClick(true)}
          />
          {click && (
            <div className="navbar-mobile__overlay slide-bottom">
              <MdOutlineClose
                fontSize={30}
                className="overlay__close"
                onClick={() => setClick(false)}
              />
              <ul className="navbar-mobile__links">
                <li className="mobile-link">
                  <a href="#home">Home</a>
                </li>
                <li className="mobile-link">
                  <a href="#about">About</a>
                </li>
                <li className="mobile-link">
                  <a href="#menu">Menu</a>
                </li>
                <li className="mobile-link">
                  <a href="#team">Team</a>
                </li>
                <li className="mobile-link">
                  <a href="#services">Services</a>
                </li>
                <li className="mobile-link">
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#contact" className="navbar-btn">
                    Reservation
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
