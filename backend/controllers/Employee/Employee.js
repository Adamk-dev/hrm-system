const responses = require("../../constants/responses");
const userService = require("../../services/User/User");
const employeeService = require("../../services/Employee/Employee");

const updateEmployee = async (req, res, next) => {
  try {
    const employee = await employeeService.updateEmployee(req.body);
    const user = await userService.updateUser(req.body);

    if (!employee || !user) {
      res.send(
        responses.genericResponse(500, false, null, {
          message: responses.FAILED,
        })
      );
      return;
    }

    res.send(
      responses.genericResponse(
        200,
        true,
        {
          message: responses.SUCCESS,
        },
        null
      )
    );
  } catch (e) {
    next(e);
  }
};
const createEmployee = async (req, res, next) => {
  try {
    const {
      email,
      password,
      phone_no,
      first_name,
      last_name,
      company_id,
      role,
    } = req.body;
    let userInfo = {
      email: email,
      password: password,
      phone_no: phone_no,
      first_name: first_name,
      last_name: last_name,
      company_id: company_id,
    };
    const user = await userService.createUser(userInfo);
    if (user == responses.EMAIL_ALREADY_EXISTS) {
      res.send(
        responses.genericResponse(500, false, null, {
          message: responses.EMAIL_ALREADY_EXISTS,
        })
      );
      return;
    }
    const assignRole = await userService.assignEmployeeRole(user.dataValues.id);
    if (!assignRole) {
      res.send(500, false, null, {
        message: responses.FAILED,
      });
      return;
    }
    let employeeInfo = {
      job_title: role,
      user_id: user.dataValues.id,
      phone_number: user.dataValues.phone_no,
    };
    const employee = await employeeService.createEmployee(employeeInfo);

    if (!employee) {
      res.send(
        responses.genericResponse(500, false, null, {
          message: responses.FAILED,
        })
      );
      return;
    }
    res.send(
      responses.genericResponse(
        200,
        true,
        {
          message: responses.SUCCESS,
        },
        null
      )
    );
    return;
  } catch (e) {
    next(e);
  }
};
const getEmployee = async (req, res, next) => {
  try {
    const { id } = req.query;
    const employee = await employeeService.getEmployeeById(id);
    if (!employee) {
      res.send(responses.genericResponse(500, false, null));
      return;
    }
    res.send(responses.genericResponse(200, true, employee, null));
  } catch (e) {
    res.send(responses.genericResponse(500, false, null));
  }
};
module.exports = {
  updateEmployee,
  createEmployee,
  getEmployee,
};
