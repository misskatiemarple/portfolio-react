import React from "react";
import "./Work.css";

export default function () {
  return (
    <div className="Work-container">
      <h2>Work.</h2>
      <p>
        I love working on creative projects! I'm currently building a Rock Paper
        Scissors Game and a website for my side project She Loves Travel. Check
        back again to see how I got on. For now, check out these part
        projects...
      </p>{" "}
      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <img
              src="/images/dictionary-app.png"
              class="img-fluid rounded"
              alt="Screenshot of dictionary app"
            />
          </div>
          <div className="col-6">
            <h3>Dictionary App</h3>
            <p>
              This proejct used HTML, Javascript and REST API to create a fun xx
            </p>
            <button className="btn btn-primary">Try it out</button>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-6">
            {" "}
            <h3>Weather and Itinerary App</h3>
            <p>This fun project utilizes two APIs </p> xx
            <button className="btn btn-primary">Try it out</button>{" "}
          </div>
          <div className="col-6">
            <img
              src="/images/dictionary-app.png"
              class="img-fluid rounded"
              alt="Screenshot of dictionary app"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
