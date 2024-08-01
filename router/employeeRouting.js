let express = require("express");
require("../db");
let employee = require("../modal/employeeModal");
let employeeRouting = express.Router();

employeeRouting.get("/employee", (req, res) => {
  res.send(`<h1>Employee page</h1>`);
});

employeeRouting.post("/employee", async (req, res) => {
  let emp = new employee(req.body);
  let result = await emp.save();
  res.send(result);
});

module.exports = employeeRouting;
