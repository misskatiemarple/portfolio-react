import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

export default function About() {
  return (
    <div className="About-container">
      <div className="row mt-3">
        <div className="col-sm">
          <h2 className="subtitle-h2" id="About">
            About.
          </h2>
          <p className="aboutme-text">
            {" "}
            I decided to transition into coding because I am passionate about
            learning new things, technology, and innovation. With my broad range
            of experience, spanning life in seven countries, I have insight into
            user-focused development.
          </p>
        </div>
        <div className="col-md">
          <p className="quote">
            "Hello, I'm your friendly neighborhood Frontend Engineer."
          </p>
        </div>
      </div>
    </div>
  );
}
