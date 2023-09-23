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
        I'm currently building a website for my personal side project, She Loves
        Travel. I'm also learning Flutter and Dart, so check back for the final
        projects soon. In the meantime, here are some of my previous projects:
      </p>{" "}
      <div className="container">
        <div className="row mt-5 mb-5  d-flex flex-column-reverse flex-md-row">
          <div className="col-md">
            <h3>Job A Router</h3>
            <p className="project-details">
              I wanted to learn React Router, so I built this project from
              NetNinja. It utilizes nested routes, layouts, loaders, page
              breadcrumbs, forms and a navigation component. The job data is
              pulled from a local database but could be through an API.
            </p>
            <p>
              <strong>Tools & Languages: </strong>React Router, React, HTML,
              CSS, Javascript.
            </p>
            <div className="work-button text-center">
              <button className="btn btn-primary work-button">
                <a
                  href="https://github.com/misskatiemarple/jobarouter"
                  target="_blank"
                  className="work-link"
                  rel="noreferrer"
                >
                  Check out the code
                </a>
              </button>
            </div>
          </div>
          <div className="col-md youtube-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RpUDB7Yhxas?si=KvhP7gyjKp6pnBmm"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

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
              I host monthly female-only events in Kansai and Tokyo to connect
              travelers to local women and their culture. I built this app to
              solve the language barrier problem. The English level of our
              Japanese members vary, so I included phonetics of the word,
              synonyms and visual aids.
            </p>
            <p>
              <strong>Tools & Languages: </strong>React, HTML, CSS, Javascript,
              and REST API integration.
            </p>
            <div className="work-button text-center">
              <button className="btn btn-primary work-button">
                <a
                  href="https://language-exchange-dictionary-app.netlify.app/"
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
        <div className="row mt-5 mb-5  d-flex flex-column-reverse flex-md-row">
          <div className="col-md">
            <h3>Weather App</h3>
            <p className="project-details">
              I designed and built this project as part of the She Codes
              training. It pulls data from the Open Weather API. I wanted to
              include a forecast alongside the current day temperature and
              conditions. This weather app was fun and interesting to build.
            </p>
            <p>
              <strong>Tools & Languages: </strong>React, HTML, CSS, Javascript,
              REST API integration.
            </p>
            <div className="work-button text-center">
              <button className="btn btn-primary work-button">
                <a
                  href="https://weather-itinerary-planner.netlify.app/"
                  target="_blank"
                  className="work-link"
                  rel="noreferrer"
                >
                  Try it out
                </a>
              </button>
            </div>
          </div>
          <div className="col-md youtube-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_R_Taoj9H84?si=f7OPwX6OuK2hBv74"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="row d-flex mt-5 mb-5">
          <div className="col-md youtube-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/n8mXD9edDa8?si=0ZU14TSIqaudVtGl"
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
              I worked remotely for many years and had to remember time zones
              for deadlines and working hours. I wanted to solve this problem
              with an easy-to-understand clock app. The clock theme will shift
              to dark mode when the location is outside of office hours.
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
