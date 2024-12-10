const express = require("express");
const routes = express.Route();

const route = app.route("/users");

app.get((req,res) =>{
    res.send('get /users');
})

app.post((req,res) =>{
    res.send("POST /users")
})