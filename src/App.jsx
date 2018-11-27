import React, { Component } from "react";
// import "./styles.scss";
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket("ws://localhost:3010");
    this.state = {
      currentUser: { name: "Bob" }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 1,
          username: "Bob",
          content: "Has anyone seen my marbles?"
        },
        {
          id: 2,
          username: "Anonymous",
          content:
            "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
  }
  componentDidMount() {
    this.socket.onopen = function(event) {
      console.log("connected to " + event.currentTarget.url);
    };
    this.socket.onmessage = function(event) {
      console.log("received from websock" + event.data);
    };
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {
        id: 3,
        username: "Michelle",
        content: "Hello there!"
      };
      const messages = this.state.messages.concat(newMessage);
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messages: messages });
    }, 3000);
  }
  handleSubmit = input => {
    const newMessage = {
      username: this.state.currentUser.name,
      content: input,
      id: Math.random()
    };
    const messages = this.state.messages.concat(newMessage);
    this.setState({ messages: messages });
    this.socket.send(JSON.stringify(newMessage));
  };
  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">
            Chatty App
          </a>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar
          currentUser={this.state.currentUser}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default App;
