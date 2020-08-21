var knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost:8889",
    user: "root",
    password: "root",
    database: "usertest",
  },
});

module.exports = knex;
