const { Router } = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const db = require("../mysql/db");
const log = Router();
require("dotenv").config();
//session login
log.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

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
      return res.status(401).json({
        message: "username or password is incorrect",
      });
    }
    const user = results[0];
    const hash = user.password;
    console.log(hash);
    console.log(password);
    const isMatch = bcrypt.compareSync(password, hash);
    if (isMatch) {
      req.session.user = user;
      return res.status(200).json({
        message: "login successful",
      });
    }
    return res.status(401).json({
      message: "username or password is incorrect",
    });
  });
});

module.exports = log;
