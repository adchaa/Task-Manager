require("dotenv").config();
const config = {
    host:"localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "taskmanager"
}
module.exports = config;