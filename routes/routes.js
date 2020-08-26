var express = require("express");
var app = express();
var router = express.Router();

import { HomeController, UserController } from "../controllers";
// var HomeController = require("../controllers/HomeController");
// var UserController = require("../controllers/UserController");

router.get("/", HomeController.index);
router.post("/user", UserController.create);

module.exports = router;
