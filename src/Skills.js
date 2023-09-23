import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="subtitle-h2 skills-subtitle">Skills.</h2>
      <p>
        I honed my skills during the SheCodes certification program. My passion
        for programming continues to grow and I am now focussing on Flutter and
        Dart.
      </p>
      <img
        src="/images/skills.png"
        className="skills-image"
        alt="Katie's skills"
      ></img>
    </div>
  );
}
