import React from "react";
import logo from "../assets/icons/Logo.svg";
import humburger from "../assets/icons/Hamburger-menu.svg";
import Image from "next/image";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <Image src={logo} alt="logo" />
          <Image src={humburger} alt="humburger-menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
