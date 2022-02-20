const express = require("express");
const { getUser, postUser, loginUser, get } = require("../controller/user");
const Router = express.Router();
const { protect } = require("../middleware/auth");

Router.get("/", protect, getUser);
Router.post("/", postUser);
Router.post("/login", loginUser);

Router.get("/api", get);

module.exports = Router;
