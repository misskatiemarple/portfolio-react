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
              I have lived in seven countries and traveled to many more. From
              collaborating with Presidents to sleeping on the streets, my
              journey includes life in seven countries and many years exploring
              different countries.{" "}
            </p>
            <p>
              Want to know something that we all share?{" "}
              <strong>You have a problem.</strong>
            </p>
            <p>
              It doesn't matter if you have one or a million dollars in the
              bank; humans have problems. I want to solve our clients' problems.{" "}
            </p>
            <p>
              My fundamental belief is that we can create an inclusive and
              efficient world with the things we make. So, let's create
              something groundbreaking.
            </p>
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
