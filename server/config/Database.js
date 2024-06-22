import { Sequelize } from "sequelize";

const db = new Sequelize("db_sporking", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
