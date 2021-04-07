import React, { Component } from "react";
import ProfilePic from "../assets/images/profile-headshot.png";

class About extends Component {
  state = {};

  render() {
    return (
      <div id="about" className="container bio-body">
        <div className="row">
          <div className="col-lg-5">
            <span>
              <img src={ProfilePic} className="img-fluid bio-img" alt=""></img>
            </span>
          </div>
          <div className="col-lg-7 bio-text">
            <p>
              My name is Mychal Martinez. I am a Technical Project Manager
              (Professional Scrum Master certification in progress) with over 8
              years of business and program management experience. I am a
              certified web developer with an eye for design, exceptional
              technical aptitude, and the ability to perform in high-pressure
              environments. Currently, I am seeking to make an impact with a
              company embodying the highest level of innovation, creativity, and
              culture.
              <br />
              <br />
              Below is a list of recent projects! Please feel free to contact me
              at hello@mychalmartinez.com for questions or inquiries.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
