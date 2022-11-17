const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const User = sequelize.define(
  "tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    task_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    task_description: {
      type: DataTypes.STRING,
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATE,
    },
  },
  {
    underscored: true,
  }
);

module.exports = User;
