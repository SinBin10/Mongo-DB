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

app.get("/read", async (req, res) => {
  //find -> gives arrays of all the matched usernames
  //findone -> gives the first one matched usernames
  let users = await userModel.find({ username: "binay10" });
  res.send(users);
});

app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { username: "binay10" },
    { name: "binaypratapsingh" },
    { new: true }
  );
  res.send(updatedUser);
});

app.get("/delete", async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({ username: "binay10" });
  res.send(deletedUser);
});

app.listen(3000);
