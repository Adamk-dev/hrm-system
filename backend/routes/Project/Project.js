const projectRouter = require("express").Router();
const projectController = require("../../controllers/Project/Project");
const { verifyUser } = require("../../utils/auth");

projectRouter.post("/create", verifyUser, projectController.createProject);
projectRouter.get("/", verifyUser, projectController.getProject);
projectRouter.put("/update", verifyUser, projectController.updateProject);

module.exports = projectRouter;
