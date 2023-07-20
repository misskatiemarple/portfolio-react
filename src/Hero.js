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
    <div>
      <div className="row mb-4">
        <div className="col-7 katie-text">
          <h2 className="hero-text">I'm Katie, </h2>
          <h1 className="hero-text">
            I'm a <span> {text}</span>
            <Cursor cursorColor="pink" />
          </h1>
          <h4 className="hero-text">based in Japan</h4>
          <button
            className="mt-4 ms-4  contact-button btn btn-primary"
            href="#contact-me"
            onClick={handleClick}
          >
            Contact Me{" "}
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

const handleClick = () => {
  window.location.href = "#contactMe";
};
