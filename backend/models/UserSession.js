const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const UserSession = sequelize.define(
  "user_sessions",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rememberMe: {
      type: DataTypes.BOOLEAN,
    },
  },
  { underscored: true }
);

module.exports = UserSession;
