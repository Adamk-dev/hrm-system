const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Permission = sequelize.define(
  "permissions",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    permission_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

module.exports = Permission;
