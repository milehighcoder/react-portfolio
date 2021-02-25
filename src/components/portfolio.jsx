import React, { Component } from "react";
import Header from "./reusable/header";
import Footer from "./reusable/footer";
import "../App.css";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Portfolio;
