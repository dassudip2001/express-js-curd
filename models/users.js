const mongoose = require(mongoose);

// define schema
const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", user);

module.exports = User;
