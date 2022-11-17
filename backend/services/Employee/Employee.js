const User = require("../../models/User");
const Role = require("../../models/Role");
const Employee = require("../../models/Employee");
const UserRole = require("../../models/UserRole");
const responses = require("../../constants/responses");
const { Op } = require("sequelize");

const createEmployee = async (employeeInfo) => {
  try {
    const employee = await Employee.create({
      userId: employeeInfo.user_id,
      job_title: employeeInfo.job_title,
      phone_number: employeeInfo.phone_number,
    });
    if (!employee) {
      return false;
    }
    return employee;
  } catch (error) {
    console.error(error);
  }
};
const updateEmployee = async (employeeInfo) => {
  try {
    const employee = await Employee.update(
      {
        dob: employeeInfo.date_of_birth,
        job_title: employeeInfo.job_title,
        departments: employeeInfo.departments,
        address: employeeInfo.address,
        city: employeeInfo.city,
        phone_number: employeeInfo.phone_number,
        alt_phone_number: employeeInfo.alt_phone_number,
        cnic: employeeInfo.cnic,
        marital_status: employeeInfo.marital_status,
        skills: employeeInfo.skills,
      },
      {
        where: {
          userId: employeeInfo.id,
        },
      }
    );
    if (!employee[0]) {
      return false;
    }
    return employee;
  } catch (error) {
    console.error(error);
  }
};
const getEmployeeById = async (id) => {
  try {
    const employee = await Employee.findOne({
      where: {
        userId: id,
      },
      include: {
        model: User,
        attributes: ["email", "first_name", "last_name"],
      },
    });
    if (employee && employee.dataValues) {
      return employee.dataValues;
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createEmployee,
  updateEmployee,
  getEmployeeById,
};
