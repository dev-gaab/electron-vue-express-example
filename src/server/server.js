const express = require("express");

const expressServer = () => {
  const server = express();

  server.get("/api/hola", (req, res) => res.send("hola hola 4"));

  server.listen(5500, () => {
    console.log("-------------------------------");
    console.log("server api listen on port 5500");
    console.log("-------------------------------");
  });
};

module.exports = expressServer;
