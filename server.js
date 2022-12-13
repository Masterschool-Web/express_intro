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

// .listen() function => 2 params => .listen(port, func)

// DRY principle = Don't Repeat Yourself

server.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
