import React, { Component } from "react";
import Navbar from "./reusable/navbar";
import About from "./about";
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
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Portfolio;
