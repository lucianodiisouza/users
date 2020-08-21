const User = require("../models/User");
const knex = require("../database/connection");

class UserController {
  async index(req, res) {}

  async create(req, res) {
    const { email, name, password } = req.body;

    if (email == undefined || name == undefined || password == undefined) {
      res.status(400);
      return res.json({
        err: "Dados ausentes",
      });
    }

    const emailExists = await User.findEmail(email);

    emailExists
      ? res.status(406) && res.json({ err: "Email já cadastrado" })
      : await User.new(email, password, name);

    return res.json({
      email,
      name,
      password,
    });
  }
}

module.exports = new UserController();
