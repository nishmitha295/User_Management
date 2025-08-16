const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middleware/errorHandler");

dotenv.config();
const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", userRoutes);
app.use(notFound);
app.use(errorHandler);
app.use(cors());

// DB Sync
sequelize.sync().then(() => {
  console.log("Database connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch(err => console.log("Error: " + err));
