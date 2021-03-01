import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <form
        className="contact-wrapper"
        id="contact"
        action="https://formspree.io/f/mwkwdoaq"
        method="POST"
      >
        <div>
          <div>
            <h2>Get In Touch.</h2>
          </div>
          <div className="wrapper">
            <div className="input-data">
              <input type="text" name="name" required></input>
              <div className="underline"></div>
              <label>Name</label>
            </div>
          </div>
          <div className="wrapper">
            <div className="input-data">
              <input type="email" name="_replyto" required></input>
              <div className="underline"></div>
              <label>Email</label>
            </div>
          </div>
          <div className="wrapper">
            <div className="input-data">
              <input type='text' name="message" required></input>
              <div className="underline"></div>
              <label>Message</label>
            </div>
          </div>
          <div className="wrapper">
            <div className="">
              <input
                className="btn-primary btn-lg contact-button"
                type="submit"
                value="submit"
                required
              ></input>
              <div className="underline"></div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Contact;
