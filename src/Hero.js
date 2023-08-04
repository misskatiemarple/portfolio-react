import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "bootstrap/dist/css/bootstrap.min.css";
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
      <div className="row">
        <div className="col-md-7 katie-text">
          <h2 className="hero-text">I'm Katie, </h2>

          <h1 className="hero-text">
            I'm a <span className="typewriter-text"> {text}</span>
            <Cursor cursorColor="pink" />
          </h1>

          <h4 className="hero-text">based in Japan</h4>
          <div className="contact-button-container">
            <button
              className="mt-4 ms-4  btn btn-primary contact-button"
              onClick={handleClick}
            >
              Contact Me{" "}
            </button>
          </div>
        </div>

        <div className="col-sm-5 hero-photo-container">
          <img
            src="/images/katie.jpg"
            style={{ width: "280px" }}
            alt="Image of Katie Marple"
            className="katie-image img-fluid rounded-circle mt-3 hero-photo"
          />
        </div>
      </div>
    </div>
  );
}

const handleClick = () => {
  window.location.href = "#Contact";
};
