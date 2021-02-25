import React, { Component } from "react";
import ProfilePic from '../assets/images/black-white-candid.JPG';

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container bio-body">
        <div className="row">
          <div className="col-lg-5">
            <span>
              <img
                src={ProfilePic}
                className="img-fluid bio-img"
                alt=""
              ></img>
            </span>
          </div>
          <div className="col-lg-7 bio-text">
            <p>
              I’m an obsessive driven by the purpose of helping others achieve
              greatness. If you want to be first, let’s crush the competition
              together. From initial conception to deployment, Mychal helps
              people solve problems through a holistic design approach while
              utilizing his rapidly growing technical skills in front and back
              end web development to transfer a brand’s personality seamlessly
              throughout the interface of a product. He is passionate about not
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
