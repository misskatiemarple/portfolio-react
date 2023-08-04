import React from "react";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#" rel="noreferrer">
            Welcome
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#About" rel="noreferrer">
                  About <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Work" rel="noreferrer">
                  My Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact" rel="noreferrer">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />

        <div className="footer">
          <small>
            <p className="text-center">
              This website was coded in React by Katie, and is open-sourced on{" "}
              <a
                href="https://github.com/misskatiemarple/portfolio-react"
                target="_blanks"
                rel="noreferrer"
              >
                Github
              </a>
            </p>
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
