let mongoose = require("mongoose");

let signUpSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  cpassword: {
    type: String,
  },

  Phone: {
    type: Number,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("signUps", signUpSchema);
