import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About-container">
      <div className="row">
        <div className="col-6">
          <h2 className="subtitle-h2">About.</h2>
          <p>
            {" "}
            I decided to transition into coding because I am passionate about
            learning new things, technology, and innovation. With my broad range
            of experience, spanning life in seven countries, I have insight into
            user-focused development.
          </p>
        </div>
        <div className="col-6">
          <p className="quote">
            "Hello, I'm your friendly neighborhood Frontend Engineer."
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
