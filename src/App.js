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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Welcome
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="About">
                About
              </a>
              <a class="nav-link" href="#Work">
                Work
              </a>
              <a class="nav-link" href="#Contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="page-container">
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
