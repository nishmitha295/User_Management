// Global error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  let statusCode = err.statusCode || 500;
  let message = "Internal server error";
  let errors = null;

  if (err.message === "User not found") {
    statusCode = 404;
    message = "User not found";
  } else if (err.message === "Email already exists") {
    statusCode = 409;
    message = "Email already exists";
  } else if (err.name === "SequelizeUniqueConstraintError") {
    statusCode = 409;
    message = "Email already exists";
  } else if (err.name === "SequelizeValidationError") {
    statusCode = 400;
    message = "Validation failed";
    errors = err.errors.map(e => e.message);
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};

// 404 handler for undefined routes
const notFound = (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  error.statusCode = 404;
  next(error);
};

module.exports = { errorHandler, notFound };
