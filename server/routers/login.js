const { Router } = require("express");
const bcrypt = require("bcryptjs");
const db = require("../mysql/db");
const log = Router();
require("dotenv").config();
// login user with username and password
log.post("/", (req, res) => {
  const { username, password } = req.body;
  const query = `select * from users where username = '${username}'`;
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
    if (results.length === 0) {
      return res.status(200).send({ message: "username is incorrect" });
    }
    const user = results[0];
    const hash = user.password;
    const isMatch = bcrypt.compareSync(password, hash);
    if (isMatch) {
      req.session.user = user;
      req.session.save(() => {
        res.status(200).send({
          username: user.username,
          message: "login successful",
        });
      });
    } else {
      res.status(200).send({ message: "password is incorrect" });
    }
  });
});

module.exports = log;
