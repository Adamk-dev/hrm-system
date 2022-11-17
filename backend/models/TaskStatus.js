const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const User = sequelize.define(
  "task_status",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

module.exports = User;
