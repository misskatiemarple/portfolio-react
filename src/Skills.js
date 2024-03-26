import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="subtitle-h2 skills-subtitle">Skills.</h2>
      <p>
        I started my programming journey with{" "}
        <a href="https://www.shecodes.io/workshop-max" target="_blank">
          She Codes Max
        </a>
        , I acquired essential coding skills in HTML, CSS, and JavaScript,
        including advanced techniques in ES6 for building interactive
        applications. I also learned how to create responsive designs adaptable
        to various screen sizes and developed proficiency in building
        interactive text generators with AI integration. These newfound skills
        have broadened my capabilities in web development and equipped me to
        tackle diverse projects in the field.
      </p>
      <img
        src="/images/skills.png"
        className="skills-image"
        alt="Katie's skills"
      ></img>
    </div>
  );
}
