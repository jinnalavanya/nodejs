let express = require("express");
require("../db");
let signUp = require("../modal/signUpModal");
let signUpRouting = express.Router();

signUpRouting.post("/signup", async (req, res) => {
  const { name, email, password, cpassword, phone, address } = req.body;
  let exists = await signUp.findOne({ email: email });
  if (exists) {
    res.send(`<h1>User already existed...</h1>`);
  } else if (password != cpassword) {
    res.send(`<h1>Invalid credentials..</h1>`);
  } else {
    let result = new signUp(req.body);
    let info = await result.save();
    res.send(info);
  }
});
signUpRouting.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let exists = await signUp.findOne({ email: email });
  if (!exists) {
    res.send(`<h1>User not found...</h1>`);
  }
  if (exists.password == password) {
    res.send("Valid");
  } else {
    res.send("Invalid");
  }
});

module.exports = signUpRouting;
