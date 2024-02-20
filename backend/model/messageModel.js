const mongoose = require("mongoose");

// Define the Message schema
const messageSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    // You can include additional fields like timestamps if needed
  },
  {
    timestamps: {
      type: Date,
      default: Date.now,
    },
  }
);

// Define the Message model
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
