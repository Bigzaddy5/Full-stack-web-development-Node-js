// Aim: Build a server with express.js
const express = require("express");
const ejs = require("ejs");
const app = express();
app.set("view engine", "ejs")
app.use("/assets",express.static("assets"))
app.listen(3000,() => {
    console.log("App is listening on port 3000")
})
app.get("/", (req,res) => {
    // res.send("<h1>Welcome to my WebApp</h1>")
    // res.render("index", {message:"From server"});
    res.render("index", {list:["Oscar","Bright","Daniel","Beneth","Jonathan"]});
});