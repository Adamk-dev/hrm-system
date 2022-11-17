const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Client = sequelize.define(
  "clients",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    client_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    email: {
      type: DataTypes.CHAR(60),
    },
  },
  {
    underscored: true,
  }
);

module.exports = Client;
