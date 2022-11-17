const Company = require("../../models/Company");
const responses = require("../../constants/responses");

const signUpReq = async (companyInfo) => {
  try {
    const company = await Company.create({
      no_of_employees: companyInfo.no_of_employees,
      role: companyInfo.role,
    });
    if (!company) {
      return false;
    }
    return company;
  } catch (error) {
    console.error(error);
  }
};
const acceptCompany = async (id) => {
  try {
    const companyReq = await Company.update(
      {
        status: "active",
      },
      {
        where: {
          id: id,
        },
      }
    );
    if (companyReq[0] == 0) {
      return false;
    }
    return true;
  } catch (error) {
    console.error(error);
  }
};
const checkIfCompanyAlreadyAccepted = async (id) => {
  try {
    const companyReq = await Company.findOne({
      where: {
        id: id,
        status: "active",
      },
    });
    if (!companyReq) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  signUpReq,
  acceptCompany,
  checkIfCompanyAlreadyAccepted,
};
