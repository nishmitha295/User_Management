const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      len: {
        args: [2, 100],
        msg: "Name must be between 2 and 100 characters",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: "Please provide a valid email address",
      },
    },
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      len: {
        args: [10, 20],
        msg: "Phone number must be between 10 and 20 characters",
      },
      is: {
        args: /^[0-9+]+$/i,
        msg: "Please provide a valid phone number",
      },
    },
  },
}, {
  tableName: "users",
  timestamps: true,
  underscored: true,
});

module.exports = User;
