import React, { Component } from "react";
import GithubIcon from "../../assets/images/github-icon.png";
import LinkedInIcon from "../../assets/images/linkedin-icon.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar fixed-bottom navbar-dark footer">
        <div className="container">
          <div className="row footer-icon-wrapper">
            <div className="col-lg-12">
              <a
                href="https://github.com/milehighcoder"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer-icons"
                  src={GithubIcon}
                  alt="Github Icon"
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/in/mychalmartinez/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer-icons m-2"
                  src={LinkedInIcon}
                  alt="LinkedIn Icon"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Footer;
