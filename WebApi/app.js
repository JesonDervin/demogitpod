var express = require("express");
var app = express();

app.listen(3000,()=>{
    console.log("server listening on port 3000")
})

app.get("/time", (req, res, next) => {
    res.json({"servertime": Date.now()});
   });