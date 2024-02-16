const Converstion = require("../model/conversationModel");
const cathcAsync = require("../utils/catchAsync");
const User = require("../model/userModel");
const { default: mongoose } = require("mongoose");

exports.createConversation = cathcAsync(async (req, res, next) => {
  const { title, createdAt } = req.body;
  const conversation = await Converstion.create({ title, createdAt });
  const objectId = new mongoose.Types.ObjectId(conversation._id);
  const updatedUser = await User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { conversations: objectId } },
    { new: true }
  );

  res.status(201).json({
    status: "success",
    conversation,
  });
});

exports.deleteConversation = cathcAsync(async (req, res, next) => {
  const { id } = req.params;
  const conversation = await Converstion.findByIdAndDelete(id);
  res.status(200).json({
    status: "success",
    data: null,
  });
});

exports.deleteAll = cathcAsync(async (req, res, next) => {
  const conversations = await Converstion.deleteMany({});
  res.status(200).json({
    status: "success",
    data: null,
  });
});

// Read conversation by ID
exports.getConversation = cathcAsync(async (req, res, next) => {
  const { id } = req.params;
  const conversation = await Converstion.findById(id);

  if (!conversation) {
    return res.status(404).json({
      status: "fail",
      message: "Conversation not found",
    });
  }

  res.status(200).json({
    status: "success",
    conversation,
  });
});

// Get all conversations for a user
exports.getAllConversations = cathcAsync(async (req, res, next) => {
  const userConversations = await User.findById(req.user._id).populate(
    "conversations"
  );

  res.status(200).json({
    status: "success",
    conversations: userConversations.conversations,
  });
});

// Update conversation by ID
exports.updateConversation = cathcAsync(async (req, res, next) => {
  const { id } = req.params;
  const { title } = req.body;

  const updatedConversation = await Converstion.findByIdAndUpdate(
    id,
    { title },
    { new: true, runValidators: true }
  );

  if (!updatedConversation) {
    return res.status(404).json({
      status: "fail",
      message: "Conversation not found",
    });
  }

  res.status(200).json({
    status: "success",
    conversation: updatedConversation,
  });
});
