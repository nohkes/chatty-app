import React, { Component } from "react";
export default class Message extends Component {
  render() {
    if (this.props.messages.type === 'postNotification') {
      return (
        <div className="message-content">
          {this.props.messages.content}
        </div>
      );
    } else {
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
}
