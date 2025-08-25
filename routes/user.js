const { Router } = require("express");
const { userModel } = require("../db")
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "ABCDEFH"

const userRouter = Router();


userRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body;
    await userModel.create({
        email:email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    res.json({
        message: "Signup endpoint"
    })
})


userRouter.post("/signin",async function(req, res) {
    const {email, password} = req.body;

    const user = await userModel.findOne({
        email: email,
        password: password
    })

    if(user) {
        const token = jwt.sign({
            id:user._id
        }, JWT_USER_PASSWORD);

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
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