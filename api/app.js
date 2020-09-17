const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const { wb, cb } = req.query;
  console.log(wb);
  res.end(`${cb}('hello')`);
});

app.listen(4000, console.log("server listening on port 4000"));
