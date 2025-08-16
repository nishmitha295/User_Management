const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middleware/errorHandler");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", userRoutes);
app.use(notFound);
app.use(errorHandler);

// DB Sync
sequelize.sync().then(() => {
  console.log("Database connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch(err => console.log("Error: " + err));
