const { Router } = require("express");

const userRouter = Router();


userRouter.post("/signup", function(req, res) {
    res.json({
        message: "Signup endpoint"
    })
})


userRouter.post("/signin", function(req, res) {
    res.json({
        message: "Signup endpoint"
    })
})


userRouter.get("/user/purchases", function(req, res) {
    res.json({
        message: "Signup endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}