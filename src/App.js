import React from "react";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Meet from "./Meet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Hero />
          <About />
          <Work />
          <Meet />
        </header>
        <div className="footer">
          <small>
            <p>
              This website was coded in React by Katie, and is open-sourced on
              Github
            </p>
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
