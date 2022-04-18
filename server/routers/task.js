const { Router } = require("express");
const db = require("../mysql/db");
const task = Router();

task.post("/add", (req, res) => {
  //get user_id from db by username
  console.log(req.session);
  const { username } = req.session.user;
  let id_user;
  db.query(
    "SELECT id_user FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        id_user = result[0].id_user;
      }
      let task = {
        task_title: req.body.task_title,
        task_description: req.body.task_description,
        task_status: "unfinished",
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
  if (!req.session.user) {
    res.status(401).send("Unauthorized");
  }
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
