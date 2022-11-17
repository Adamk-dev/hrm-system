const companyRouter = require("express").Router();
const companyController = require("../../controllers/Company/Company");
const { verifyUser } = require("../../utils/auth");

companyRouter.post("/register", companyController.register);
companyRouter.post("/accept", companyController.acceptCompanyReq);

module.exports = companyRouter;
