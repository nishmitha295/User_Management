const { body, param } = require("express-validator");

// Validation rules for creating a user
const createUserValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required!")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required!")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required!")
    .isLength({ min: 10, max: 20 })
    .withMessage("Phone number must be between 10 and 20 characters")
    .matches(/^[0-9+]+$/)
    .withMessage("Please provide a valid phone number"),
];

// Validation rules for updating a user
const updateUserValidation = [
  param("id")
    .isInt({ min: 1 })
    .withMessage("User ID must be a positive integer"),

  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Name cannot be empty")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),

  body("email")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),

  body("phone")
    .optional()
    .trim()
    .isLength({ min: 10, max: 20 })
    .withMessage("Phone number must be between 10 and 20 characters")
    .matches(/^[0-9+]+$/)
    .withMessage("Please provide a valid phone number"),
];

// Validation rules for user ID parameter
const userIdValidation = [
  param("id")
    .isInt({ min: 1 })
    .withMessage("User ID must be a positive integer"),
];

module.exports = {
  createUserValidation,
  updateUserValidation,
  userIdValidation,
};
