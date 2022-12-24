const express = require("express");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let user = await UserModel.findById({ _id: id });
    res.json({ message: "success", response: user });
  } catch (e) {
    res.status(500).json({ message: "error", response: e.message });
  }
});

router.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      res
        .status(401)
        .json({ message: "error", response: "This email already exists." });
    } else {
      const newUser = await UserModel.create({ name, email, password });
      res.json({ message: "success", response: newUser });
    }
  } catch (e) {
    res.status(500).json({ message: "error", response: e.message });
  }
});

router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email, password });
    if (user) {
      let token = jwt.sign(
        { userId: user._id },
        "masai-ticketing-system-jwtsecret"
      );
      res.json({ message: "success", response: token });
    } else {
      res.status(401).json({ message: "error" });
    }
  } catch (e) {
    res.status(500).json({ message: "error" });
  }
});

module.exports = router;
