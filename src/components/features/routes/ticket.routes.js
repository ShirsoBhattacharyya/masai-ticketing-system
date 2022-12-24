const express = require("express");
const TicketModel= require("../models/ticket.model");
const router = express.Router();

router.get("/", async (req, res) => {
  let { userId } = req.body;
  try {
    if (userId) {
      let ticket = await TicketModel.find({ userId });
      res.json({ message: "success", response: ticket });
    } else {
      res
        .status(401)
        .json({ message: "error", response: "Please Login first" });
    }
  } catch (e) {
    res.status(500).json({ message: "error", response: e.message });
  }
});
router.post("/create", async (req, res) => {
  let { category, title, message, userId } = req.body;
  try {
    let newTicket = await TicketModel.create({
      userId,
      category,
      title,
      message,
    });
    res.json({ message: "success", response: newTicket });
  } catch (e) {
    res.status(500).json({ message: "error", response: e.message });
  }
});

module.exports = router;
