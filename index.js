const express = require("express");

const app = express();

app.post("/user/signup", function(req, res) {
    res.json({
        message: "Signup endpoint"
    })
})


app.post("/user/signin", function(req, res) {
    res.json({
        message: "Signup endpoint"
    })
})


app.get("/user/purchases", function(req, res) {
    res.json({
        message: "Signup endpoint"
    })
})


app.get("/user/purchase", function(req, res) {
    res.json({
        message: "Signup endpoint"
    })
})


app.get("/user/courses", function(req, res) {
    res.json({
        message: "Signup endpoint"
    })
})
app.listen(3000);