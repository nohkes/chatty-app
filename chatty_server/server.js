// server.js

const express = require("express");
const SocketServer = require("ws").Server;
const uuidv1 = require("uuid/v1");

// Set the port to 3001
const PORT = 3010;

// Create a new express server
const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () =>
    console.log(`Listening on ${PORT}`)
  );

// Create the WebSockets server
const wss = new SocketServer({ server });
// let counter = 0; old counter
//handle message
const createMsg = msg => {
  msg.type = "incomingMessage";
  msg.id = uuidv1();
  return JSON.stringify(msg);
};
//handle notification
const notification = notification => {
  // notification.type = "notification";
  notification.id = uuidv1();
  return JSON.stringify(notification);
};
const sendUsers = num => {
  return JSON.stringify(num);
};

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
};
// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on("connection", ws => {
  // counter++; old counter
  console.log("Client connected");
  // counting the number of users in the chatroom
  const numOfUsers = { type: "numOfUsers", numOfUsers: wss.clients.size };
  wss.broadcast(sendUsers(numOfUsers));

  ws.on("message", function incoming(data) {
    console.log(data);
    const message = JSON.parse(data);
    switch (message.type) {
      case "incomingMessage":
        // handle incoming message
        wss.broadcast(createMsg(message));
        break;
      case "postNotification":
        // handle incoming notification
        wss.broadcast(notification(message));
        break;
    }
  });
  ws.on("close", () => {
    console.log("Client disconnected");
    // decreases counter when browser is closed
    const numOfUsers = { type: "numOfUsers", numOfUsers: wss.clients.size };
    wss.broadcast(sendUsers(numOfUsers));
    // counter--; old counter
  });
});
