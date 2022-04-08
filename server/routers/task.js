const { Router } = require("express");
const db = require("../mysql/db");
const task = Router();

task.post("/add", (req, res) => {
  db.query(
    'insert into tasks(task_txt) values ("' + req.body.task_txt + '");',
    (e) => {
      if (e) throw e;
      console.log("added task");
    }
  );
  res.status(200).send("everthing is ok");
});
module.exports = task;
