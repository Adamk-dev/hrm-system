const sessionRouter = require("express").Router();
const sessionController = require("../../controllers/User/Session");
const { verifyUserOnLogin } = require("../../utils/auth.js"); //Passport authentication functions

sessionRouter.post("/login", verifyUserOnLogin, sessionController.login);
sessionRouter.get("/loginFailed", sessionController.loginFailed);

module.exports = sessionRouter;
