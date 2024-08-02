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

app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { username: "binay10" },
    { name: "binaypratapsingh" },
    { new: true }
  );
  res.send(updatedUser);
});

app.listen(3000);
