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
    <div className="container hero-grid-container">
      <div className="row mb-4">
        <div className="col-7 katie-text">
          <h2>Hello, I'm Katie, </h2>
          <h1>
            I'm a <span style={{ fontWeight: "bold" }}> {text}</span>
            <Cursor cursorColor="pink" />
          </h1>
          <h4>based in Japan</h4>
          <button className="mt-4 ms-4 btn btn-primary">
            What is this button for Marple?{" "}
          </button>
        </div>

        <div className="col-5">
          <div className="hero-photo">
            <img
              src="/images/katie.jpg"
              style={{ width: "280px" }}
              alt="Image of Katie Marple"
              className="katie-image img-fluid rounded-circle mt-3 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
