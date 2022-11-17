const responses = require("../../constants/responses");
const userService = require("../../services/User/User");

const getUsersList = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    if (!users) {
      res.send(
        responses.genericResponse(500, false, null, {
          message: responses.USERS_NOT_FOUND,
        })
      );
      return;
    }
    res.send(responses.genericResponse(200, true, { users }, null));
    return;
  } catch (error) {
    next(error);
  }
};
const register = async (req, res, next) => {
  const {
    email,
    firstName,
    lastName,
    phoneNo,
    noOfEmployess,
    password,
    role,
    job_title,
  } = req.body;
};

module.exports = {
  getUsersList,
  register,
};
