import React from "react";
import "./Hero.scss";
import redVanImg from "../../assets/red-van.jpg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero">
        <img src={redVanImg} alt="" />
        <h3 className="headline">Enjoy the perfect vacation</h3>
      </div>
    </section>
  );
};

export default Hero;
