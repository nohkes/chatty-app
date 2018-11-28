import React, { Component } from "react";

export default class Notification extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          Chatty
        </a>
        <span className="navbar-users">{this.props.users} Peeps Online :)</span>
      </nav>
    );
  }
}
