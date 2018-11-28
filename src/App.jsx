import React, { Component } from "react";
// import "./styles.scss";
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx";
import Notification from "./Notification.jsx";
class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket("ws://localhost:3010");
    this.state = {
      users: 0,
      currentUser: { name: "Bob" }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    };
  }
  componentDidMount() {
    this.socket.onopen = function(event) {
      console.log("connected to " + event.currentTarget.url);
    };
    this.socket.onmessage = event => {
      console.log("received from websock" + event.data);
      const parser = JSON.parse(event.data);
      if (parser.type === "numOfUsers") {
        this.setState({ users: parser.numOfUsers });
      } else {
        const messages = this.state.messages.concat(parser);
        this.setState({ messages: messages });
        console.log(`${parser.username} said ${parser.content}`);
        console.log(event);
      }
    };

    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {
        id: 3,
        username: "Admin",
        content: "Welcome to Chatty!"
      };
      const messages = this.state.messages.concat(newMessage);
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messages: messages });
    }, 3000);
  }
  changeUsername = user => {
    alert(`${this.state.currentUser.name} has changed their name to ${user}`);
    const notification = {
      type: "postNotification",
      content: `${
        this.state.currentUser.name
      } has changed their name to ${user}`
    };
    this.socket.send(JSON.stringify(notification));
    this.setState({ currentUser: { name: user } });
  };
  handleSubmit = input => {
    const newMessage = {
      type: "incomingMessage",
      username: this.state.currentUser.name,
      content: input
    };
    // const messages = this.state.messages.concat(newMessage);
    // this.setState({ messages: messages });
    this.socket.send(JSON.stringify(newMessage));
  };
  render() {
    return (
      <div>
        <Notification users={this.state.users} />
        <MessageList messages={this.state.messages} />
        <ChatBar
          currentUser={this.state.currentUser}
          handleSubmit={this.handleSubmit}
          changeUsername={this.changeUsername}
        />
      </div>
    );
  }
}
export default App;
