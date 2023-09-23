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
            <p>
              I have lived in Japan for three years. However, my journey to
              Japan includes life in several countries and many years exploring.
              From collaborating with Presidents to charities, my journey
              includes{" "}
            </p>
            <p>
              Want to know something that we, as humans, all share?{" "}
              <p> We have a problem.</p>
            </p>
            <p>
              It doesn't matter if a person has 1$ or 1M$ in the bank; humans
              have problems. I want to solve our clients' problems.{" "}
            </p>
            <p>
              <strong>
                We can create an inclusive and efficient world with the projects
                we build.
              </strong>
            </p>
          </p>
        </div>
        <div className="col-md">
          <p className="quote">"Let's create something groundbreaking."</p>
        </div>
      </div>
    </div>
  );
}
