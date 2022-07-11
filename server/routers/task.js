const { Router } = require("express");
const db = require("../mysql/db");
const task = Router();
task.post("/check", (req, res) => {
  if (!req.session.user) {
    res.status(401).send("Unauthorized");
  }
  if (req.session.user.username !== req.body.username) {
    res.status(403).send("Forbidden");
  } else {
    let { username, id, status } = req.body;
    if (status === "uncompleted") {
      status = "'completed'";
    } else {
      status = "'uncompleted'";
    }
    db.query(
      `UPDATE tasks set task_status=${status} where id_task=${id} and id_user=${req.session.user.id_user}`,
      (err) => {
        if (err) {
          throw err;
        } else {
          res.sendStatus(200);
        }
      }
    );
  }
});
task.post("/add", (req, res) => {
  //get user_id from db by username
  const { username } = req.session.user;
  let id_user;
  db.query(
    "SELECT id_user FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        res.status(500).send("Internal Server Error");
      } else {
        id_user = result[0].id_user;
      }
      let task = {
        task_title: req.body.task_title,
        task_description: req.body.task_description,
        task_status: "uncompleted",
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
  if (!req.session.user || !req.session.user.username) {
    res.status(401).send("Unauthorized");
  }
  if (req.session.user.username !== req.params.username) {
    res.status(403).send("Forbidden");
  } else {
    const { username } = req.params;
    db.query(
      "SELECT * FROM tasks WHERE id_user = (SELECT id_user FROM users WHERE username = ?) ORDER BY task_status DESC, task_date DESC",
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
task.delete("/delete/:id", (req, res) => {
  if (!req.session.user) {
    res.status(401).json({
      message: "Unauthorized",
    });
  } else {
    const { id } = req.params;
    db.query(`delete from tasks where id_task= ?`, [id], (err) => {
      if (err) {
        res.status(500).json({
          message: "error",
        });
      } else {
        res.status(200).json({
          message: "deleted the task successfully",
        });
      }
    });
  }
});
task.post("/edit", (req, res) => {
  if (!req.session.user) {
    res.status(401).json({
      message: "Unauthorized",
    });
  } else if (req.session.user.username !== req.body.username) {
    res.status(403).json({
      message: "Forbidden",
    });
  } else {
    const task = {
      task_title: req.body.task_title,
      task_description: req.body.task_description,
      task_date: req.body.task_date,
    };
    const query = `update tasks set ? where id_task=${req.body.id_task} ;`;
    db.query(query, task, (err) => {
      if (err) {
        res.status(500).json({
          message: "error",
        });
      } else {
        res.status(200).json({
          message: "edited successfully",
        });
      }
    });
  }
});
module.exports = task;
