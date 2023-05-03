// const jsonServer = require("json-server");
// const path = require("path");

// const server = jsonServer.create();
// const router = jsonServer.router(path.resolve(__dirname + "/db.json"));
// const middlewares = jsonServer.defaults({
//   static: path.resolve(__dirname + "/../build/"),
// });

// const port = process.env.PORT || 3001;

// server.use(middlewares);

// server.use(jsonServer.bodyParser);

// server.use(router);
// server.listen(port, () => {
//   console.log("JSON Server is running");
// });
const jsonServer = require("json-server");
const path = require("path");
const express = require("express");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname + "/db.json"));
const middlewares = jsonServer.defaults();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "..", "build")));

app.use(middlewares);

app.use(jsonServer.bodyParser);

app.use("/api", router);

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

server.use(app);

server.listen(port, () => {
  console.log("JSON Server is running");
});
