import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2>Hello, I'm Katie, </h2>
          <h1>
            Frontend <br />
            Developer
          </h1>
          <h4>based in Japan</h4>
          <button>Hello Button </button>
        </div>
        <div className="col-6">
          <img
            src="/images/katie.jpg"
            alt="Image of Katie Marple"
            className="katie img-fluid "
          />
        </div>
      </div>
    </div>
  );
}
