const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const UserRole = sequelize.define(
  "user_roles",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

module.exports = UserRole;
