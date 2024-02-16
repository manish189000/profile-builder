const { default: mongoose } = require("mongoose");
const User = require("./userModel");

const converstionSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "AI chat",
    minlength: [3, "Chat title must be atleast 3 characters"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
  // messages: [messageSchema],
});
converstionSchema.pre("remove", async function (next) {
  const user = this;
  // Remove all posts associated with the user
  await User.deleteOne({ conversations: user._id });
  next();
});

const Converstion = mongoose.model("Conversation", converstionSchema);

module.exports = Converstion;
