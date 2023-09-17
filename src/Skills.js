import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="subtitle-h2 skills-subtitle">Skills.</h2>
      <p>
        These are the skills that I honed on the She Codes training. I have
        since been developing my own projects and pages. I'm now moving onto
        studying Flutter and Dart.
      </p>
      <img
        src="/images/skills.png"
        className="skills-image"
        alt="Katie's skills"
      ></img>
    </div>
  );
}
