const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Screen = sequelize.define(
  "screens",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    screen_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    screen_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

module.exports = Screen;
