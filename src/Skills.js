import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="subtitle-h2 skills-subtitle">Skills & Certificates.</h2>
      <p>
        I started my programming journey with{" "}
        <a href="https://www.shecodes.io/workshop-max" target="_blank">
          She Codes Max
        </a>
        I acquired essential coding skills in HTML, CSS, and JavaScript,
        including advanced techniques in ES6 for building interactive
        applications. I also learned how to create responsive designs adaptable
        to various screen sizes and developed proficiency in building
        interactive text generators with AI integration. These newfound skills
        have broadened my capabilities in web development and equipped me to
        tackle diverse projects in the field. I have since also completed
        challenges with Women Who Code Tokyo, Code First Skills, and Free Code
        Camp.
      </p>
      <img
        src="/images/skills.png"
        className="skills-image"
        alt="Katie's skills"
      ></img>
      <div className="skills-container">
        <div className="row">
          <div className="col-md-3">
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate"></img> <p>Coming Soon</p>
            </a>
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate"></img> <p>Coming Soon</p>
            </a>
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate"></img>{" "}
              <p>Hackathon For Social Good 2023</p>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate"></img>{" "}
              <p>Introduction to iOS Development Certificate</p>
            </a>
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate"></img>{" "}
              <p>Advanced React Development Certificate</p>
            </a>
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate"></img>{" "}
              <p>React Development Certificate</p>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate"></img>{" "}
              <p>Advanced Responsive Development Certificate</p>
            </a>
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate"></img>{" "}
              <p>Responsive Web Development Certificate</p>
            </a>
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate"></img>
              <p>Advanced Web Development Certificate </p>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate"></img>{" "}
              <p>Web Development Certificate</p>
            </a>
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate"></img>{" "}
              <p>Introduction to Web Development Certificate</p>
            </a>
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate"></img>
              <p>Introduction to Coding Certificate </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
