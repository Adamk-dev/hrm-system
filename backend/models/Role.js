const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Role = sequelize.define(
  "roles",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

module.exports = Role;
