var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/fleur", function(req, res) {
    res.render("carousel", {
        editorialName: "fleur"
    });
});

app.get("/hiding", function(req, res) {
    res.render("carousel", {
        editorialName: "hiding"
    });
});

app.get("/amen", function(req, res) {
    res.render("carousel", {
        editorialName: "amen"
    });
});

app.get("/sunny", function(req, res) {
    res.render("carousel", {
        editorialName: "sunny"
    });
});

app.get("/summer", function(req, res) {
    res.render("carousel", {
        editorialName: "summer"
    });
});

app.get("/room", function(req, res) {
    res.render("carousel", {
        editorialName: "room"
    });
});

app.listen(3000, function () { console.log("Server is listening on port 3000") });