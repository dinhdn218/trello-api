const express = require("express");
const app = express();

const port = 8011;
const hostname = "localhost";

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, hostname, () => {
  console.log(`I'am running server http://${hostname}:${port}`);
});
