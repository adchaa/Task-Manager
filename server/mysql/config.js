require("dotenv").config();
const config = {
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "taskManager",
};
module.exports = config;
