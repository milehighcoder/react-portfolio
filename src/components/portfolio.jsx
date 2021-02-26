import React, { Component } from "react";
import Navbar from "./reusable/navbar";
import About from "./about";
import Project from "./reusable/project";
import whenWeCleanImg from "../assets/images/wwc-screenshot.png";
import quotePicImg from "../assets/images/project-graphics/quote-pic.png";
import weatherAppImg from "../assets/images/project-graphics/weather-app.png";
import videoAppImg from "../assets/images/project-graphics/video-tracker.png";
import shoppingCartImg from "../assets/images/project-graphics/shopping-cart.png";
import budgetTrackerImg from "../assets/images/project-graphics/budget-tracker.png";
import Footer from "./reusable/footer";
import "../App.css";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <About />
        </div>
        <div className='project-wrapper'>
          <Project
            projectImg={whenWeCleanImg}
            altTag={"When We Clean"}
            title={"When We Clean"}
            description={
              "Web based team management system designed for hotel cleaning crew managers."
            }
            deployLink={"https://when-we-clean.herokuapp.com/"}
            repoLink={"https://github.com/milehighcoder/project-two"}
          />
          <Project
            projectImg={videoAppImg}
            altTag={"Video Database Tracker"}
            title={"Video Database Tracker"}
            description={
              "Simple ReactJS application that demonstrates understanding of components, props and JavaScript logic."
            }
            deployLink={"https://milehighcoder.github.io/react-video-database/"}
            repoLink={"https://github.com/milehighcoder/react-video-database"}
          />
          <Project
            projectImg={shoppingCartImg}
            altTag={"Shopping Cart Widget"}
            title={"Shopping Cart Widget"}
            description={
              "ReactJS widget demonstrating understanding of eCommerce shopping cart functionality."
            }
            deployLink={"https://milehighcoder.github.io/react-counter-app/"}
            repoLink={"https://github.com/milehighcoder/react-counter-app"}
          />
          <Project
            projectImg={budgetTrackerImg}
            altTag={"Budget Tracker"}
            title={"Budget Tracker App"}
            description={
              "Add expenses and deposits to a budget tracker with or without a connection."
            }
            deployLink={"https://milehighcoder-budget-tracker.herokuapp.com/"}
            repoLink={"https://github.com/milehighcoder/budget-tracker"}
          />
          
          <Project
            projectImg={weatherAppImg}
            altTag={"Weather Forecast App"}
            title={"Weather Forecasting"}
            description={
              "Check the weather forecast for any city in the world up to five days in advance."
            }
            deployLink={"https://milehighcoder.github.io/weather-dashboard/"}
            repoLink={"https://github.com/milehighcoder/weather-dashboard"}
          />
          <Project
            projectImg={quotePicImg}
            altTag={"quotePic"}
            title={"quotePic"}
            description={
              "Web based generator that overlays quotes onto a random photo based on search criteria."
            }
            deployLink={"https://mhutchbot.github.io/Project-One/"}
            repoLink={"https://github.com/MHutchbot/Project-One"}
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Portfolio;
