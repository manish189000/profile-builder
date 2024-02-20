const express = require("express");
const messageController = require("../controllers/messageController");
const router = express.Router();
const authController = require("../controllers/authController");

// Route to create a new message
router.post(
  "/:conversationId",
  authController.protect,
  messageController.createMessage
);

// Route to get all messages in a conversation
router.get(
  "/:conversationId",
  authController.protect,
  messageController.getAllMessages
);

// Route to update a message
// router.patch("/:messageId", messageController.updateMessage);

// Route to delete a message
router.delete("/messages/:messageId", messageController.deleteMessage);

module.exports = router;
