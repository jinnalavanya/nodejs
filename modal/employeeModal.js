let mongoose = require("mongoose");

let employeeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  Email: {
    type: String,
  },
  designation: {
    type: String,
  },
  Phone: {
    type: Number,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("employees", employeeSchema);
