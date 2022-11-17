const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const User = sequelize.define(
  "task_categories",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    task_category_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

module.exports = User;
