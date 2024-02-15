const Converstion = require("../model/conversationModel");
const cathcAsync = require("../utils/catchAsync");
const User = require("../model/userModel");
const { default: mongoose } = require("mongoose");

exports.createConversation = cathcAsync(async (req, res, next) => {
  const userId = req.params.userId;
  const { name, createdAt } = req.body;
  const conversation = await Converstion.create({ name, createdAt });
  const objectId = new mongoose.Types.ObjectId(conversation._id);
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
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
