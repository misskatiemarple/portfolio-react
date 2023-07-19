import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

export default function Contact() {
  const element1 = <FontAwesomeIcon icon={faLinkedin} />;
  const element2 = <FontAwesomeIcon icon={faGithub} />;
  return (
    <div className="Meet-container mt-5">
      <h2 className="subtitle-h2">Contact.</h2>
      <p>
        Do you want to get to know more about me and my work? I love connecting
        with fellow frontend engineers and collaborating on projects. You can
        always find me at the Coding Meetup in Osaka.
      </p>
      <div className="contact-container" id="contactMe">
        <p className="text-center">
          Check out my resume below and get-in touch if you feel like we'd be a
          good match. I'm looking forward to chatting to you soon.
        </p>
        <button className="download-button btn btn-primary ">
          Download Resume
        </button>
        <div className="socials">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-center mt-3 mb-3"
          />
          <FontAwesomeIcon icon={faGithub} className="text-center mt-3 mb-3" />
        </div>
      </div>
    </div>
  );
}
