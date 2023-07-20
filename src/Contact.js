import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

export default function Contact() {
  const element1 = <FontAwesomeIcon icon={faLinkedin} />;
  const element2 = <FontAwesomeIcon icon={faGithub} />;
  return (
    <div className="meet-container mt-5">
      <div className="contact-me-text">
        <h2 className="subtitle-h2 contact-subtitle" id="Contact">
          Contact.
        </h2>
        <p>
          Do you want to get to know more about me and my work? I love
          connecting with fellow frontend engineers and collaborating on
          projects. You can always find me at the Coding Meetup in Osaka.
        </p>
        <p>
          <strong className="email">Email: misskatiemarple@gmail.com</strong>
        </p>
        <p className="text-center">
          Check out my resume below and get-in touch if you feel like we'd be a
          good match. I'm looking forward to chatting to you soon.
        </p>
      </div>
      <div>
        <button className="download-button btn btn-primary mt-4 ">
          Resume
        </button>
      </div>
      <div className="socials mt-5 mb-2">
        <span className="linkedin">
          <a
            href="https://www.linkedin.com/in/misskatiemarple/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-center fa-2x"
              style={{ color: "black", textDecoration: "none" }}
            />
          </a>
        </span>
        <span className="github">
          <a
            href="https://github.com/misskatiemarple"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-center fa-2x"
              style={{ color: "black", textDecoration: "none" }}
            />
          </a>
        </span>
      </div>
    </div>
  );
}
