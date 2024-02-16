const express = require("express");
const conversationController = require("../controllers/conversationController");
const authController = require("../controllers/authController");
const router = express.Router();

router
  .route("/")
  .post(authController.protect, conversationController.createConversation)
  .delete(conversationController.deleteAll);
router
  .route("/:id")
  .delete(conversationController.deleteConversation)
  .patch(authController.protect, conversationController.updateConversation);
module.exports = router;
