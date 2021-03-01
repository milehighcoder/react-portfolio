import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <section className="container-fluid">
        <div className="row project-row">
          <div className="col-lg-6">
            <img
              src={this.props.projectImg}
              className="img-fluid"
              alt={this.props.altTag}
            ></img>
          </div>
          <div className="col-lg-6 card-body">
            <h3 id="project-h3">{this.props.title}</h3>
            <p>{this.props.description}</p>
            <a
              href={this.props.deployLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-deploy"
            >
              Deploy App
            </a>
            <a
              href={this.props.repoLink}
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
