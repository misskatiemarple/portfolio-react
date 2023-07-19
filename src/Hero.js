import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import "./Hero.css";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Web Developer", "Frontend Engineer", "Creative Thinker"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="container">
      <span className="hero-text">
        <h2>Hello, I'm Katie, </h2>
        <h1 style={{ margin: "50px" }}>
          I'm a <span style={{ fontWeight: "bold" }}> {text}</span>
          <Cursor cursorColor="red" />
        </h1>
        <h4>based in Japan</h4>
        <button>Hello Button </button>
      </span>
      <span className="hero-photo">
        <img
          src="/images/katie.jpg"
          alt="Image of Katie Marple"
          className="katie img-fluid "
        />
      </span>
    </div>
  );
}
