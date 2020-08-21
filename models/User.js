const knex = require("../database/connection");
const bcrypt = require("bcrypt");

class User {
  async new(email, password, name) {
    try {
      const hash = await bcrypt.hash(password, 10);
      await knex
        .insert({
          email,
          password: hash,
          name,
          role: 0,
        })
        .table("users");
    } catch (err) {
      console.log(err);
    }
  }

  async findEmail(email) {
    try {
      const result = await knex
        .select("*")
        .from("users")
        .where({ email: email });

      return result.length > 0 ? true : false;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new User();
