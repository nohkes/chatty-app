import React, { Component } from "react";

export default class ChartBar extends Component {
  submitEvt = evt => {
    if (evt.keyCode == 13) {
      this.props.handleSubmit(evt.target.value);
      evt.target.value = "";
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
