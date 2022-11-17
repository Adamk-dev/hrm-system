const User = require("../../models/User");
const Role = require("../../models/Role");
const UserRole = require("../../models/UserRole");
const responses = require("../../constants/responses");
const { Op } = require("sequelize");

const createUser = async (companyInfo) => {
  try {
    const alreadyExists = await User.findOne({
      where: {
        email: companyInfo.email,
      },
    });
    if (alreadyExists) {
      return responses.EMAIL_ALREADY_EXISTS;
    }
    const user = await User.create({
      email: companyInfo.email,
      password: companyInfo.password,
      phone_no: companyInfo.phone_no,
      first_name: companyInfo.first_name,
      last_name: companyInfo.last_name,
      company_id: companyInfo.company_id,
    });
    if (!user) {
      return false;
    }
    return user;
  } catch (error) {
    console.error(error);
  }
};
// Username can either be user_name or user_email attribute of the DB
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({
      where: { email: email },
      include: { model: Role, attributes: ["role_name", "id"] },
    });
    if (!user) {
      return false;
    }
    return user;
  } catch (error) {
    console.error(error);
  }
};
const getUserByCompanyId = async (id) => {
  try {
    const user = await User.findOne({
      where: { company_id: id },
    });
    if (!user) {
      return false;
    }
    return user;
  } catch (error) {
    console.error(error);
  }
};

const assignEmployeeRole = async (user_id) => {
  try {
    const request = await UserRole.create({
      userId: user_id,
      roleId: 1,
    });
    if (!request) {
      return false;
    }
    return request;
  } catch (error) {
    console.error(error);
  }
};
const assignAdminRole = async (user_id) => {
  try {
    const request = await UserRole.create({
      userId: user_id,
      roleId: 2,
    });
    if (!request) {
      return false;
    }
    return request;
  } catch (error) {
    console.error(error);
  }
};
const updateUser = async (userInfo) => {
  try {
    const user = await User.update(
      {
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
      },
      {
        where: {
          id: userInfo.id,
        },
      }
    );
    if (!user[0]) {
      return false;
    }
    return user;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  createUser,
  getUserByEmail,
  assignEmployeeRole,
  assignAdminRole,
  getUserByCompanyId,
  updateUser,
};
