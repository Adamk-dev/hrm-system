const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const LogTaskHours = sequelize.define(
  "logs_tasks_hours",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hours_worked: {
      type: DataTypes.DECIMAL(4, 2),
    },
  },
  {
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ["date", "task_id"],
      },
    ],
  }
);

module.exports = LogTaskHours;
