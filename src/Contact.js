import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

export default function Contact() {
  const element1 = <FontAwesomeIcon icon={faLinkedin} />;
  const element2 = <FontAwesomeIcon icon={faGithub} />;
  return (
    <div className="meet-container mt-3">
      <div className="contact-me-text">
        <h2 className="subtitle-h2 contact-subtitle" id="Contact">
          Contact.
        </h2>
        <p>I hope to meet you at coding meetups in Japan.</p>
        <p> Email me for work opportunities and collaborations.</p>
        <p>
          <strong className="email">misskatiemarple@gmail.com</strong>
        </p>
      </div>
      <div>
        <button className="download-button btn btn-primary mt-3 resume-button">
          <a
            href="https://drive.google.com/file/d/129mggbVtmBKaHyXZ8ST3LoEPzFaSohEE/view?usp=sharing"
            target="_blank"
            className="resume-link"
            rel="noreferrer"
          >
            Resume
          </a>
        </button>
      </div>
      <div className="socials mt-4 mb-2">
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
