const PASS = process.env.MySqlPass
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: PASS,
    DB: "testdb",
    PORT: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };