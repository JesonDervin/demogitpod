var express = require("express");
var app = express();

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json({ servertime: Date.now() });
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
