import React, { Component } from "react";
import Message from "./Message.jsx";
export default class MessageList extends Component {
  render() {
    return (
      <main className="messages">
        <Message />
        <p>hello world</p>
      </main>
    );
  }
}