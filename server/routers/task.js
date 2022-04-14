const { Router } = require("express");
const db = require("../mysql/db");
const task = Router();

task.post("/add", (req, res) => {
  //get user_id from db by username
  const { username } = req.body;
  let id_user;
  db.query(
    "SELECT id_user FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        console.log("something");
        id_user = result[0].id_user;
      }
      let task = {
        task_title: req.body.task_title,
        task_description: req.body.task_description,
        task_status: req.body.task_status,
        id_user: id_user,
        task_date: req.body.task_date || null,
      };
      db.query("INSERT INTO tasks SET ?", task, (err) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send("task added");
        }
      });
    }
  );
});
task.get("/list/:username", (req, res) => {
  console.log(req.session);
  if (req.session.user.username !== req.params.username) {
    res.status(403).send("Forbidden");
  } else {
    const { username } = req.params;
    db.query(
      "SELECT * FROM tasks WHERE id_user = (SELECT id_user FROM users WHERE username = ?)",
      [username],
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(result);
        }
      }
    );
  }
});

module.exports = task;
