const mongoose = require("mongoose");
//mongoose used to connect node and mongodb database
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});
//collection name 'user' will be pluralized by mongoose into 'users'
module.exports = mongoose.model("user", userSchema);
