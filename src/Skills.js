import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="subtitle-h2 skills-subtitle">Skills.</h2>
      <p>
        These are the skills that I have acquired to date. I am currently
        learning Node.js and Next.js. I also have an interest in Ai.
      </p>
      <img
        src="/images/skills.png"
        className="skills-image"
        alt="Katie's skills"
      ></img>
    </div>
  );
}
