const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/getAllUsers", userController.getUsers);

router.route("/").get(authController.protect, userController.getUser).post();
router.route("/verify/:id").get(userController.verifyUser);
router.route("/:id").get(userController.getUser).patch().delete();

module.exports = router;
