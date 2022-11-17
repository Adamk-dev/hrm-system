const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const { hashPassword } = require("../utils/auth");

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.CHAR(60),
    },
    phone_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
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
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
    },
  }
);

module.exports = User;
