import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./components/Header.scss/Header";
import Hero from "./components/Hero/Hero";
import gsap from "gsap";

const startAnimations = () => {
  const slider = document.querySelector(".slider");
  const hero = document.querySelector(".hero");
  const logo = document.querySelector(".logo");
  const hamburger = document.querySelector(".hamburger-menu");
  const headline = document.querySelector(".headline");

  const tl = gsap.timeline();

  tl.fromTo(
    hero,
    1.2,
    { height: "0%" },
    { height: "80%", ease: "Power2.easeInOut" }
  )
    .fromTo(
      headline,
      0.3,
      { opacity: 0 },
      { opacity: 1, ease: "Power2.easeInOut" }
    )
    .fromTo(
      hero,
      1.2,
      { width: "100%" },
      { width: "80%", ease: "Power2.easeInOut" }
    )
    .fromTo(
      slider,
      1.2,
      { x: "-100%" },
      { x: "0%", ease: "Power2.easeInOut" },
      "-=1.1"
    );
};

function App() {
  useEffect(() => {
    startAnimations();
  }, []);

  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="slider"></div>
    </div>
  );
}

export default App;
