import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Work.css";

export default function () {
  return (
    <div className="Work-container mt-3">
      <h2 className="subtitle-h2" id="Work">
        Work.
      </h2>
      <p className="work-intro">
        I love working on creative projects! I'm currently building a Rock Paper
        Scissors Game and a website for my side project She Loves Travel. Check
        back again to see how I got on. Here are some of my previous projects...
      </p>{" "}
      <div className="container">
        <div className="row mt-5 d-flex">
          <div className="col-md">
            <img
              src="/images/dictionary-app.png"
              className="img-fluid rounded work-thumbnail"
              alt="Screenshot of dictionary app"
            />
          </div>
          <div className="col-md">
            <h3 className="dictionary-app-title">Dictionary App</h3>
            <p className="project-details">
              I host monthly meet-up events in Kansai for solo female travelers
              and local Japanese women to connect. We exchange culture and
              languages while enjoying a delicious lunch. I designed this app
              with those ladies in mind. Their levels of English vary, so I
              included phonetics of the word, synonyms and visual aids.
            </p>
            <p>
              <strong>Tools & Languages: </strong>React, HTML, CSS, Javascript,
              and REST API integration.
            </p>
            <div className="work-button text-center">
              <button className="btn btn-primary work-button">
                <a
                  href="https://spontaneous-belekoy-808234.netlify.app/"
                  target="_blank"
                  className="work-link"
                  rel="noreferrer"
                >
                  Try it out
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5  d-flex flex-column-reverse flex-lg-row">
          <div className="col-md">
            <h3>Weather and Itinerary App</h3>
            <p className="project-details">
              This project was designed for the She Loves Travel Community. It
              combines two REST APIs for the weather and the itinerary. As a
              foreigner living in Japan I receive many emails asking for
              itinerary advice. This weather and itinerary app can help people
              decide what activities to do while they are in Japan.
            </p>
            <p>
              <strong>Tools & Languages: </strong>React, HTML, CSS, Javascript,
              REST API integration.
            </p>
            <div className="work-button text-center">
              <button className="btn btn-primary work-button">
                <a
                  href="https://bright-tarsier-1cfd34.netlify.app/"
                  target="_blank"
                  className="work-link"
                  rel="noreferrer"
                >
                  Try it out
                </a>
              </button>{" "}
            </div>
          </div>
          <div className="col-md order-sm-0">
            <iframe
              src="https://www.youtube.com/embed/Nxgc4VSBguM"
              className="youtube-video"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="row d-flex mt-5 mb-5">
          <div className="col-6">
            <iframe
              src="https://www.youtube.com/embed/dsOw0t0OrUQ"
              className="youtube-video"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-md">
            {" "}
            <h3>Remote Worker Clock App</h3>
            <p className="project-details">
              I have worked remotely in different countries for many years. I
              understand that it can be hard to keep track of work deadlines
              when you're in a different timezone. This app was designed for
              people, like me, who need a reminder of the time in the
              headquarters office. The automatical clock will automatically
              shift to a dark background when it is outside of office hours.{" "}
            </p>
            <p>
              <strong>Tools & Languages: </strong>HTML, CSS, Vanilla JavaScript,
              REST API integration
            </p>
            <div className="work-button text-center">
              <button className="btn btn-primary">
                <a
                  href="https://remote-workers-clock.netlify.app/"
                  target="_blank"
                  className="work-link"
                  rel="noreferrer"
                >
                  Try it out
                </a>
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
