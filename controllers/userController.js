const { validationResult } = require("express-validator");
const userService = require("../services/userService");

// Create User
exports.createUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const user = await userService.createUser(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json({
      success: true,
      message: "Users retrieved successfully",
      data: users,
      count: users.length,
    });
  } catch (error) {
    next(error);
  }
};

// Get User by ID
exports.getUserById = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const user = await userService.getUserById(req.params.id);
    res.json({
      success: true,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

