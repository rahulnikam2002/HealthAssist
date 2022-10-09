const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//Routers
const userRouter = require("./Router/user/user.router")

const app = express();
const port = process.env.PORT;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected!"))
  .catch((err) =>
    console.log("Error while making connection with database!", err.message)
);

app.use("/user", userRouter)

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
