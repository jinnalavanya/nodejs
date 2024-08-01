let express = require("express");
let app = express();
let cors = require("cors");
let student = require("./router/studentRouting");
let employee = require("./router/employeeRouting");
let signUp = require("./router/signUpRouting");

app.use(express.json());
app.use(cors());
app.use("/", student);
app.use("/", employee);
app.use("/", signUp);

app.listen(4000);
