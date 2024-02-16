const express = require("express");
const morgan = require("morgan");
const todoRouter = require("./routes/todoRouter");
const userRouter = require("./routes/userRouter");
const conversationRouter = require("./routes/conversationRouter");
const dotenv = require("dotenv").config({ path: "./config.env" });
const globalErrorHandler = require("./controllers/errorController");
const messageRouter = require("./routes/messageRouter");
const cors = require("cors");
//MIDDLEWARES

const app = express();
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/conversation", conversationRouter);
app.use("/api/v1/message", messageRouter);
app.all("*", (req, res, next) => {
  //   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  res.status(404).json({
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     status: "failure",
//     message: "An error occured",
//   });
// });
app.use(globalErrorHandler);
module.exports = app;
