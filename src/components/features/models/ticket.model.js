const { Schema, model, default: mongoose } = require("mongoose");

const TicketSchema = new Schema(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const TicketModel = model("ticket", TicketSchema);
module.exports = TicketModel;
