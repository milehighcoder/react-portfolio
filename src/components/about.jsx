import React, { Component } from "react";
import ProfilePic from "../assets/images/profile-headshot.png";

class About extends Component {
  state = {};

  render() {
    return (
      <div id='about' className="container bio-body">
        <div className="row">
          <div className="col-lg-5">
            <span>
              <img src={ProfilePic} className="img-fluid bio-img" alt=""></img>
            </span>
          </div>
          <div className="col-lg-7 bio-text">
            <p>
              My name is Mychal Martinez. I am a Full Stack Web Developer and UX/UI Designer 
              driven by the purpose of helping others achieve greatness through their digital products.
              <br />
              <br />
              From initial conception to deployment, I help
              people solve problems through a holistic design approach while
              utilizing my rapidly growing technical skills in front and back
              end web development to transfer a brand’s personality seamlessly
              throughout the interface of a product. I am passionate about not
              only creating aesthetically pleasing designs but products that
              function at the highest possible level in order to enhance a
              user’s experience on a digital screen.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
