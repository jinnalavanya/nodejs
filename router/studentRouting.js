let express = require("express");
require("../db");
let student = require("../modal/studentModal");
let studentRouting = express.Router();

studentRouting.get("/student", async (req, res) => {
  let stu = await student.find();
  if (stu.length > 0) {
    res.send(stu);
  } else {
    res.send("no data found");
  }
});

studentRouting.post("/student", async (req, res) => {
  let stu = new student(req.body);
  let result = await stu.save();
  res.send(result);
});
studentRouting.delete("/student/:id", async (req, res) => {
  const id1 = req.params.id;
  let stu = await student.deleteOne({ _id: id1 });
  res.send(stu);
});

studentRouting.get("/student/:id", async (req, res) => {
  const id1 = req.params.id;
  let stu = await student.findOne({ _id: id1 });
  res.send(stu);
});
studentRouting.put("/student/:id", async (req, res) => {
  const id1 = req.params.id;
  let stu = await student.updateOne({ _id: id1 }, { $set: req.body });
  res.send(stu);
});

module.exports = studentRouting;
