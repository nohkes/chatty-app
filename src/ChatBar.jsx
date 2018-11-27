import React, { Component } from "react";

export default class ChartBar extends Component {
  submitEvt = event => {
    if (event.keyCode == 13) {
      this.props.handleSubmit(event.target.value);
      eventt.target.value = "";
    }
  };
  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder={this.props.currentUser.name}
        />
        <input
          onKeyUp={this.submitEvt}
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
        />
      </footer>
    );
  }
}
