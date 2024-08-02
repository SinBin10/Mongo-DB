const express = require("express");
const app = express();
const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/create", async (req, res) => {
  //an asynchronous function
  let user = await userModel.create({
    name: "binay",
    username: "binay10",
    email: "binay@gmail.com",
  });
  res.send(user);
});

app.listen(3000);
