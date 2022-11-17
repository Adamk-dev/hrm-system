const employeeRouter = require("express").Router();
const employeeController = require("../../controllers/Employee/Employee");
const { verifyUser } = require("../../utils/auth");

employeeRouter.post("/create", verifyUser, employeeController.createEmployee);
employeeRouter.get("/", verifyUser, employeeController.getEmployee);
employeeRouter.put("/update", verifyUser, employeeController.updateEmployee);

module.exports = employeeRouter;
