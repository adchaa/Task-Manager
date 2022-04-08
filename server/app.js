//imports
const express = require("express");
const log = require("./routers/login.js");
const task = require("./routers/task");
const signup = require("./routers/signup.js");
const app = express();
const session = require("express-session");
const cors = require("cors");
// session config
app.use(cors());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);
app.use(express.json());
app.use("/login", log);
app.use("/task", task);
app.use("/signup", signup);
//check if logged in
app.get("/check", (req, res) => {
  if (req.session.user) {
    return res.status(200).json({
      message: "logged in",
    });
  }
  return res.status(200).json({
    message: "not logged in",
  });
});

app.listen(3050, () => {
  console.log("server started at port 3050");
});
