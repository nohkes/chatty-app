import React, { Component } from "react";
export default class Message extends Component {
  render() {
    return (
      <main className="messages">
        <div className="message">
          {this.props.messages.username}
          <span className="message-username" />
          {this.props.messages.content}
          <span className="message-content" />
        </div>
      </main>
    );
  }
}
