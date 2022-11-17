const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Project = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
  }
);

module.exports = Project;
