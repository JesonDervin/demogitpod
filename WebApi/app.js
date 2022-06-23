var express = require("express");
var app = express();

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res, next) => {
  res.json({ servertime: Date.now() });
});
