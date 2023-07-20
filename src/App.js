import React from "react";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Welcome
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <Hero />
          <About />
          <Work />
          <Contact />
        </header>
        <div className="footer">
          <small>
            <p className="text-center">
              This website was coded in React by Katie, and is open-sourced on{" "}
              <a
                href="https://github.com/misskatiemarple/portfolio-react"
                target="_blanks"
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
