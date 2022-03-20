const config = require("./config")
const mysql = require("mysql");

let db = mysql.createConnection(config);

module.exports = db;