const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user.js")
const { courseRouter } = require("./routes/course.js")
const { adminRouter } = require("./routes/admin.js")
const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);


async function main() {
    await mongoose.connect("mongodb+srv://aryansingh265653:e0bm43UfkV2ohecQ@cluster0.rqocytz.mongodb.net/course-selling-app")
    app.listen(3000);
    console.log("listening on port 3000")
}

main()
