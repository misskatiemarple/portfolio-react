import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Meet() {
  const element1 = <FontAwesomeIcon icon={faLinkedin} />;
  const element2 = <FontAwesomeIcon icon={faGithub} />;
  return (
    <div className="Meet-container">
      <p>
        Do you want to get to know more about me and my work? I love connecting
        with fellow frontend engineers and collaborating on projects. You can
        always catch me at the Coding Meetup in Osaka.
      </p>
      <p>
        Otherwise, check out my resume below and get-in touch if youe feel like
        we'd be a good match.I'm looking forward to chatting to you soon.
      </p>
      <button className="btn btn-primary">Download Resume</button>
      <div className="socials">
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />;
      </div>
    </div>
  );
}
