import React, { Component } from "react";
import whenWeCleanImg from "../../assets/images/wwc-screenshot.png";

class Project extends Component {
  state = {};
  render() {
    return (
      <section className="container-fluid">
        <div className="row project-row">
          <div className="col-lg-6">
            <img
              src={whenWeCleanImg}
              className="img-fluid"
              alt="When We Clean App Screenshot"
            ></img>
          </div>
          <div className="col-lg-6 card-body">
            <h3 id="project-h3">When We Clean</h3>
            <p>
              When We Clean allows hotel cleaning crew managers to easily manage
              their team's schedules in a simple, high powered web-based
              application.
            </p>
            <a
              href="https://when-we-clean.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-deploy"
            >
              Deploy App
            </a>
            <a
              href="https://github.com/milehighcoder/project-two"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-repo"
            >
              Repository
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
