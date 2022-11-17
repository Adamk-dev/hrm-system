const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const setInitialStatus = async (company) => {
  try {
    company.status = "pending";
  } catch (error) {
    console.error(error);
  }
};
const Company = sequelize.define(
  "companys",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    no_of_employees: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
    hooks: {
      beforeCreate: setInitialStatus,
    },
  }
);

module.exports = Company;
