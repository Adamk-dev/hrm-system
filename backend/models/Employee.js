const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Employee = sequelize.define(
  "employees",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    dob: {
      field: "date_of_birth",
      type: DataTypes.DATE,
    },
    job_title: {
      type: DataTypes.STRING,
    },
    departments: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    alt_phone_number: {
      type: DataTypes.STRING,
    },
    marital_status: {
      type: DataTypes.STRING,
    },
    cnic: {
      type: DataTypes.STRING,
    },
    skills: {
      type: DataTypes.JSON,
    },
  },
  {
    underscored: true,
  }
);

module.exports = Employee;
