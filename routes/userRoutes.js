const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {
  createUserValidation,
  updateUserValidation,
  userIdValidation,
} = require("../middleware/validation");

// CRUD routes
router.post("/users", createUserValidation, userController.createUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userIdValidation, userController.getUserById);
router.put("/users/:id", updateUserValidation, userController.updateUser);
router.delete("/users/:id", userIdValidation, userController.deleteUser);

module.exports = router;
