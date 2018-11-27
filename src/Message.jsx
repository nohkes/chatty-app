import React, { Component } from "react";
export default class Message extends Component {
  render() {
    return (
      <main className="messages">
        <div className="message">
          <span className="message-username" />
          {this.props.messages.username}
          <span className="message-content">{this.props.messages.content}</span>
        </div>
      </main>
    );
  }
}
