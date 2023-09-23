import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="subtitle-h2 skills-subtitle">Skills.</h2>
      <p>
        These are the skills that I honed during the SheCodes certification
        program. My passion for programming continues to grow. I have since
        learned React Router and I am now focussing on Flutter and Dart.
      </p>
      <img
        src="/images/skills.png"
        className="skills-image"
        alt="Katie's skills"
      ></img>
    </div>
  );
}
