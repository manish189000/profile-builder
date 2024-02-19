const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name"],
    minlength: [1, "Name must be atleast 1 character"],
    trim: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    select: false,
  },
  email: {
    type: String,
    required: [true, "Please submit your email"],
    validate: [validator.isEmail, "Please enter a valid email"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  plan: {
    type: String,
    enum: ["Free", "Basic", "Premium"],
    default: "Free",
  },
  totalTokens: {
    type: Number,
    default: 1000,
  },
  remainingTokens: {
    type: Number,
    default: 1000,
  },
  conversations: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },
  ],
  //   todos: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Todo",
  //     },
  //   ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  passwordChangedAt: {
    type: Date,
    select: false,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  fullName: {
    type: String,
    trim: true,
    maxlength: [50, "Full name must be at most 50 characters"],
  },
  shortDescription: {
    type: String,
    trim: true,
    maxlength: [400, "Short description must be at most 200 characters"],
  },
  educationDetails: {
    type: String,
    trim: true,
    maxlength: [400, "Education details must be at most 500 characters"],
  },
  workExperience: {
    type: String,
    trim: true,
    maxlength: [600, "Work experience must be at most 500 characters"],
  },
  achievements: {
    type: String,
    trim: true,
    maxlength: [400, "Achievements must be at most 300 characters"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  const isPasswordCorrect = await bcrypt.compare(
    enteredPassword,
    this.password
  );
  return isPasswordCorrect;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
