var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/fleur", function(req, res) {
    res.render("fleur");
});

app.get("/hiding", function(req, res) {
    res.render("hiding");
});

app.get("/amen", function(req, res) {
    res.render("amen");
});

app.get("/sunny", function(req, res) {
    res.render("sunny");
});

app.get("/summer", function(req, res) {
    res.render("summer");
});

app.get("/room", function(req, res) {
    res.render("room");
});

app.listen(3000, function () { console.log("Server is listening on port 3000") });