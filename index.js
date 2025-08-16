const express = require("express");
const { userRouter } = require("./user")
const { courseRouter } = require("./course")
const app = express();

app.use("user", userRouter);
app.use("course", courseRouter);


app.listen(3000);