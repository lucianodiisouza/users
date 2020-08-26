class HomeController {
  async index(req, res) {
    res.json({
      status: "rodando",
    });
  }
}

module.exports = new HomeController();
