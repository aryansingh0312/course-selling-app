const jwt = require("jsonwebtoken")
const {JWT_USER_PASSWORD} = require("../config")

function userMiddleware(req, res, next) {
    const token = req.header.token
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);

    if (decoded) {
        req.userId = decoded.id
        next()
        } else {
            res.status(403).json({
                message: "YOu are not sign in"
            })
        }

}

module.exports = {
    userMiddleware: userMiddleware
}