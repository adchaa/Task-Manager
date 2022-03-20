const express = require("express");
const log = require("./login.js")
const task = require("./task")
const app = express();
app.use(express.json());
app.use("/login",log);
app.use("/task",task)

app.listen(3001,()=>{console.log("server started at port 3001")});