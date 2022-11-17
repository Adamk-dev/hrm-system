const userRouter = require("express").Router();
const userController = require("../../controllers/User/User");

userRouter.get("/", userController.getUsersList);
userRouter.post("/register", userController.register);

module.exports = userRouter;
