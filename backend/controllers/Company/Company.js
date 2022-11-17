const responses = require("../../constants/responses");
const companyService = require("../../services/Company/Company");
const userService = require("../../services/User/User");
const errorResponses = require("../../constants/errorResponses");

const register = async (req, res, next) => {
  try {
    const {
      email,
      first_name,
      last_name,
      phone_no,
      no_of_employees,
      role,
      password,
    } = req.body;

    const companyInfo = {
      no_of_employees,
      role,
    };
    const companyReq = await companyService.signUpReq(companyInfo);
    if (!companyReq) {
      res.send(
        responses.genericResponse(500, false, null, {
          message: errorResponses.FAILURE,
        })
      );
      return;
    }
    const userInfo = {
      email,
      first_name,
      last_name,
      phone_no,
      password,
      company_id: companyReq.dataValues.id,
    };
    const user = await userService.createUser(userInfo);
    if (!user) {
      res.send(
        responses.genericResponse(500, false, null, {
          message: errorResponses.FAILURE,
        })
      );
      return;
    } else if (responses.EMAIL_ALREADY_EXISTS == user) {
      res.send(
        responses.genericResponse(500, false, null, {
          message: responses.EMAIL_ALREADY_EXISTS,
        })
      );
      return;
    }
    res.send(
      responses.genericResponse(
        200,
        true,
        {
          message: responses.CLIENT_REGISTERED_SUCCESS,
        },
        null
      )
    );
  } catch (e) {
    next(e);
  }
};
const acceptCompanyReq = async (req, res, next) => {
  try {
    const { id } = req.body;
    const alreadyExists = await companyService.checkIfCompanyAlreadyAccepted(
      id
    );
    if (!alreadyExists) {
      res.send(
        responses.genericResponse(500, false, null, {
          message: responses.ALREADY_ACCEPTED,
        })
      );
      return;
    }
    const company = await companyService.acceptCompany(id);
    if (!company) {
      res.send(
        responses.genericResponse(500, false, null, {
          message: responses.FAILED,
        })
      );
      return;
    }
    const user = await userService.getUserByCompanyId(id);
    const assignRole = await userService.assignAdminRole(user.dataValues.id);
    if (!assignRole) {
      res.send(500, false, null, {
        message: responses.FAILED,
      });
      return;
    }
    res.send(
      responses.genericResponse(
        200,
        true,
        {
          message: responses.CLIENT_ACCEPTED,
        },
        null
      )
    );
  } catch (e) {
    next(e);
  }
};
module.exports = {
  register,
  acceptCompanyReq,
};
