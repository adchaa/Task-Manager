const express = require("express");
require("dotenv").config();
const log = require("./login.js");
const task = require("./task");
const app = express();
app.use(express.json());
app.use("/login", log);
app.use("/task", task);

app.listen(3050, () => {
  console.log("server started at port 3050");
});
