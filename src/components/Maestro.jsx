import React from "react";
import Image from "next/image";
import "./maestro.css";
import maestroImg from "../assets/img/pexels-charlotte.jpg";
import a from "../assets/img/A.png";

const Maestro = () => {
  return (
    <section>
      <Image className="maestro__A" src={a} alt="a" priority="true" />
      <div className="container">
        <div className="maestro">
          <Image
            className="maestro__img"
            src={maestroImg}
            alt="maestroImg"
            width={260}
            height={390}
          />
          <p className="maestro__text">
            Liquid Maestro, the newest hotspot in downtown{" "}
            <span>Los Angeles</span>. Our skilled mixologists are passionate
            about crafting exceptional cocktails that will{" "}
            <b>delight your senses</b>.
          </p>
          <p className="maestro__text2">
            With an ambiance that exudes elegance and a commitment to delivering
            unforgettable experiences, Liquid Maestro is the ultimate
            destination for cocktail enthusiasts. Join us for an exquisite
            journey into the world of liquid artistry.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Maestro;
