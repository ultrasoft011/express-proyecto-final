require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: process.env.DATABASE,
  username: "postgres",
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 5432,
  dialect: "postgres",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Users = require('../models/users')(sequelize, Sequelize);
module.exports = db;
