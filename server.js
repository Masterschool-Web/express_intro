import express from "express";

const server = express();

// PORT
// Gateway / Door
const PORT = 4000; // 5000 // 3000

// PORT
// and not port
// global variables
// there are going to be used everywhere
// they never going to change

// localhost
// npm start (REACT)
// localhost:3000
// localhost => a server running on your local machine (computer)
// Web Server

// HOW DO WE KNOW
// IF THE SERVER RUNS? 🤔

// DRY principle = Don't Repeat Yourself

// HTTP
// GET, POST, PUT/PATCH (Updates), DELETE

// GET HTTP "/"
// .get() => 2 params => .get(relative-address, func())
// func(request, response)
server.get("/", (reuqest, response) => {
  response.send("Welcome to my server!");
});

// .listen() function => 2 params => .listen(port, func)
server.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
