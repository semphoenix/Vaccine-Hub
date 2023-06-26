const express = require("express");
const router = express.Router();
const { NotFoundError } = require("../utils/errors");
const User = require("../models/users");

//const db = require("../config/db");

//Get all the cars
router.get("/", (req, res) => {
  res.json({ ping: "pong" });
});

// Register Post Request
router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.createUser(username, password);
    res.status(201).json({ user: newUser });
  } catch (err) {
    next(err);
  }
});

// Login Post Request
router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.createUser(username, password);
    res.status(201).json({ user: newUser });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
