const { Router } = require("express");
logout = Router();
logout.get("/", (req, res) => {
  req.session.destroy(() => {
    res.status(200).send({ message: "logout successful" });
  });
});
module.exports = logout;
