import React from "react";
import "../components/header.css";
import Navbar from "../components/Navbar";
const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="container">
        <div className="hero">
          <b className="hero__indulge">Indulge in</b>
          <h1 className="hero__title">Liquid Artistry</h1>
          <p className="hero__text">
            Step into a world of extraordinary flavors and unrivaled mixology
            expertise
          </p>
          <button className="hero__btn">EXPLORE</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
