import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <section id="work" class="container work-header">
        <div class="row work-row">
          <div class="col-lg-12">
            <h2 id="work-h2">Work</h2>
            <span>
              <p class="jumbo-p">
                Here are some projects that I've been working on.
              </p>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
