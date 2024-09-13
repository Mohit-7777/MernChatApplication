const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Route for registering a new user
router.route("/").post(registerUser);

// Route for getting all users (protected)
router.route("/").get(protect, allUsers);

// Route for user login
router.post("/login", authUser);

module.exports = router;
