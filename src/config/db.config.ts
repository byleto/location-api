import { Sequelize } from "sequelize-typescript";
import { Locations } from "../models/locations";

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  models: [Locations],
});

export default connection;