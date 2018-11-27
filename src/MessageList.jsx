import React, { Component } from "react";
import Message from "./Message.jsx";
export default class MessageList extends Component {
  render() {
    const messageProps = this.props.messages.map(element => (
      <Message key={element.id} messages={element} />
    ));
    return (
      <main className="messages">
        {messageProps}
        <p>hello world</p>
      </main>
    );
  }
}
