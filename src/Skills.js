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
              <img src="#" alt="blah blah certificate"></img>
            </a>
            <p>Introduction to iOS Development Certificate</p>

            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate" />
            </a>
            <p>Hackathon For Social Good 2023</p>

            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate" />
            </a>
            <p>Career Development</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate" />
            </a>
            <p>Front-end Developer Certificate</p>

            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate" />
            </a>
            <p>Advanced React Development Certificate</p>

            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate" />
            </a>
            <p>React Development Certificate</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate" />{" "}
            </a>
            <p>Advanced Responsive Development Certificate</p>

            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate" />
            </a>
            <p>Responsive Web Development Certificate</p>

            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate" />
            </a>
            <p>Advanced Web Development Certificate </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate" />
            </a>
            <p>Web Development Certificate</p>

            <a href="#" target="_blank">
              <img src="#" alt="blah blah certificate" />
            </a>
            <p>Introduction to Web Development Certificate</p>

            <a href="#" target="_blank">
              <img
                src="images/certificates/intro to coding cert.png"
                alt="blah blah certificate"
              />
            </a>
            <p>Introduction to Coding Certificate </p>
          </div>
        </div>
      </div>
    </div>
  );
}
