const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../mysql/db");
require("dotenv").config();

const signup = Router();
signup.post(
  "/",
  [
    check("username")
      .isLength({ min: 3 })
      .withMessage("username must be at least 3 characters"),
    check("password")
      .isLength({ min: 3 })
      .withMessage("password must be at least 3 characters"),
    check("email").isEmail().withMessage("email must be valid"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { username, password, email } = req.body;
    //verify if username is already taken
    db.query(
      "SELECT * FROM users WHERE username = ?",
      [username],
      (err, results) => {
        if (err) {
          return res.status(500).json({
            message: "Internal server error",
          });
        }
        if (results.length > 0) {
          return res.status(409).json({
            message: "username already taken",
          });
        }
      }
    );
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const today = new Date().toISOString();
    const query = `insert into users(username,password,email,date_of_inscription) values('${username}','${hash}','${email}','${today}')`;
    db.query(query, (e) => {
      if (e) {
        res.status(422).json({
          message: "something went wrong",
        });
        throw e;
      } else {
        req.session.user = req.body;
        res.status(200).json({
          message: "user added successfully",
        });
      }
    });
  }
);
module.exports = signup;
