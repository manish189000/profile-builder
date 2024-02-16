const Conversation = require("../model/conversationModel");
const Message = require("../model/messageModel");
const catchAsync = require("../utils/catchAsync");

// Controller to create a new message
exports.createMessage = catchAsync(async (req, res, next) => {
  const { conversationId } = req.params;
  const { question, answer } = req.body;
  console.log("Convo id: ", conversationId);
  // Check if the conversation exists
  const conversationExists = await Conversation.findById(conversationId);
  if (!conversationExists) {
    return res.status(404).json({
      status: "fail",
      message: "Conversation not found",
    });
  }

  const newMessage = await Message.create({ question, answer });

  // Update the conversation's messages array with the new message's _id
  await Conversation.findByIdAndUpdate(
    conversationId,
    { $push: { messages: newMessage._id } },
    { new: true }
  );

  res.status(201).json({
    status: "success",
    message: newMessage,
  });
});

// Controller to get all messages in a conversation
exports.getAllMessages = catchAsync(async (req, res, next) => {
  const { conversationId } = req.params;

  // Check if the conversation exists
  const conversationExists = await Conversation.findById(conversationId);
  if (!conversationExists) {
    return res.status(404).json({
      status: "fail",
      message: "Conversation not found",
    });
  }

  const messages = await Message.find({
    _id: { $in: conversationExists.messages },
  });

  res.status(200).json({
    status: "success",
    messages,
  });
});

// Controller to update a message
exports.updateMessage = catchAsync(async (req, res, next) => {
  const { messageId } = req.params;
  const { question, answer } = req.body;

  const updatedMessage = await Message.findByIdAndUpdate(
    messageId,
    { question, answer },
    { new: true, runValidators: true }
  );

  if (!updatedMessage) {
    return res.status(404).json({
      status: "fail",
      message: "Message not found",
    });
  }

  res.status(200).json({
    status: "success",
    message: updatedMessage,
  });
});

// Controller to delete a message
exports.deleteMessage = catchAsync(async (req, res, next) => {
  const { messageId } = req.params;

  const deletedMessage = await Message.findByIdAndDelete(messageId);

  if (!deletedMessage) {
    return res.status(404).json({
      status: "fail",
      message: "Message not found",
    });
  }

  res.status(200).json({
    status: "success",
    message: null,
  });
});
