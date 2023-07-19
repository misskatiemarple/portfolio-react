import React from "react";

import "./Hero.css";

export default function Hero() {
  return (
    <div className="container">
      <span className="hero-text">
        <h2>Hello, I'm Katie, </h2>
        <h1>Type</h1>
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
