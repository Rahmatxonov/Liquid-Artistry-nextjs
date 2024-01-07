import React from "react";
import Image from "next/image";
import pixel1 from "../assets/img/pexels-1.jpg";
import pixel2 from "../assets/img/pexels-2.jpg";
import o from "../assets/img/O.png";
import hourse from "../assets/img/Hours.png";

import "../components/imageCard.css";

const ImageCard = () => {
  return (
    <div className="ImageCard">
      <span>
        <Image className="img" src={pixel1} alt="pixel1" priority="true" />
        <Image className="img" src={pixel2} alt="pixel1" priority="true" />
      </span>
      <div className="hourse">
        <h3 className="hourse__title">
          <b>Opening</b> Hours
        </h3>
        <Image
          className="hourseImg"
          src={hourse}
          alt="hourse"
          priority="true"
        />
        <Image className="imgO" src={o} alt="pixel1" priority="true" />
      </div>
    </div>
  );
};

export default ImageCard;
