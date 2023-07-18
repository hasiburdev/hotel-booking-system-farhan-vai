import React, { useState } from "react";
import "./navbar.css";
import { FaHotel } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  //toggle
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar  activeNavbar");
  };

  //remove navbar
  const removeNav = () => {
    setActive("navBar ");
  };
  //
  const [transparent, setTransparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent(" header activeHeader");
    } else {
      setTransparent(" header ");
    }
  };
  window.addEventListener("scroll", addBg);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="/" className="logo">
            <h1 className="flex">
              <FaHotel className="icon" />
              HotelBooking.
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink">
                Home
              </a>{" "}
            </li>
            <li className="navItem">
              <a href="/offer" className="navLink">
                Packages
              </a>{" "}
            </li>
            <li className="navItem">
              <a href="/hotelList" className="navLink">
                Hotels
              </a>{" "}
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contacts
              </a>{" "}
            </li>
            <div className="headerBtns flex">
              <button className="btn loginBtn" onClick={handleLogin}>
                Login
              </button>
              <button className="btn" onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
